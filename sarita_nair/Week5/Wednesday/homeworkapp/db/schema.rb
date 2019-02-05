# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_01_16_111511) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "customers", force: :cascade do |t|
    t.text "name"
    t.text "dob"
    t.text "gender"
    t.text "phone"
    t.text "state"
    t.text "city"
    t.text "country"
  end

  create_table "departments", force: :cascade do |t|
    t.text "name"
  end

  create_table "employees", force: :cascade do |t|
    t.text "name"
    t.text "dob"
    t.text "doj"
    t.text "doe"
    t.text "designation"
    t.integer "department_id"
  end

  create_table "orders", force: :cascade do |t|
    t.integer "customer_id"
    t.float "amount"
    t.text "orderno"
    t.text "item"
  end

end
