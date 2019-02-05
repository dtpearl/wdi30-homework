require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'
require 'pry'

# Rails will do this automatically for you but for now we do this in Sinatra
ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

# Optional bonus
ActiveRecord::Base.logger = Logger.new(STDERR)

# MODELS
class Beer < ActiveRecord::Base
  belongs_to :hop, :optional => true # required since Rails 5
end

class Hop < ActiveRecord::Base
  has_many :beers
end

get '/' do
  erb :home
end

# INDEX - Show all beers
get '/beers' do
  @beers = Beer.all
  erb :beers_index
end

# NEW - From for adding a new beer
get '/beers/new' do
  erb :beers_new
end

# CREATE - Add a new beer to the collection of beers
post '/beers/' do
  beer = Beer.new
  beer.name = params[:name]
  beer.brewer = params[:brewer]
  beer.image = params[:image]
  beer.hops_id = params[:hops_id]
  beer.save

  redirect to("/beers/#{ beer.id }") # Redirect will make a GET request
end

# SHOW - Show a single beer, based on its ID
get '/beers/:id' do
  @beer = Beer.find params[:id]
  erb :beers_show
end

# EDIT - Show a form allowing editing of a particular beer
get '/beers/:id/edit' do
  @beer = Beer.find params[:id]
  erb :beers_edit
end

# UPDATE
post '/beers/:id' do
  beer = Beer.find params[:id]
  beer.name = params[:name]
  beer.brewer = params[:brewer]
  beer.image = params[:image]
  beer.hops_id = params[:hops_id]
  beer.save
  redirect to("/beers/#{ beer.id }")
end

# DELETE - Delete a particular beer from the DB, based on its ID
get '/beers/:id/delete' do
  beer = Beer.find params[:id]
  beer.destroy
  redirect to("/beers")
end

## Hops ########################################################################
# INDEX
get '/hops' do
  @hops = Hop.all
  erb :hops_index
end

# NEW
get '/hops/new' do
  erb :hops_new
end

# CREATE
post '/hops' do
  hop = Hop.new
  hop.name = params[:name]
  hop.image = params[:image]
  hop.save

  redirect to("/hops/#{ hop.id }")
end

# SHOW
get '/hops/:id' do
  @hop = Hop.find params[:id]
  erb :hops_show
end

# EDIT
get '/hops/:id/edit' do
  @hop = Hop.find params[:id]
  erb :hops_edit
end

# UPDATE
post '/hops/:id' do
  hop = Hop.find params[:id]
  hop.name = params[:name]
  hop.image = params[:image]
  hop.save
  redirect to("/hops/#{ hop.id }")
end

# DELETE
get '/hops/:id/delete' do
  hop = Hop.find params[:id]
  hop.destroy
  redirect to('/hops')
end

# SECRET SQUIRREL SHH
get '/pry' do
  binding.pry
end

after do
  ActiveRecord::Base.connection.close
end
