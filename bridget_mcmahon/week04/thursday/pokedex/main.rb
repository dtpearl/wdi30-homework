require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

############# HOME ################
get '/' do
  erb :home
end

############# INDEX ################
get '/pokedex' do
  @pokedex = query_db "SELECT * FROM pokedex"
  erb :pokemon_index
end

############# NEW ################
get '/pokedex/new' do
  erb :pokemon_new
end

############# CREATE ################
post '/pokedex' do
  query = "INSERT INTO pokedex (name, type, evolves, image) VALUES ('#{ params["name"] }', '#{ params["type"] }', #{params["evolves"] }, '#{ params["image"] }')"
  query_db query
  redirect to('/pokedex')
end

############# SHOW ################
get '/pokedex/:id' do
  query = "SELECT * FROM pokedex WHERE id=#{ params[:id] }"
  @pokemon = query_db query
  @pokemon = @pokemon.first
  erb :pokemon_show
end

############# EDIT ################
get '/pokedex/:id/edit' do
  query = "SELECT * FROM pokedex WHERE id=#{ params[:id] }"
  @pokemon = query_db query
  @pokemon = @pokemon.first
  @pokemon.to_s
  erb :pokemon_edit
end

post '/pokedex/:id' do
  query = "UPDATE pokedex SET name='#{ params[:name] }', type='#{ params[:type] }', evolves=#{ params[:evolves]}, image='#{ params[:image] }' WHERE id=#{ params[:id] }"
  query_db query

  redirect to("/pokedex/#{ params[:id] }")
end

############# DELETE ################
get '/pokedex/:id/delete' do
  query = "DELETE FROM pokedex WHERE id=#{ params[:id] }"
  query_db query

  redirect to("/pokedex")
end

########### QUERY METHOD ##############

def query_db(sql_statement)
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  results = db.execute sql_statement
  db.close

  results
end
