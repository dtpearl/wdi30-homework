class AddCountryIdToTeams < ActiveRecord::Migration[5.2]
  def change
    add_column :teams, :country_id, :integer
  end
end
