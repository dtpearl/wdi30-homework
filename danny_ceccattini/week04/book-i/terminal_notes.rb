pry
require 'httparty'
title = params # this is what the user puts in
url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ title }" # title is provided by user
info = HTTParty.get url

info["items"]

info["items"].first

info["items"].first["volumeInfo"]

info["items"].first["volumeInfo"]["imageLinks"]

info["items"].first["volumeInfo"]["imageLinks"]["thumbnail"]

@cover = info["items"].first["volumeInfo"]["imageLinks"]["thumbnail"]
