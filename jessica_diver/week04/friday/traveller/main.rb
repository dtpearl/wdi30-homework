require 'sqlite3'
require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'active_record'

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)
ActiveRecord::Base.logger = Logger.new(STDERR)

# MODELS
class City < ActiveRecord::Base
  belongs_to :country, :optional => true
end

class Country < ActiveRecord::Base
  has_many :cities
end

get '/' do
  erb :home
end

# SHOW ALL
get '/cities' do
  @cities = City.all
  erb :cities_all
end

# NEW
get '/cities/new' do
  erb :cities_new
end

# CREATE
post '/cities' do
  city = City.new
  city.city = params[:city]
  city.year = params[:year]
  city.image = params[:image]
  city.country_id = params[:country_id]
  city.save

  redirect to("/cities")
end

# SHOW ONE
get '/cities/:id' do
  @city = City.find params[:id]
  erb :cities_show
end

# EDIT
get '/cities/:id/edit' do
@city = City.find params[:id]
erb :cities_edit
end

# UPDATE
post '/cities/:id' do
  city = City.find params[:id]
  city.city = params[:city]
  city.year = params[:year]
  city.image = params[:image]
  city.country_id = params[:country_id]
  city.save

  redirect to("/cities/#{city.id}")

end

# DELETE
get '/cities/:id/delete' do
  city = City.find params[:id]
  city.destroy

  redirect to('/cities')
end


######## Countries #########

# SHOW ALL
get '/countries' do
  @countries = Country.all
  erb :countries_all
end

# NEW
get '/countries/new' do
  erb :countries_new
end

# CREATE
post '/countries' do
  country = Country.new
  country.name = params[:country]
  country.image = params[:image]
  country.save

  redirect to("/countries")
end

# SHOW ONE
get '/countries/:id' do
  @country = Country.find params[:id]
  erb :countries_show
end

# EDIT
get '/countries/:id/edit' do
@country = Country.find params[:id]
erb :countries_edit
end

# UPDATE
post '/countries/:id' do
  country = Country.find params[:id]
  country.name = params[:country]
  country.image = params[:image]
  country.save

  redirect to("/countries/#{country.id}")

end

# DELETE
get '/countries/:id/delete' do
  country = Country.find params[:id]
  country.destroy

  redirect to('/countries')
end


get '/all' do
  @countries = Country.all
  @cities = City.all
  erb :all_cities_and_countries
end
