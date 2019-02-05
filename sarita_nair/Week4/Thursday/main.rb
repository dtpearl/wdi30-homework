require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'

get '/' do
  erb:home
end

get '/animals' do
  sql_stmt = "select * from animal"
  @results = query_db sql_stmt
  # binding.pry
  erb:animal_list
end
get '/animals/new' do
  erb :animal_new
end
get '/animals/:id' do
  @results = query_db "SELECT * FROM animal WHERE id=#{ params[:id] }"
  @results = @results.first # Pluck the single butterfly from the results array.
  erb :animal_show
end
get '/animals/:id/edit' do
  @results = query_db "SELECT * FROM animal WHERE id=#{ params[:id] }"
  @results = @results.first # Pluck the single butterfly from the results array.
  erb :animal_edit
end
post '/animals' do
  query = "INSERT INTO animal(name,class,image) values ('#{params[:name]}', '#{params[:class]}', '#{params[:image]}')"
  query_db query
  redirect to('/animals') # Redirect will make a GET request
end
post '/animals/:id' do
  query = "UPDATE animal SET name='#{params[:name]}', class='#{params[:class]}', image='#{params[:image]}' WHERE id=#{ params[:id] }"
  query_db query
  redirect to("/animals/#{ params[:id] }")
end
get '/animals/:id/delete' do
  query_db "DELETE FROM animal WHERE id=#{ params[:id] }"
  redirect to("/animals")
end
def query_db(sql_statement)
  # puts sql_statement # Optional feature which is nice for debugging

  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  results = db.execute sql_statement
  db.close

  results # Implicit return
end
