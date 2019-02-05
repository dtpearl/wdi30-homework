class ClownController < ApplicationController
  def home
    render :home
  end

  def result
    uri = "https://api.cognitive.microsoft.com"
    path = "/bing/v7.0/images/search"
    term = "clown"
    uri = URI(uri + path + "?q=" + URI.escape(term))

    @response = HTTParty.get(uri, headers: {"Ocp-Apim-Subscription-Key" => "57ef0c9d825e44c7b7638e4765cca7dc"})

    @response.each_header do |key, value|
    # header names are lowercased
    if key.start_with?("bingapis-") or key.start_with?("x-msedge-") then
        puts key + ": " + value
    end
    end

    parsed_json = JSON.parse(@response.body)
    total_returned_images = parsed_json["totalEstimatedMatches"]
    n = rand(35)
    @first_result = parsed_json["value"][n]["thumbnailUrl"]


    # raise "hell"

    render :result

  end
end

# HTTParty.get("http://localhost:3020/api/products", headers: {"Authorization" => "Token token=\"111\""})
