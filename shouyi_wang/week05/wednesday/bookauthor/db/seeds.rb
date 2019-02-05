# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Author.destroy_all
Author.create :name => 'Jane Austen', :nationality => 'British', :dob => '1775/12/16', :image => 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/CassandraAusten-JaneAusten%28c.1810%29_hires.jpg/540px-CassandraAusten-JaneAusten%28c.1810%29_hires.jpg'
# IRL, you might spend some time putting a handful of sample artists in here.

Book.destroy_all
Book.create :name => 'Pride and Prejudice', :image => 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/PrideAndPrejudiceTitlePage.jpg/600px-PrideAndPrejudiceTitlePage.jpg'
