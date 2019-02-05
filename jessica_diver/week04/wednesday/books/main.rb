require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
  erb :home
end

get '/bookcover' do
  "Is this thing on?"
  @title = params[:book_title]
  # code to link to google books API to display book
  url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ @title }"
  info = HTTParty.get url
  redirect to ("/") if info.nil?
  @book_cover = info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
  erb :bookcover
end
