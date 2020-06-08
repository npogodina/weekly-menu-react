class Api::DishesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    dishes = Dish.order(:name).as_json(
      only: [:id, :name, :servings, :recipe, :meals],
      include: {:meals => { :only => [:id, :name] }}
    )
    render json: dishes, status: :ok
  end

  def show
    dish = Dish.find_by(id: params[:id])

    if dish
      render json: dish.as_json(
        only: [:id, :name, :servings, :recipe, :meals],
        include: {:meals => { :only => [:id, :name] }}
      ), status: :ok
    else 
      render json: { errors: ["Not Found"] }, status: :not_found
    end
  end

  # def new
  #   @dish = Dish.new
  # end

  def create
    dish = Dish.new(dish_params) 
    if dish.save
      render json: dish.as_json(
        only: [:id, :name, :meals, :servings, :recipe],
        include: {:meals => { :only => [:id, :name] }}
      ), status: :created  
      # redirect_to: dish_path(dish)
    else 
      render json: { errors: dish.errors.messages }, status: :bad_request
      return
    end
  end

  private

  def dish_params
    params.permit(:name, :servings, :recipe, meal_ids: [])
  end
end
