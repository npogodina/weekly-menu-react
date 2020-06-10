class ValidateDishMealPair < ActiveRecord::Migration[6.0]
  def change
    add_index :dishes_meals, [:dish_id, :meal_id], unique: true
  end
end
