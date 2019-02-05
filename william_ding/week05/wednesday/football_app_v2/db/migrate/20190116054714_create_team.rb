class CreateTeam < ActiveRecord::Migration[5.2]
  def change
    create_table :teams do |t|
      t.text :name
      t.text :city
      t.text :stadium
      t.integer :title
      t.text :image

      t.timestamps
    end
  end
end
