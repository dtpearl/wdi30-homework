class CreateBands < ActiveRecord::Migration[5.2]
  def change
    create_table :bands do |t|
      t.text :name
      t.text :country
      t.text :genre
      t.integer :followers
      t.text :image
      
    end
  end
end
