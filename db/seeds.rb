# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# JSON.parse(File.read('db/seeds/dishes.json')).each do |dish|
#   Dish.create!(dish)
# end

# puts "The database now has #{Dish.count} dishes."

require "csv"

DATA_FILE = Rails.root.join("db", "seeds", "food_items.csv")

food_item_failures = []
CSV.foreach(DATA_FILE, :headers => true) do |row|
  food_item = FoodItem.new
  food_item.name = row['name']

  successful = food_item.save
  if !successful
    food_item_failures << food_item
    puts "Failed to save food_item: #{food_item.inspect}"
  else
    puts "Created food_item: #{food_item.inspect}"
  end
end

puts "Added #{food_item.count} food_item records"
puts "#{food_item_failures.length} food_items failed to save"