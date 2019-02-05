# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

City.destroy_all

City.create(:name => 'Sydney', :population => '5131236', :image => 'https://lonelyplanetimages.imgix.net/mastheads/65830387.jpg?sharp=10&vib=20&w=1200', :time_zone => 'AEST')

Country.destroy_all

Country.create(:name => 'Australia', :area => '7692024', :population => '25220800', :currency => 'Australian Dollar (AUD)', :image => 'https://www.interstatequarantine.org.au/wp-content/uploads/2016/04/map-img-australia.png')
