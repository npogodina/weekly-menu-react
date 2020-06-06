class Api::DishesController < ApplicationController
  def index
    render json: { :message => "Well done, dishes!"}
  end
end
