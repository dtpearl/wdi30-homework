class RemoveFilmIdFromDirectors < ActiveRecord::Migration[5.2]
  def change
    remove_column :directors, :film_id, :integer
  end
end
