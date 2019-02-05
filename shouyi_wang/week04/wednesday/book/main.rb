require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
  erb :home
end

get '/result' do

end

get '/get_pic' do
  url = "https://www.googleapis.com/books/v1/volumes?q=title:#{params[:title]}"
  info = HTTParty.get url
  @pic_url = info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
  redirect to ('/') if info.nil? #simple error handling
  erb :display_pic
end

get '/about' do
  erb :about
end
