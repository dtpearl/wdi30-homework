require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
  erb :home
end

# INDEX - This is where we show all the butterflies
get '/watches' do
  @watches = query_db "SELECT * FROM watches"
  erb :watches_index
end

# NEW - Form for adding a new watch
get '/watches/new' do
  erb :watches_new
end

# CREATE - Add new watch to database
post '/watches' do
  query = "INSERT INTO watches (company, model, country, dial, movement) VALUES ('#{ params["company"] }', '#{ params["model"] }', '#{ params["country"] }', '#{ params["dial"] }', '#{ params["movement"] }')"
  query_db query
  redirect to ('/watches')
end

# SHOW - This is where I show the watches name, details, picture etc.
get '/watches/:id' do
  @watch = query_db "SELECT * FROM watches WHERE id=#{ params[:id] }"
  @watch = @watch.first
  erb :watches_show
end

# EDIT - Show form that allows editing of the watches
get '/watches/:id/edit' do
  @watch = query_db "SELECT * FROM watches WHERE id=#{ params[:id] }"
  @watch = @watch.first
  erb :watches_edit
end

post '/watches/:id' do
  query = "UPDATE watches SET company='#{ params[:company] }', model='#{ params[:model]}', country='#{ params[:country] }', dial='#{ params[:dial] }', movement='#{ params[:movement] }' WHERE id=#{ params[:id] }"
  query_db query
  redirect to ("watches/#{ params[:id] }")
end

# DELETE - This will delete a watch from the database
get '/watches/:id/delete' do
  query = "DELETE FROM watches WHERE id=#{ params[:id] }"
  query_db query
  redirect to ("/watches")
end

# This function will call sqlite3 to make a connection to our SQL database, put our data into a hash and execute the desired sql query.
def query_db(sql_statement)
  puts sql_statement # This will help with debugging. You will see on the terminal every you make a call.
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  results = db.execute sql_statement
  db.close

  results # implicit return
end
