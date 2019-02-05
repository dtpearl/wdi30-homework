require "sinatra"
require "sinatra/reloader"
require "HTTParty"

# title = "Jaws"


get "/" do
  erb :home
end

get "/result" do
  @title = params[:book]
  url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ @title }"
  info = HTTParty.get url
  redirect to ("/") if info.nil?
  @thumbnail = info['items'][0]["volumeInfo"]["imageLinks"]["thumbnail"]
  @title0 = info['items'][0]["volumeInfo"]["title"].split("").take(30).join("")
  @author = info['items'][0]["volumeInfo"]["authors"].join(", ")
  @infoLink = info['items'][0]["volumeInfo"]["infoLink"]

  @thumbnail1 = info['items'][1]["volumeInfo"]["imageLinks"]["thumbnail"]
  @title1 = info['items'][1]["volumeInfo"]["title"].split("").take(30).join("")
  @author1 = info['items'][1]["volumeInfo"]["authors"].join(", ")
  @infoLink1 = info['items'][1]["volumeInfo"]["infoLink"]

  @thumbnail2 = info['items'][2]["volumeInfo"]["imageLinks"]["thumbnail"]
  @title2 = info['items'][2]["volumeInfo"]["title"].split("").take(30).join("")
  @author2 = info['items'][2]["volumeInfo"]["authors"].join(", ")
  @infoLink2 = info['items'][2]["volumeInfo"]["infoLink"]

  @thumbnail3 = info['items'][3]["volumeInfo"]["imageLinks"]["thumbnail"]
  @title3 = info['items'][3]["volumeInfo"]["title"].split("").take(30).join("")
  @author3 = info['items'][3]["volumeInfo"]["authors"].join(", ")
  @infoLink3 = info['items'][3]["volumeInfo"]["infoLink"]

  @thumbnail4 = info['items'][4]["volumeInfo"]["imageLinks"]["thumbnail"]
  @title4 = info['items'][4]["volumeInfo"]["title"].split("").take(30).join("")
  @author4 = info['items'][4]["volumeInfo"]["authors"].join(", ")
  @infoLink4 = info['items'][4]["volumeInfo"]["infoLink"]

  @thumbnail5 = info['items'][5]["volumeInfo"]["imageLinks"]["thumbnail"]
  @title5 = info['items'][5]["volumeInfo"]["title"].split("").take(30).join("")
  @author5 = info['items'][5]["volumeInfo"]["authors"].join(", ")
  @infoLink5 = info['items'][5]["volumeInfo"]["infoLink"]

  erb :result
end
