class Api::DishesController < ApplicationController
  def index
    dishes = Dish.order(:name).as_json(only: [:id, :name, :meal, :servings, :recipe])
    render json: dishes, status: :ok
  end
end
