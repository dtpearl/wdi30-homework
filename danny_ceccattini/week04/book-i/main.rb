require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
  erb :home
end

get '/book' do
  @book_title = params[:book_title]
  @url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ @book_title }"
  @info = HTTParty.get @url
  @synopsis = @info["items"].first["volumeInfo"]["description"]
  @book_cover = @info["items"].first["volumeInfo"]["imageLinks"]["thumbnail"]
  @price = @info["items"].first["saleInfo"]["retailPrice"]["amount"]

  # @book_author = params[:book_author]
  # @url = "https://www.googleapis.com/books/v1/volumes?q=author:#{ @book_author }"
  # @info = HTTParty.get @url
  # @synopsis = @info["items"].first["volumeInfo"]["description"]
  # @book_cover = @info["items"].first["volumeInfo"]["imageLinks"]["thumbnail"]

  erb :book
end


# @url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ title }"
