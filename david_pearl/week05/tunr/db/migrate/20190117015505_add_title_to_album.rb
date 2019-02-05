class AddTitleToAlbum < ActiveRecord::Migration[5.2]
  def change
    add_column :albums, :title, :text
  end
end
