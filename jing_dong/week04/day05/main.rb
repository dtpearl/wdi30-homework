require 'sinatra'
require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'
require 'pry'

# Rails will do this automatically for you but meanwhile in Sinatra...
ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

# Optional bonus
ActiveRecord::Base.logger = Logger.new(STDERR)

# MODELS
class Animation < ActiveRecord::Base
  belongs_to :author, :optional => true # required since Rails 5
end

class Author < ActiveRecord::Base
  has_many :animations
end

get '/' do
  erb :home
end

# INDEX - Show all butterflies
get '/animations' do
  @animations = Animation.all
  erb :animations_index
end

# NEW - Form for adding a new butterfly
get '/animations/new' do
  erb :animations_new
end

# CREATE - Add a new butterfly to the collection of butterflies
post '/animations' do
  animation = Animation.new
  animation.name = params[:name]
  animation.image = params[:image]
  animation.author_id = params[:author_id]
  animation.save

  redirect to("/animations/#{ animation.id }") # Redirect will make a GET request
end

# SHOW - Show a single butterfly, based on its ID
get '/animations/:id' do
  @animation = Animation.find params[:id]
  erb :animations_show
end

# EDIT - Show a form allowing editing of a particular butterfly
get '/animations/:id/edit' do
  @animation = Animation.find params[:id]
  erb :animations_edit
end

# UPDATE
post '/animations/:id' do
  animation = Animation.find params[:id]
  animation.name = params[:name]
  animation.image = params[:image]
  animation.author_id = params[:author_id]
  animation.save
  redirect to("/animations/#{ animation.id }")
end

# DELETE - Delete a particular animation from the DB, based on its ID
get '/animations/:id/delete' do
  animation = Butterfly.find params[:id]
  animation.destroy
  redirect to("/animations")
end

## Authors ######################################################################
# INDEX
get '/authors'  do
  @authors = Author.all
  erb :authors_index
end

# NEW
get '/authors/new' do
  erb :authors_new
end

# CREATE
post '/authors' do
  author = Author.new
  author.name = params[:name]
  author.image = params[:image]
  author.save

  redirect to("authors/#{ author.id }")
end

# SHOW
get '/authors/:id' do
  @author = Author.find params[:id]
  erb :authors_show
end

# EDIT
get '/authors/:id/edit' do
  @author = Author.find params[:id]
  erb :authors_edit
end

# UPDATE
post '/authors/:id' do
  author = Author.find params[:id]
  author.name = params[:name]
  author.image = params[:image]
  author.save
  redirect to("authors/#{ author.id }")
end

# DELETE
get '/authors/:id/delete' do
  author = Author.find params[:id]
  author.destroy
  redirect to('/authors')
end

after do
  ActiveRecord::Base.connection.close
end
