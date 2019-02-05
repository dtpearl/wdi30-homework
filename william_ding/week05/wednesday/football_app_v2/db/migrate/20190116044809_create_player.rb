class CreatePlayer < ActiveRecord::Migration[5.2]
  def change
    create_table :players do |t|
      t.text :name
      t.text :nation
      t.text :team
      t.text :position
      t.integer :age
      t.integer :rating
      t.text :image
    end
  end
end
