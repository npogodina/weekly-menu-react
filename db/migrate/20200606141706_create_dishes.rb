class CreateDishes < ActiveRecord::Migration[6.0]
  def change
    create_table :dishes do |t|
      t.string :name
      t.integer :servings
      t.string :meal
      t.string :recipe

      t.timestamps
    end
  end
end
