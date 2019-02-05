require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
  erb :home
end

# INDEX - This will display all the cheeses
get '/cheeses' do
  query = "SELECT * FROM cheeses"
  @cheeses = query_db query
  erb :cheeses_index
end

# NEW - Add a new cheese to the database
get '/cheeses/new' do
  erb :cheeses_new
end

# CREATE - Once the above command directs us the new cheese page, we create a new cheese
post '/cheeses' do
  query = "INSERT INTO cheeses (name, province, region, image) VALUES ('#{ params["name"] }', '#{ params["province"] }', '#{ params["region"] }', '#{ params["image"] }')"
  query_db query
  redirect to ('/cheeses') # This redirects us to the cheese index page
end

# SHOW - Show each individual cheese on a different page
get '/cheeses/:id' do
  query = "SELECT * FROM cheeses WHERE id=#{ params[:id] }"
  @cheese = query_db query
  @cheese = @cheese.first
  erb :cheeses_show
end

# EDIT - This will take us to a page with a form that will let us edit a cheese
get '/cheeses/:id/edit' do
  query = "SELECT * FROM cheeses WHERE id=#{ params[:id] }"
  query_db query
  @cheese = @cheese.first
  erb :cheeses_edit
end

# EDIT - This is where changes will be update and posted
post '/cheeses/:id' do
  query = "UPDATE cheeses SET name='#{ params[:name] }', province='#{ params[:province] }', region='#{ params[:region]}', image='#{ params[:image] }' WHERE id=#{params[:id]}}"
  query_db query
  redirect to ("/cheeses/#{ params[:id] }")
end

def query_db sql_statement
  puts sql_statement # Helpful when debugging
  db = SQLite3::Database.new "database.sqlite3" # Opens connection between sqlite3 and file
  db.results_as_hash = true # formats database into a hasj structure
  results = db.execute sql_statement # finds will find our query
  db.close # closes the database. WHy did we have to do that again??
  results # implicit return
end
