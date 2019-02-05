require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
  erb :home
end

# Index - Show all beers
get '/beers' do
  @beers = query_db "SELECT * FROM beers"
  erb :beers_index
end

# NEW - Form for adding a new beer
get '/beers/new' do
  erb :beers_new
end

# CREATE - Add a new beer to the collection of beers
post '/beers' do
  query = "INSERT INTO beers ( brewer, name, style, image ) VALUES ('#{params[:brewer]}', '#{params[:name]}', '#{params[:style]}', '#{params[:image]}')"
  query_db query
  redirect to('/beers') # Redirect will make a GET request
end

# SHOW - Show a single beer, based on its ID
get '/beers/:id' do
  @beer = query_db "SELECT * FROM beers WHERE id=#{params[:id]}"
  @beer = @beer.first # Pluck the single beer from the results array
  erb :beers_show
end

# EDIT - Show a form allowing editing of a particular beer
get '/beers/:id/edit' do
  @beer = query_db "SELECT * FROM beers WHERE id=#{params[:id]}"
  @beer = @beer.first # Get the beer from inside the array of results
  erb :beers_edit
end

post '/beers/:id' do
  query = "UPDATE beers SET name='#{params[:brewer]}', name='#{params[:name]}', style='#{params[:style]}', image='#{params[:image]}', WHERE id=#{params[:id]}"
  query_db query
  redirect to("/beers/#{params[:id]}")
end

# DELETE - Delete a particular beer from the DB, based on its ID
get '/beers/:id/delete' do
  query_db "DELETE FROM beers WHERE id=#{params[:id]}"
  redirect to("/beers")
end

def query_db(sql_statement)
  puts sql_statement # Optional feature which is nice for debugging

  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  results = db.execute sql_statement
  db.close

  results # Implicit return
end
