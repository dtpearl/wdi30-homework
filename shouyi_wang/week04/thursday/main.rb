require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
  erb :home
end

#index show all cars
get '/cars' do
  @cars = query_db("SELECT * FROM cars")
  erb :cars_index
end

#New -form for adding a new car
get '/cars/new' do
  erb :cars_new
end

#CREATE add a car to the collection
post '/cars' do
  query =  "INSERT INTO cars(model, model_year, manufacturer, image) VALUES ('#{params["model"]}', '#{params["model_year"]}', '#{params["manufacturer"]}', '#{params["image"]}')"
  query_db(query)
  redirect to('/cars') #Redirect will make a GET request
end

get '/cars/:id/edit' do
  @car = query_db("SELECT * FROM cars WHERE
  id=#{params[:id]}")
  @car = @car.first
  erb :cars_edit
end

#show show a single car, based on its # IDEA:
get '/cars/:id' do
  @car = query_db("SELECT * FROM cars WHERE id=#{params[:id]}")
  @car = @car.first
  erb :cars_show

end

post '/cars/:id' do
  query = "UPDATE cars SET model='#{params[:model]}', model_year='#{params[:model_year]}', manufacturer='#{params["manufacturer"]}', image='#{params[:image]}' WHERE id=#{ params[:id] }"
  query_db query
  redirect to("/cars/#{ params[:id] }")
end

get '/cars/:id/delete' do
  query_db("DELETE FROM cars WHERE id=#{params[:id]}")
  redirect to("/cars")
end

def query_db(sql_statement)
  puts sql_statement
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  results = db.execute sql_statement
  db.close
  results  # implicit return
end
