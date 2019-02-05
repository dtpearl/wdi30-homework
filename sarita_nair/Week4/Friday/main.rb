require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'
require 'pry'

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

ActiveRecord::Base.logger = Logger.new(STDERR)

class Singer < ActiveRecord::Base
  has_many :songs

  # belongs_to :plant, :optional => true # required since Rails 5
end
class Song < ActiveRecord::Base
  belongs_to :singer, :optional => true

end
get '/' do
  erb:home
end

get '/pry' do
  binding.pry
end

get '/singer' do
  @singer = Singer.all
  # binding.pry
  erb:singers_all
  # erb:singers_details
end
get '/singer/new' do
  #@singer = Singer.all
  # binding.pry
  erb:singers_new
  # erb:singers_details
end
get '/singer/:id/edit' do
  @singer = Singer.find params[:id]
  # binding.pry
  erb:singers_edit
  # erb:singers_details
end
post '/singer/new' do
  singer = Singer.new
  singer.name = params[:name]
  singer.image = params[:image]
  singer.birthdate = params[:birthdate]
  singer.city = params[:city]
  singer.state = params[:state]
  singer.country = params[:country]
  singer.save
  redirect to '/singer'
  # binding.pry
  #erb:singers_new
  # erb:singers_details
end
post '/singer/:id' do
  @singer = Singer.find params[:id]
  @singer.name = params[:name]
  @singer.image = params[:image]
  @singer.birthdate = params[:birthdate]
  @singer.city = params[:city]
  @singer.state = params[:state]
  @singer.country = params[:country]
  @singer.save
  redirect to '/singer'
  # binding.pry
  erb:singers_edit
  # erb:singers_details
end

get '/details/:id' do
  params[:artist_id] = params[:id]
  @singer = Singer.find params[:id]
  # unless Song.find params[:artist_id].id.nil?
  lamb = lambda{|song| song.artist_id == params[:artist_id].to_i}
  @songs = Song.all.select(&lamb)
  # all.select(&lamb)
  # end{ |car| valid_colors.include?(car[:color]) }
   # binding.pry
  # erb:singers_all
  erb:singers_details
end
get '/songs/new' do
  # erb:singers_all
  erb:songs_new
end
get '/songs/:id/edit' do
  @songs = Song.find params[:id]
  # erb:singers_all
  erb:songs_edit
end
get '/songs/:id' do
  @songs = Song.find params[:id]
  # erb:singers_all
  erb:songs_view
end
get '/songs/:id/edit' do
  @songs = Song.find params[:id]
  # erb:singers_all
  erb:songs_edit
end

post '/songs/new' do
  # erb:singers_all
  song = Song.new
  song.name = params[:name]
  song.url = params[:url]
  song.artist_id = params[:artist_id]
  song.save
  # binding.pry
  redirect to '/singer'

end
post '/songs/:id' do
  # erb:singers_all
  song = Song.find params[:id]
  song.name = params[:name]
  song.artist_id = params[:artist_id]
  song.save
  # binding.pry
  redirect to "/songs/#{params[:id]}"

end
