require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

# Home page......
get '/' do
  @laliga = query_db "SELECT * FROM laliga"
  erb :home
end

# Team details .........
get '/laliga/:id' do
  @team = query_db "SELECT * FROM laliga WHERE id='#{ params[:id] }'"
  @team = @team.first

  erb :team_view
end

# Create teams form......
get '/create' do
  erb :create
end

# Create teams results.....
post '/new_team' do
  query = "INSERT INTO laliga (name, city, stadium, stadium_capacity, last_rank, title, logo) VALUES ( '#{ params[:name] }', '#{ params[:city] }', '#{ params[:stadium] }', '#{ params[:stadium_capacity] }', '#{ params[:last_rank] }', '#{ params[:title] }', '#{ params[:logo] }')"
  query_db query

  redirect to('/')
end

# Edit team.......
get '/laliga/:id/edit' do
  @team = query_db "SELECT * FROM laliga WHERE id='#{ params[:id] }'"
  @team = @team.first
  # @team.to_s
  erb :edit
end

post '/edit' do
  query = "UPDATE laliga SET name='#{params[:name]}', city='#{params[:city]}', stadium='#{params[:stadium]}', stadium_capacity='#{params[:stadium_capacity]}', last_rank='#{params[:last_rank]}', title='#{params[:title]}', logo='#{params[:logo]}' WHERE id='#{params[:id]}'"
  query_db query

  redirect to("/laliga/#{params[:id]}")
  # params.to_s
end



# Delete teams......
get '/laliga/:id/delete' do
  query_db "DELETE FROM laliga WHERE id=#{ params[:id] }"

  redirect to('/')
end

















def query_db(sql_command)
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  results = db.execute sql_command
  db.close
  results
end
