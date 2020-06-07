class Api::DishesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    dishes = Dish.order(:name).as_json(only: [:id, :name, :meal, :servings, :recipe])
    render json: dishes, status: :ok
  end

  def show
    dish = Dish.find_by(id: params[:id])

    if dish
      render json: dish.as_json(
        only: [:id, :name, :meal, :servings, :recipe]
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
        only: [:id, :name, :meal, :servings, :recipe]
      ), status: :created  
    else 
      render json: { errors: dish.errors.messages }, status: :bad_request
      return
    end
  end

  private

  def dish_params
    params.permit(:name, :meal, :servings, :recipe)
  end
end
