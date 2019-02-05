require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
  #"hello world"
  erb :home
end

# INDEX - show all cats
get '/cats' do
  #"yes"
  @cats = query_db "SELECT * FROM cats"
  erb :cats_index
end

# NEW - Form for adding a new cat
get '/cats/new' do
  erb :cats_new
end

# Create - Add a new cat to the collection of cats
post '/cats' do
  #"yes"
  query = "INSERT INTO cats (name, family, image) VALUES ('#{params[:name]}', '#{params[:family]}', '#{params[:image]}')"
  query_db query
  redirect to('/cats') # Redirect will make a GET request
end

# SHOW - show a single cat, based on its ID
get '/cats/:id' do
  @cat = query_db "SELECT * FROM cats WHERE id=#{ params[:id] }"
  @cat = @cat.first # Pluck the single cat from the results array.
  erb :cats_show
end


# EDIT - Show a form allowing editing of a particular butterfly
get '/cats/:id/edit' do
  @cat = query_db "SELECT * FROM cats WHERE id=#{ params[:id] }"
  @cat = @cat.first # Get the cat from inside the array of results
  erb :cats_edit
end

post '/cats/:id' do
  query = "UPDATE cats SET name='#{params[:name]}', family='#{params[:family]}', image='#{params[:image]}' WHERE id=#{ params[:id] }"
  query_db query
  redirect to("/cats/#{ params[:id] }")
end

# DELETE - Delete a particular butterfly from the DB, based on its ID
get '/cats/:id/delete' do
  query_db "DELETE FROM cats WHERE id=#{ params[:id] }"
  redirect to("/cats")
end

def query_db(sql_statement)
  puts sql_statement # Optional feature which is nice for debugging

  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  results = db.execute sql_statement
  db.close

  results # Implicit return
end
