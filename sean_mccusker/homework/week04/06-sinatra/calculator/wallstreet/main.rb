require 'sinatra'
require 'sinatra/reloader'
require 'stock_quote'

get '/' do
  erb :home
end
