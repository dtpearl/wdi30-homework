require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
  erb :home
end

get '/books' do
@title = ( params[:title] ).split.map( &:capitalize ).join( ' ' ) # This takes a string str and splits it where the underscores are, then capitalizes each word then joins the words together with a space

url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ @title }"

@book_img = HTTParty.get url
@book_auth = HTTParty.get url

# Retrieves the thumbnail
@thumbnail = @book_img[ 'items' ].first[ 'volumeInfo' ][ 'imageLinks' ][ 'thumbnail' ]

redirect to('/') if @title.nil? # Simplistic error handling

# Retrieves the author
@author = ( @book_auth[ 'items' ].first[ 'volumeInfo' ][ 'authors' ] ).join()
  erb :books
end

# Books I
# Specification
# Build a search form that lets the user enter a book title. The Sinatra app will use HTTParty to fetch the data for the chosen book from Google Books and display it on the page. Display the cover, as a bare minimum.
#
# Sample URL
# https://www.googleapis.com/books/v1/volumes?q=title:Ulysses
#
# Additional Resources
# Dynamic URLs in Sinatra
# Google Books Search API
# HTTParty Tutorial
#  pair-programming-bot.md
# Pair Programming Bot
# Recreate this site using Sinatra:
#
# http://pairprogrammingbot.herokuapp.com/
#
# You can try to match/steal the existing style or create your own.
