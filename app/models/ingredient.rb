class Ingredient < ApplicationRecord
  belongs_to :dish
  belongs_to :food_item
end
