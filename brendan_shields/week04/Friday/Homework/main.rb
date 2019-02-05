#REQUIRED RESOURCES /////////////////////////////////////////////////////

require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'
require 'pry'


#SET UP ACTIVE RECORD /////////////////////////////////////////////////////


ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)


ActiveRecord::Base.logger = Logger.new(STDERR)



#MODELS /////////////////////////////////////////////////////


class Coffee_shop < ActiveRecord::Base
  has_many :coffee_menus
end

class Coffee_menu < ActiveRecord::Base
    belongs_to :coffee_shop, :optional => true
end


#EDIT /////////////////////////////////////////////////////


get '/coffees/:id/edit' do
  @coffee_menu = Coffee_menu.find params[:id]
  erb :coffees_edit
end

post '/coffees/:id' do
  coffee = Coffee_menu.find params[:id]
  coffee.name   = params[:name]
  coffee.taste  = params[:taste]
  coffee.origin = params[:origin]
  coffee.cost   = params[:cost]
  coffee.other = params[:other]
  coffee.save
  redirect to ("/coffees/#{ coffee.id }")
end


#SETTING UP VIEWS /////////////////////////////////////////////////////


get '/' do
  redirect to("/coffees")
end


get '/coffees' do
  @coffee_shops = Coffee_shop.all
  @coffee_menus = Coffee_menu.all
  erb :home
end


#NEW COFFEE /////////////////////////////////////////////////////


get '/coffees/new' do
  erb :coffees_new
end


get '/coffees/:id' do
  @coffee_menus = Coffee_menu.find params[:id]
  erb :coffee_show
end


# CREATE COFFEE /////////////////////////////////////////////////////


post '/coffees' do
  coffee = Coffee_menu.new
  coffee.name =   params[:name]
  coffee.taste =  params[:taste]
  coffee.origin = params[:origin]
  coffee.cost =   params[:cost]
  coffee.save
  redirect to("/coffees/#{ coffee.id }")
end


#DELETE COFFEE /////////////////////////////////////////////////////


get '/coffees/:id/delete' do
  coffee = Coffee_menu.find params[:id]
  coffee.destroy
  redirect to('/coffees')
end


#CLOSE SERVER /////////////////////////////////////////////////////


after do
  ActiveRecord::Base.connection.close
end
