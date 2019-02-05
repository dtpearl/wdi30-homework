require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'

get '/' do
  erb :home
end

# INDEX - show all the cities
get '/cities' do
  @cities = query_db "SELECT * FROM cities"
  erb :cities_all
end

# NEW - form to add a city
get '/cities/new' do
  erb :cities_new
end

# CREATE/POST - add the new city into the cities Database
post '/cities' do
  query = "INSERT INTO cities (city, country, year, image) VALUES ('#{params[:city]}', '#{params[:country]}', '#{params[:year]}', '#{params[:image]}')"
  query_db query
  redirect to('/cities')
end

# SHOW - show single city based on ID
get '/cities/:id' do
  @city = query_db "SELECT * FROM cities WHERE id=#{params[:id]}"
  @city = @city.first
  erb :cities_show
end

# UPDATE
get '/cities/:id/edit' do
  @city = query_db "SELECT * FROM cities WHERE id=#{params[:id]}"
  @city = @city.first
  erb :cities_edit
end

post '/cities/:id' do
  query = "UPDATE cities SET city='#{params[:city]}', country='#{params[:country]}', year='#{params[:year]}', image='#{params[:image]}' WHERE id=#{params[:id]}"
  query_db query
  redirect to("/cities/#{params[:id]}")
end

# DELETE
get '/cities/:id/delete' do
  query_db "DELETE FROM cities WHERE id=#{params["id"]}"
  redirect to("/cities")
end

# method to access database
def query_db sql_statement
  puts sql_statement #optional feature - nice for debugging
  db = SQLite3::Database.new 'citiesdatabase.sqlite3'
  db.results_as_hash = true
  results = db.execute sql_statement
  db.close
  results # implicit return
end
