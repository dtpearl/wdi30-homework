require 'sinatra'
require 'sinatra/reloader'

require 'sqlite3'

get '/' do
  erb :home
end

# INDEX - Show all locations
get '/locations' do
  @locations = query_db 'SELECT * FROM locations'
  # @locations[:beach].to_s
  erb :locations_index
end

# NEW - Create new location
get '/locations/new' do
  erb :locations_new
end

# CREATE - Add a location to the locations db
post '/locations' do
  query = "INSERT INTO locations (beach, state, country, latitude, longitude, url, summary) VALUES ('#{params["beach"]}', '#{params["state"]}', '#{params["country"]}', '#{params["latitude"]}', '#{params["longitude"]}', '#{params["url"]}', '#{params["summary"]}')"
  query_db query
  redirect to('/locations') # redirect will make a GET request
end


# SHOW - Show a single location, based on its # ID
get '/locations/:id' do
  # fetch the location from the db
  @location = query_db "SELECT * FROM locations WHERE id=#{params[:id]}"
  @location = @location.first # Pluck the single location from the results array
  # render a view to display that info
  erb :locations_show
end








def query_db sql_statement
  puts sql_statement # Optional feature, which is nice for debugging

  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  results = db.execute sql_statement
  db.close

  results # Implicit return
end
