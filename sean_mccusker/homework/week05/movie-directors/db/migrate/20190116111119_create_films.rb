class CreateFilms < ActiveRecord::Migration[5.2]
  def change
    create_table :films do |t|
      t.text :title
      t.text :year
      t.text :rotten_tomatoes
      t.text :image
    end
  end
end
