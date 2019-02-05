require 'sinatra'
require 'sinatra/reloader'
require 'active_record'
require 'sqlite3'
require 'pry'

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

ActiveRecord::Base.logger = Logger.new(STDERR)

############# MODELS ##############
class Wizard < ActiveRecord::Base
  belongs_to :house, :optional => true
end

class House < ActiveRecord::Base
  has_many :wizards
end


############## HOME ###############
get '/' do
  erb :home
end

## /////////////////\\\\\\\\\\\\\\\\\\\\\
## ||||||||||||| WIZARDS ||||||||||||||||
## \\\\\\\\\\\\\\\\\/////////////////////

############# INDEX ##############
get '/wizards' do
  @wizards = Wizard.all
  erb :wizards_index
end

############## NEW ###############
get '/wizards/new' do
  erb :wizards_new
end

############# CREATE #############
post '/wizards' do
  wizard = Wizard.new
  wizard.name = params[:name]
  wizard.wand = params[:wand]
  wizard.image = params[:image]
  wizard.house_id = params[:house_id]
  wizard.save

  redirect to("/wizards/#{ wizard.id }")
end

############## SHOW ##############
get '/wizards/:id' do
  @wizard = Wizard.find params[:id]
  erb :wizards_show
end

############## EDIT ##############
get '/wizards/:id/edit' do
  @wizard = Wizard.find params[:id]
  erb :wizards_edit
end

############# UPDATE ##############
post '/wizards/:id' do
  wizard = Wizard.find params[:id]
  wizard.name = params[:name]
  wizard.wand = params[:wand]
  wizard.image = params[:image]
  wizard.house_id = params[:house_id]
  wizard.save

  redirect to("/wizards/#{ wizard.id }")
end

############# DELETE ##############
get '/wizards/:id/delete' do
  wizard = Wizard.find params[:id]
  wizard.destroy

  redirect to("/wizards")
end

## /////////////////\\\\\\\\\\\\\\\\\\\\\
## ||||||||||||| HOUSES |||||||||||||||||
## \\\\\\\\\\\\\\\\\/////////////////////

############# INDEX ##############
get '/houses' do
  @houses = House.all
  erb :houses_index
end

############## NEW ###############
get '/houses/new' do
  erb :houses_new
end

############# CREATE #############
post '/houses' do
  house = House.new
  house.house_name = params[:house_name]
  house.crest = params[:crest]

  redirect to("/houses")
end

############## SHOW ##############
get '/houses/:id' do
  @house = House.find params[:id]
  erb :houses_show
end

############## EDIT ##############
get '/houses/:id/edit' do
  @house = House.find params[:id]
  erb :houses_edit
end

############# UPDATE ##############
post '/houses/:id' do
  house = House.find params[:id]
  house.house_name = params[:house_name]
  house.crest = params[:crest]

  redirect to("/houses/#{ house.id }")
end

############# DELETE ##############
get '/houses/:id/delete' do
  house = House.find params[:id]
  house.destroy

  redirect to("/houses")
end

# ----------- DEBUGGER -----------
get '/pry' do
  binding.pry
end

after do
  ActiveRecord::Base.connection.close
end
