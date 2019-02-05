class AddTimestampsToPlayers < ActiveRecord::Migration[5.2]
  def change
    add_column :players, :timestamps, :string
  end
end
