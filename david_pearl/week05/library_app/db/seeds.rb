# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

    # create_table :authors do |t|
    #   t.text :name
    #   t.text :birthplace
    #   t.date :dob
    #   t.text :image
    #
    #   t.timestamps
# 26 April 1564, Stratford-upon-Avon, United Kingdom
# 21 September 1947

Author.destroy_all
Author.create(:name => 'Bill Shakespear', :birthplace => 'England', :dob => '1564-04-26', :image => 'https://www.williamshakespeare.net/images/shakespeare.jpg')
Author.create(:name => 'Stephen King', :birthplace => 'United States of America', :dob => '1947-09-21', :image => 'https://static01.nyt.com/images/2015/10/31/arts/31KING/31KING-articleLarge.jpg?quality=75&auto=webp&disable=upscale')
