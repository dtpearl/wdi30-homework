class CreateEmployees < ActiveRecord::Migration[5.2]
  def change
    create_table :employees do |t|
      t.text :name
      t.text :dob
      t.text :doj
      t.text :doe
      t.text :designation
      t.integer :department_id
      t.timestamp
    end
  end
end
