require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
get '/' do
  erb :home
end

get '/search' do
  @title_book = params[:title_of_book]
  url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ @title_book }"
  info=HTTParty.get url
  @author_book=info["items"][0]["volumeInfo"]["authors"][0]
  @published_Date=info["items"][0]["volumeInfo"]["publishedDate"]
  @image_book=info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
  @page_Count=info["items"][0]["volumeInfo"]["pageCount"]
  @language_book=info["items"][0]["volumeInfo"]["language"]
  @description_book=info["items"][0]["volumeInfo"]["description"]

  erb :search

end
