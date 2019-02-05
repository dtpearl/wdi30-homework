class CreateRegions < ActiveRecord::Migration[5.2]
  def change
    create_table :regions do |t|
      t.text :name
      t.text :capital
      t.integer :population
      t.text :flag
      t.text :image

      t.timestamps
    end
  end
end
