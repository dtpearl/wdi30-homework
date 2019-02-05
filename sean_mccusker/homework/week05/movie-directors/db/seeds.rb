# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Director.destroy_all
Director.create(:name => 'Martin Scorsese', :birth_place => 'Queens New York City', :dob => '1942-11-17', :image => 'https://www.neh.gov/sites/default/files/styles/featured_image_page/public/2018-07/martin-scorsese_0.jpg?h=68b97a5f&itok=XQTBU5am')

Film.destroy_all
Film.create(:name => 'Taxi Driver', :year => '1976', :rotten_tomatoes => '98%', :image => 'https://s.pacn.ws/640/ro/taxi-driver-40th-anniversary-edition-bluray-digital-hd-498397.1.jpg?og8zc3')
