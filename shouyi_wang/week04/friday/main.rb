require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'
require 'pry'

# Rails will do this automatically for you but meanwhile in Sinatra...
ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

# Optional bonus
ActiveRecord::Base.logger = Logger.new(STDERR)

# MODELS
class Book < ActiveRecord::Base
  belongs_to :author, :optional => true # required since Rails 5
end

class Author < ActiveRecord::Base
  has_many :books
end

get '/' do
  erb :home
end

# INDEX - Show all books
get '/books' do
  @books = Book.all
  erb :books_index
end

# NEW - Form for adding a new book
get '/books/new' do
  erb :books_new
end

# CREATE - Add a new book to the collection of books
post '/books' do
  book = Book.new
  book.name = params[:name]
  book.image = params[:image]
  book.author_id = params[:author_id]
  book.save

  redirect to("/books/#{ book.id }") # Redirect will make a GET request
end

# SHOW - Show a single book, based on its ID
get '/books/:id' do
  @book = Book.find params[:id]
  erb :books_show
end

# EDIT - Show a form allowing editing of a particular book
get '/books/:id/edit' do
  @book = Book.find params[:id]
  erb :books_edit
end

# UPDATE
post '/books/:id' do
  book = Book.find params[:id]
  book.name = params[:name]
  book.image = params[:image]
  book.author_id = params[:author_id]
  book.save
  redirect to("/books/#{ book.id }")
end

# DELETE - Delete a particular book from the DB, based on its ID
get '/books/:id/delete' do
  book = Book.find params[:id]
  book.destroy
  redirect to("/books")
end

## Authors ######################################################################
# INDEX
get '/authors'  do
  @authors = Author.all
  erb :authors_index
end

# NEW
get '/authors/new' do
  erb :authors_new
end

# CREATE
post '/authors' do
  author = Author.new
  author.name = params[:name]
  author.image = params[:image]
  author.save

  redirect to("/authors/#{ author.id }")
end

# SHOW
get '/authors/:id' do
  @author = Author.find params[:id]
  erb :authors_show
end

# EDIT
get '/authors/:id/edit' do
  @author = Author.find params[:id]
  erb :authors_edit
end

# UPDATE
post '/authors/:id' do
  author = Author.find params[:id]
  author.name = params[:name]
  author.image = params[:image]
  author.save
  redirect to("/authors/#{ author.id }")
end

# DELETE
get '/authors/:id/delete' do
  author = Author.find params[:id]
  author.destroy
  redirect to('/authors')
end

# SECRET SQUIRREL SHH
get '/pry' do
  binding.pry
end

after do
  ActiveRecord::Base.connection.close
end
