class RemoveMealFromDishes < ActiveRecord::Migration[6.0]
  def change
    remove_column :dishes, :meal
  end
end
