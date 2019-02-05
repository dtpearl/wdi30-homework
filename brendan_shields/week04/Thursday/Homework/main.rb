require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do

  @data = query_db "SELECT * FROM catbook"
  @data = @data.first
  erb :front_page

end

get '/page_2' do
  @data = query_db "SELECT * FROM catbook"
  @data = @data[3]
  erb :page_2
end

get '/add' do
  erb :add
end
#
# CREATE

post '/add' do
  query = "INSERT INTO catbook (profile_name, profile_image, article_title, article_subtitle, article_text, thumb1, thumb2, thumb3) VALUES ('#{params[:profile_name]}', '#{params[:profile_image]}', '#{params[:article_title]}', '#{params[:article_subtitle]}', '#{params[:article_text]}', '#{params[:thumb1]}', '#{params[:thumb2]}', '#{params[:thumb3]}');"
  query_db query
  redirect to('/page_2') # Redirect will make a GET request
end

#
# # SHOW - Show a single butterfly, based on its ID
# get '/butterflies/:id' do
#   @butterfly = query_db "SELECT * FROM butterflies WHERE id=#{params[:id]}"
#   @butterfly = @butterfly.first # Pluck the single butterfly from the results array.
#   erb :butterflies_show
# end
#
# # EDIT - Show a form allowing editing of a particular butterfly
# get '/butterflies/:id/edit' do
#   @butterfly = query_db "SELECT * FROM butterflies WHERE id=#{ params[:id] }"
#   @butterfly = @butterfly.first # Get the butterfly from inside the array of results
#   erb :butterflies_edit
# end
#
# post '/butterflies/:id' do
#   query = "UPDATE butterflies SET name='#{params[:name]}', family='#{params[:family]}', image='#{params[:image]}' WHERE id=#{ params[:id] }"
#   query_db query
#   redirect to("/butterflies/#{params[:id]}")
# end
#
# DELETE - Delete a particular page from the DB, based on its ID
get '/:id/delete' do
  query_db "DELETE FROM catbook WHERE id=#{ params[:id] }"
  redirect to("/")
end

def query_db(sql_statement)

  puts sql_statement # Optional feature which is nice for debugging

  db = SQLite3::Database.new 'catbook.sqlite3'
  db.results_as_hash = true
  results = db.execute sql_statement
  db.close

  results # Implicit return
end
