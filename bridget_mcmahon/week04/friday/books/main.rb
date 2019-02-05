require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

ActiveRecord::Base.logger = Logger.new(STDERR)

################ MODELS #################
class Book < ActiveRecord::Base
  belongs_to :author, :optional => true
end

class Author < ActiveRecord::Base
  has_many :books
end


################ HOME ###################
get '/' do
  erb :home
end

## /////////////////\\\\\\\\\\\\\\\\\\\\\
## |||||||||||||| BOOKS |||||||||||||||||
## \\\\\\\\\\\\\\\\\/////////////////////

############### INDEX ###################
get '/books' do
  @books = Book.all
  erb :books_index
end

################ NEW ####################
get '/books/new' do
  erb :books_new
end

############### CREATE ##################
post '/books' do
  book = Book.new
  book.title = params[:title]
  book.genre = params[:genre]
  book.cover = params[:cover]
  book.author_id = params[:author_id]
  book.save

  redirect to("/books/#{ book.id }")
end

################ SHOW ###################
get '/books/:id' do
  @book = Book.find params[:id]
  erb :books_show
end

################ EDIT ###################
get '/books/:id/edit' do
  @book = Book.find params[:id]
  erb :books_edit
end

############### UPDATE ##################
post '/books/:id' do
  book = Book.find params[:id]
  book.title = params[:title]
  book.genre = params[:genre]
  book.cover = params[:cover]
  book.author_id = params[:author_id]
  book.save

  redirect to ("/books/#{ book.id }")
end

############### DELETE ##################
get '/books/:id/delete' do
  book = Book.find params[:id]
  book.destroy

  redirect to ("/books")
end

## ////////////////\\\\\\\\\\\\\\\\\\\\\\
## ||||||||||||| AUTHORS ||||||||||||||||
## \\\\\\\\\\\\\\\\//////////////////////

############### INDEX ###################
get '/authors' do
  @authors = Author.all
  erb :authors_index
end

################ NEW ####################
get '/authors/new' do
  erb :authors_new
end

############### CREATE ##################
post '/authors' do
  author = Author.new
  author.name = params[:name]
  author.image = params[:image]
  author.save

  redirect to("/authors/#{ author.id }")
end

################ SHOW ###################
get '/authors/:id' do
  @author = Author.find params[:id]
  erb :authors_show
end

################ EDIT ###################
get '/authors/:id/edit' do
  @author = Author.find params[:id]
  erb :authors_edit
end

############### UPDATE ##################
post '/authors/:id' do
  author = Author.find params[:id]
  author.name = params[:name]
  author.image = params[:image]
  author.save

  redirect to("/authors/#{ author.id }")
end

############### DELETE ##################
get '/authors/:id/delete' do
  author = Author.find params[:id]
  author.destroy

  redirect to("/authors")
end


## ------------ DEBUGGER ----------------
get '/pry' do
  binding.pry
end

# Close connection after action
after do
  ActiveRecord::Base.connection.close
end
