class AddIngredientsToFoodItems < ActiveRecord::Migration[6.0]
  def change
    add_reference :ingredients, :food_item, index: true
  end
end
