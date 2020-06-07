class Api::DishesController < ApplicationController
  def index
    dishes = Dish.order(:name).as_json(only: [:id, :name, :meal, :servings, :recipe])
    render json: dishes, status: :ok
  end

  def show
    dish = Dish.find_by(id: params[:id])

    if dish
      render json: dish.as_json(
        only: [:id, :name, :meal, :servings, :recipe]
      )
    else 
      render json: { errors: ["Not Found"] }, status: :not_found
    end
  end

  def dish_params
    # params.permit(:title, :overview, :release_date, :total_inventory, :available_inventory)
  end
end
