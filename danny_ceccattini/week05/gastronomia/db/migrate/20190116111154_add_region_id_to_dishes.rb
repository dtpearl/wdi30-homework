class AddRegionIdToDishes < ActiveRecord::Migration[5.2]
  def change
    add_column :dishes, :region_id, :integer
  end
end
