class Api::DishesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    dishes = Dish.order(:name).as_json(
      only: [:id, :name, :servings, :recipe, :meals, :ingredients],
      include: {:meals => { :only => [:id, :name] }, 
                :ingredients => {:only => [:id, :name, :quantity] }
              }
    )
    render json: dishes, status: :ok
  end

  # REMOVE? React takes data from index json array
  # def show
  #   dish = Dish.find_by(id: params[:id])

  #   if dish
  #     render json: dish.as_json(
  #       only: [:id, :name, :servings, :recipe, :meals],
  #       include: {:meals => { :only => [:id, :name] }}
  #     ), status: :ok
  #   else 
  #     render json: { errors: ["Not Found"] }, status: :not_found
  #   end
  # end

  # def new
  #   @dish = Dish.new
  # end

  def create
    dish = Dish.new(dish_params[:dish])
    dish.save
    dish.reload    

    dish_params[:ingredients].each do |ingredient_hash|
      food_item = FoodItem.find_by(name: ingredient_hash[:name])
      if food_item.nil?
        food_item = FoodItem.new(name: ingredient_hash[:name])
      end

      ingredient = Ingredient.new(
        name: ingredient_hash[:name],
        quantity: ingredient_hash[:quantity],
        dish: dish,
        food_item: food_item
      )
      ingredient.save
    end
    
    if dish.save
      render json: dish.as_json(
        only: [:id, :name, :meals, :servings, :recipe],
        include: {:meals => { :only => [:id, :name] },
                  :ingredients => { :only => [:id, :name, :quantity] }}
      ), status: :created  
    else 
      render json: { errors: dish.errors.messages }, status: :bad_request
    end
  end

  def update
    dish = Dish.find_by(id: params[:id])
    if dish.nil?
      render json: { errors: "Dish not found" }, status: :not_found
    elsif dish.update(dish_params)
      render json: dish.as_json(
        only: [:id, :name, :meals, :servings, :recipe],
        include: {:meals => { :only => [:id, :name] }}
      ), status: :ok  
    else 
      render json: { errors: dish.errors.messages }, status: :bad_request
    end
  end

  private

  def dish_params
    params.permit(:ingredients => [:name, :quantity], 
                  :dish => [:name, :servings, :recipe, meal_ids: []])

    # params.require(:foo).permit(:bar, {:baz => [:x, :y]})
  end
end
