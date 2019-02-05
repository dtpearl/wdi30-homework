require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
  erb :home
end

# INDEX - Show all butterflies
get '/butterflies' do
  @butterflies = query_db "SELECT * FROM butterflies"
  erb :butterflies_index
end

# NEW - Form for adding a new butterfly
get '/butterflies/new' do
  erb :butterflies_new
end

# CREATE - Add a new butterfly to the collection of butterflies
post '/butterflies' do
  query = "INSERT INTO butterflies (name, family, image) VALUES ('#{params[:name]}', '#{params[:family]}', '#{params[:image]}')"
  query_db query
  redirect to('/butterflies') # Redirect will make a GET request
end

# SHOW - Show a single butterfly, based on its ID
get '/butterflies/:id' do
  @butterfly = query_db "SELECT * FROM butterflies WHERE id=#{ params[:id] }"
  @butterfly = @butterfly.first # Pluck the single butterfly from the results array.
  erb :butterflies_show
end

# EDIT - Show a form allowing editing of a particular butterfly
get '/butterflies/:id/edit' do
  @butterfly = query_db "SELECT * FROM butterflies WHERE id=#{ params[:id] }"
  @butterfly = @butterfly.first # Get the butterfly from inside the array of results
  erb :butterflies_edit
end

post '/butterflies/:id' do
  query = "UPDATE butterflies SET name='#{params[:name]}', family='#{params[:family]}', image='#{params[:image]}' WHERE id=#{ params[:id] }"
  query_db query
  redirect to("/butterflies/#{ params[:id] }")
end

# DELETE - Delete a particular butterfly from the DB, based on its ID
get '/butterflies/:id/delete' do
  query_db "DELETE FROM butterflies WHERE id=#{ params[:id] }"
  redirect to("/butterflies")
end

def query_db(sql_statement)
  puts sql_statement # Optional feature which is nice for debugging

  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  results = db.execute sql_statement
  db.close

  results # Implicit return
end
