require 'sinatra' # goes into server mode
require 'sinatra/reloader' # NB: Server still necessary if you add a new require
require 'pry'

# DSL - Domain Specific Languagen

# def hello
#   "hello"
# end

get '/hello' do
  "Hello world from Sinatra!!!"
end

get '/Lucky_number' do
  "Here is your lucky number #{ rand 1..40 }"
end

get '/uptime' do
  "The server uptime is #{ `uptime` }"
end

# Dynamic URLs
get '/fanclub/:name' do
  "#{ params[:name].capitalize } is a proud member of the Marx Brothers fan club."
end

get '/fanclub/:first/:last' do
  "#{ params[:first].capitalize } #{ params[:last].upcase } is a proud member of the Marx
Brothers fan club."
end

get '/fanclub/:first/:last/:favorite' do
  "#{ params[:first].capitalize } #{ params[:last].upcase } is a proud member of the Marx
Brothers fan club. Favorite Marx Brother: #{ params[:favorite].capitalize }"
end

get '/multiply/:x/:y' do
  result = params[:x].to_f * params[:y].to_f
  "The result is #{ result }"
end

# Siginificant problems
# 1. Where is the HTML?
# 2. How do we get information from the user w/o having them rewrite the URL?


# get 'fanclub/Ash'
#   "Ash is a member of the Marx Brothers fan club."
# end
#
# get '/fanclub/_____' do
#
# end
