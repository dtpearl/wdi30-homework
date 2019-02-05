require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'

# Remember that rails will do this part automatically but we need it in Sinatra
ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

# This logs the actual sql in the terminal for you to see. Could be helpful for debugging.
ActiveRecord::Base.logger = Logger.new(STDERR)

# THESE ARE YOUR MODELS
# The watch model
class Watch < ActiveRecord::Base
  belongs_to :watchmaker, :optional => true
end

# The watchmaker model
class Watchmaker < ActiveRecord::Base
  has_many :watches
end

########!!!!!!!!! REMEMEMBER TO ORGANISE YOUR QUERIES FROM LEAST SPECIFIC TO MORE GENERAL AS YOU GO DOWN.

# HOME
get '/' do
  erb :home
end

# INDEX
get '/watches' do
  @watches = Watch.all
  erb :watches_index
end

# NEW
get '/watches/new' do
 erb :watches_new
end

# CREATE
post '/watches' do
  watch = Watch.new
  watch.name = params[:name]
  watch.dial = params[:dial]
  watch.movement = params[:movement]
  watch.watchmaker_id = params[:watchmaker_id]
  watch.save

  redirect to ('/watches')
end

# SHOW
get '/watches/:id' do
  @watch = Watch.find params[:id]
  erb :watches_show
end

#EDIT
get '/watches/:id/edit' do
  @watch = Watch.find params[:id]
  erb :watches_edit
end

#UPDATE
post '/watches/:id' do
  watch = Watch.find params[:id]
  watch.name = params[:name]
  watch.dial = params[:dial]
  watch.movement = params[:movement]
  watch.watchmaker_id = params[:watchmaker_id]
  watch.save

  redirect to ("/watches/#{ params[:id] }")
end

# DELETE
get '/watches/:id/delete' do
  watch = Watch.find params[:id]
  watch.destroy
  redirect to("/watches")
end

########################### NOW FOR THE WATCHMAKERS ##############################

# INDEX
get '/watchmakers' do
  @watchmakers = Watchmaker.all
  erb :watchmakers_index
end

# NEW
get '/watchmakers/new' do
  erb :watchmakers_new
end

# CREATE
post '/watchmakers' do
  watchmaker = Watchmaker.new
  watchmaker.name = params[:name]
  watchmaker.country = params[:country]
  watchmaker.photo = params[:photo]
  watchmaker.save

  redirect to ("/watchmakers/#{ watchmaker.id }")
end

# SHOW
get '/watchmakers/:id' do
  @watchmaker = Watchmaker.find params[:id]
  erb :watchmakers_show
end

# EDIT
get '/watchmakers/:id/edit' do
  @watchmaker = Watchmaker.find params[:id]
  erb :watchmakers_edit
end

# UPDATE
post '/watchmakers/:id' do
  watchmaker = Watchmaker.find params[:id]
  watchmaker.name = params[:name]
  watchmaker.country = params[:country]
  watchmaker.photo = params[:photo]
  watchmaker.save

  redirect to ("/watchmakers/#{ watchmaker.id }")
end


# DELETE
get '/watchmakers/:id/delete' do
  watchmaker = Watchmaker.find params[:id]
  watchmaker.destroy
  redirect to ('/watchmakers')
end

# The code below will close the connection after every request you make
after do
  ActiveRecord::Base.connection.close
end
