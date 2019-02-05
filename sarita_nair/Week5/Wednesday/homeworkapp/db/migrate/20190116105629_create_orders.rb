class CreateOrders < ActiveRecord::Migration[5.2]
  def change
    create_table :orders do |t|
      t.integer :customer_id
      t.float :amount
      t.text :orderno
      t.text :item
      t.timestamp
    end
  end
end
