class Api::DishesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    dishes = Dish.order(:name).as_json(
      only: [:id, :name, :servings, :recipe, :meals],
      include: {:meals => { :only => [:id, :name] }}
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
    dish = Dish.new(dish_params) 
    if dish.save
      render json: dish.as_json(
        only: [:id, :name, :meals, :servings, :recipe],
        include: {:meals => { :only => [:id, :name] }}
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
    params.permit(:name, :servings, :recipe, meal_ids: [])
  end
end
