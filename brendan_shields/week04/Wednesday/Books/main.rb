require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/home' do

  erb :home

end

get '/result' do
  
  @title = params[:operator]
  info = HTTParty.get "https://www.googleapis.com/books/v1/volumes?q=title:#{ params[:operator] }"
  @book = info["items"][0]['volumeInfo']['imageLinks']["thumbnail"]

erb :result
end
