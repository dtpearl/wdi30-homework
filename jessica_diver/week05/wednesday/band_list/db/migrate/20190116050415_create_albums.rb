class CreateAlbums < ActiveRecord::Migration[5.2]
  def change
    create_table :albums do |t|
      t.text :title
      t.text :year
      t.integer :songs
      t.integer :length
      t.text :cover

      t.integer :band_id
    end
  end
end
