require "sinatra"
require "sinatra/reloader"
require "sqlite3"

#############
# HOME
get "/" do
    erb :home
end

##########################
# INDEX - Show all flowers
get "/flowers" do
    @flowers = query_db "SELECT * FROM flowers"
    erb :flowers_index
end

####################################
# NEW - Form for adding a new flower
get "/flowers/new" do
    erb :flowers_new
end

########################################################
# CREATE - Add a new flower to the collection of flowers
post "/flowers" do
    query = " INSERT INTO flowers (name, family, image) VALUES ('#{ params[:name] }', '#{ params[:family] }', '#{ params[:image] }') "
    query_db query
    redirect to('/flowers')
end

##########################################
# SHOW - Show each flower, based on its ID
get "/flowers/:id" do 
    @flower = query_db "SELECT * FROM flowers WHERE id=#{ params[:id] }"
    @flower = @flower.first
    erb :flowers_show
end

############################################################
# EDIT - Show a form allowing editing of a particular flower
get "/flowers/:id/edit" do 
    @flower = query_db "SELECT * FROM flowers WHERE id=#{ params[:id] }"
    @flower = @flower.first
    erb :flowers_edit
end

post '/flowers/:id' do
    query = "UPDATE flowers SET name='#{ params[:name] }', family='#{ params[:family] }', image='#{ params[:image] }' WHERE id=#{ params[:id] }"
    query_db query
    redirect to("/flowers/#{ params[:id] }")
end
  
  
##################################################################
# DELETE - Delete a particular flower from the db, based on its ID
get '/flowers/:id/delete' do
    query_db "DELETE FROM flowers WHERE id=#{ params[:id] }"
    redirect to("/flowers")
end


##########################################
# query_db function
def query_db(sql_statement)
    puts sql_statement 

    db = SQLite3::Database.new 'database.sqlite3'
    db.results_as_hash = true
    results = db.execute sql_statement
    db.close

    results 
end
