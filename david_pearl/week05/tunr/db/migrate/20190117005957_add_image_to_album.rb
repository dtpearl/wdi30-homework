class AddImageToAlbum < ActiveRecord::Migration[5.2]
  def change
    add_column :albums, :image, :text
  end
end
