class CreateCities < ActiveRecord::Migration[5.2]
  def change
    create_table :cities do |t|
      t.text :name
      t.text :population
      t.text :image
      t.text :time_zone
      t.integer :country_id

      t.timestamps
    end
  end
end
