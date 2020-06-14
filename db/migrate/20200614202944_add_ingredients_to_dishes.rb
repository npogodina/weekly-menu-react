class AddIngredientsToDishes < ActiveRecord::Migration[6.0]
  def change
    add_reference :ingredients, :dish, index: true
  end
end
