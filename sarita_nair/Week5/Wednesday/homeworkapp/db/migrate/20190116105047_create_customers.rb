class CreateCustomers < ActiveRecord::Migration[5.2]
  def change
    create_table :customers do |t|
      t.text :name
      t.text :dob
      t.text :gender
      t.text :phone
      t.text :state
      t.text :city
      t.text :country
      t.timestamp
    end
  end
end
