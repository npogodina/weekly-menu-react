class Ingredient < ApplicationRecord
  belongs_to :dish
  belongs_to :food_item

  before_save :default_values

  def default_values
    self.name = self.food_item.name
  end
end
