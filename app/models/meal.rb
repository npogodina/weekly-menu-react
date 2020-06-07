class Meal < ApplicationRecord
  has_and_belongs_to_many :dishes

  validates :name, presence: true, uniqueness: true
end
