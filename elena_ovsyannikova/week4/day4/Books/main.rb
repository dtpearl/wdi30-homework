require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
erb :home
end

get '/books' do

  @books = query_db "SELECT * FROM books"
  erb :books_index

end

get '/books/new' do

  erb :books_new
end

post '/books' do
  query="INSERT INTO books (title, author, image) VALUES ('#{params[:title]}', '#{params[:author]}', '#{params[:image]}')"
  query_db query
  redirect to ('/books')
end

get '/books/:id' do
  @book = query_db "SELECT * FROM books WHERE id=#{params[:id]}"
  @book=@book.first
  erb :books_show
end

get '/books/:id/edit' do
  @book = query_db "SELECT * FROM books WHERE id=#{params[:id]}"
  @book=@book.first
  erb :books_edit
end

post '/books/:id' do
  query = "UPDATE books SET title='#{params[:title]}', author='#{params[:author]}', image='#{params[:image]}' WHERE id=#{ params[:id] }"
  query_db query
  redirect to("/books/#{ params[:id] }")
end
get '/books/:id/delete' do
  query_db "DELETE FROM books WHERE id=#{ params[:id] }"
  redirect to("/books")
end

def query_db(sql_statement)
  puts sql_statement
  db=SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash=true
  results=db.execute sql_statement
  db.close

  results
end
