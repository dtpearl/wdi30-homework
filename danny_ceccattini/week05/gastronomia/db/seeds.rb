# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Dish.destroy_all
Dish.create(:name => "Pappardelle alla Lepre", :region => "Tuscany", :course => "First", :wine => "Morellino di Scansano", :key_ingredient => "Brown Hare", :image => "https://ips.plug.it/cips/buonissimo.org/cms/2012/05/pappardelle-alla-lepre.jpg")
Dish.create(:name => "Carbonara", :region => "Lazio", :course => "First", :wine => "Frascato Superiore DOCG", :key_ingredient => "Guanciale [Cured Pork Cheek]", :image => "https://upload.wikimedia.org/wikipedia/commons/c/c1/Spaghetti_alla_Carbonara_%28cropped%29.jpg")

Region.destroy_all
Region.create(:name => "Tuscany", :capital => "Florence", :population => 3749430, :flag => "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Tuscany.svg/1280px-Flag_of_Tuscany.svg.png", :image => "https://www.mytoursapi.com/api/v1/images/178/slide02.jpg?1523529912&size=tour-hero")
