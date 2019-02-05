# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Band.destroy_all
Band.create(:name => 'Parcels', :country => 'Australia', :genre => 'Electropop', :followers => '116938', :image => 'https://www.triplejunearthed.com/sites/default/files/artists/public/3/8/7/1/0/6/6//e685ff57-3930-4503-8337-40e7aba4ee7a.jpg')


Album.destroy_all
Album.create(:title => 'Parcels', :year => '2018', :songs => '12', :length => '51', :cover => 'https://static.stereogum.com/uploads/2018/09/Parcels-album-cover-1536272424-640x640.jpg')
