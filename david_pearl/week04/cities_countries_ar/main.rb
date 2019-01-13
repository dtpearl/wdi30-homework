require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'
require 'pry'

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

# Logger
ActiveRecord::Base.logger = Logger.new(STDERR)

# Database Models

class City < ActiveRecord::Base
  belongs_to :country, :optional => true
end

class Country < ActiveRecord::Base
  has_many :cities
end

##### Cities #########################################

get "/" do
  erb :home
end

# INDEX - Show all cities
get "/cities" do
  @cities = City.all

  erb :cities_index
end

# NEW CITY - Form for adding a new city
get "/cities/new" do
  erb :cities_new
end

# CREATE - Add a new city to the DB
post "/cities" do
  city = City.new
  city.name = params[:name]
  city.landmark = params[:landmark]
  city.image = params[:image]
  city.country_id = params[:country_id]
  city.save

  redirect to("/cities/#{ city.id }") # Redirect to the new city page
end

# SHOW - Show a single city, based on its ID
get "/cities/:id" do
  @city = City.find params[:id]

  erb :cities_show
end

# EDIT - Show a form allowing editing of a particular city.
get "/cities/:id/edit" do
  @city = City.find params[:id]

  erb :cities_edit
end

# UPDATE - Update a city's DB entry.
post "/cities/:id" do
  city = City.find params[:id]
  city.name = params[:name]
  city.landmark = params[:landmark]
  city.image = params[:image]
  city.country_id = params[:country_id]
  city.save

  redirect to("/cities/#{ city.id }")
end

# DELETE - Delete a particular city.
get "/cities/:id/delete" do
  city = City.find params[:id]
  city.destroy

  redirect to("/cities")
end


##### Countries ######################################

# INDEX - Show all countries
get "/countries" do
  @countries = Country.all

  erb :countries_index
end

# NEW - Show a form to add a new country.
get "/countries/new" do
  erb :countries_new
end

# CREATE - Add a new country to the DB.
post "/countries" do
  country = Country.new
  country.name = params[:name]
  country.image = params[:image]
  country.save

  redirect to("/countries/#{ country.id }")
end

# SHOW
get "/countries/:id" do
  @country = Country.find params[:id]

  erb :countries_show
end

# EDIT
get "/countries/:id/edit" do
  @country = Country.find params[:id]

  erb :countries_edit
end

# UPDATE
post "/countries/:id" do
  country = Country.find params[:id]
  country.name = params[:name]
  country.image = params[:image]
  country.save

  redirect to("/countries/#{ country.id }")
end


# DELETE
get "/countries/:id/delete" do
  country = Country.find params[:id]
  country.destroy

  redirect to("/countries")
end


after do
  ActiveRecord::Base.connection.close
end
