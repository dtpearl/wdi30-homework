require 'httparty'
data = HTTParty.get 'http://numbersapi.com/random/trivia?json'
puts data["text"]
