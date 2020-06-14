# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_06_14_204905) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "dishes", force: :cascade do |t|
    t.string "name"
    t.integer "servings"
    t.string "recipe"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "dishes_meals", id: false, force: :cascade do |t|
    t.bigint "dish_id", null: false
    t.bigint "meal_id", null: false
    t.index ["dish_id", "meal_id"], name: "index_dishes_meals_on_dish_id_and_meal_id", unique: true
    t.index ["dish_id"], name: "index_dishes_meals_on_dish_id"
    t.index ["meal_id"], name: "index_dishes_meals_on_meal_id"
  end

  create_table "food_items", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "ingredients", force: :cascade do |t|
    t.integer "quantity"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "dish_id"
    t.bigint "food_item_id"
    t.string "name"
    t.index ["dish_id"], name: "index_ingredients_on_dish_id"
    t.index ["food_item_id"], name: "index_ingredients_on_food_item_id"
  end

  create_table "meals", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
