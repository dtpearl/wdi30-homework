class CreateDirectors < ActiveRecord::Migration[5.2]
  def change
    create_table :directors do |t|
          t.text :name
     	    t.text :birth_place
      	   t.date :dob
           t.text :image
           t.integer :film_id
    t.timestamps # created_at, updated_at
    end
  end
end
