require "sinatra"
require "sinatra/reloader"
require "sqlite3"
require "active_record"
require "pry"

ActiveRecord::Base.establish_connection(
    :adapter => "sqlite3",
    :database => "database.sqlite3"
)

ActiveRecord::Base.logger = Logger.new(STDERR)

#######################
# MODELS 
class Building < ActiveRecord::Base
    belongs_to :designer, :optional => true
end

class Designer < ActiveRecord::Base
    has_many :buildings
end

########################
get "/" do 
    erb :home
end

############################
# INDEX - Show all buildings
get "/buildings" do
    @buildings = Building.all
    erb :buildings_index
end

####################################
# NEW - Form for adding a new building 
get "/buildings/new" do
    erb :buildings_new
end

########################################################
# CREATE - Add a new building
post "/buildings" do
    building = Building.new
    building.name = params[:name]
    building.city = params[:city]
    building.country = params[:country]
    building.image = params[:image]
    building.designer_id = params[:designer_id]
    building.save

    redirect to("/buildings/#{ building.id }")
end

##########################################
# SHOW - Show each building, based on its ID
get "/buildings/:id" do
    @building = Building.find params[:id] 
    erb :buildings_show
end

############################################################
# EDIT - Show a form allowing editing of a particular building
get "/buildings/:id/edit" do
    @building = Building.find params[:id]
    erb :buildings_edit
end

############################################################
# UPDATE - Update a particular building from the db, based on its ID
post "/buildings/:id" do
    building = Building.find params[:id]
    building.name = params[:name]
    building.city = params[:city]
    building.country = params[:country]
    building.image = params[:image]
    building.designer_id = params[:designer_id]
    building.save

    redirect to("/buildings/#{ building.id }")
end

##################################################################
# DELETE - Delete a particular building from the db, based on its ID
get "/buildings/:id/delete" do
    building = Building.find params[:id]
    building.destroy

    redirect to("/buildings")
end

## Designers #####################################################################################


# INDEX
get "/designers" do 
    @designers = Designer.all
    erb :designers_index
end

# NEW
get "/designers/new" do
    erb :designers_new
end

# CREATE 
post "/designers" do
    designer = Designer.new
    designer.name = params[:name]
    designer.image = params[:image]
    designer.save

    redirect to("/desiners/#{ designer.id }")
end

# SHOW
get "/designers/:id" do
    puts "test"
    @designer = Designer.find params[:id]
    erb :designers_show
end


# EDIT
get "/designers/:id/edit" do
    @designer = Designer.find params[:id]
    erb :designers_edit
end

# UPDATE
post "/designers/:id" do
    designer = Designer.find params[:id]
    designer.name = params[:name]
    designer.image = params[:image]
    designer.save

    redirect to("/designers/#{ designer.id }")
end

# DELETE 
get "/designers/:id/delete" do
    designer = Designer.find params[:id]
    designer.destroy

    redirect to("/designers")
end


# SECRET SQUIRREL 
get "pry" do
    binding.pry
end

after do 
    ActiveRecord::Base.connection.close
end
