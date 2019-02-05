require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'HTTParty'

get '/' do
  erb :home
end

get '/result' do
  @title = params[:title].capitalize
  url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ @title }"
  info = HTTParty.get url
  book_cover = info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
  @img = "<img src='#{book_cover}'alt='#{@title} cover'"
  @author = info["items"][0]["volumeInfo"]["authors"].join(', ')
  @description = info["items"][0]["volumeInfo"]["description"]

  erb :result
end
