class Dish < ApplicationRecord
  has_and_belongs_to_many :meals
  has_many :ingredients

  validates :name, presence: true, uniqueness: true
  validates :servings, numericality: { only_integer: true, greater_than: 0 }

  before_save :default_values
  
  def default_values
    self.name = self.name.split.map(&:capitalize).join(' ')
  end
end
