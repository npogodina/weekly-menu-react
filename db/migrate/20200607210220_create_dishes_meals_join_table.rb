class CreateDishesMealsJoinTable < ActiveRecord::Migration[6.0]
  def change
    create_join_table :dishes, :meals do |t|
      t.index :dish_id
      t.index :meal_id
    end
  end
end
