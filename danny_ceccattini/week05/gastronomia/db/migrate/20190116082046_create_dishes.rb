class CreateDishes < ActiveRecord::Migration[5.2]
  def change
    create_table :dishes do |t|
      t.text :name
      t.text :region
      t.text :course
      t.text :wine
      t.text :key_ingredient
      t.text :image
    end
  end
end
