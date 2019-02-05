class PagesController < ApplicationController
  def home
    # Take advantage of implicit rendering - a view with the same view
  end

  def numbers
    @amount = 234
    @large_number = 2387037387
    @phone = 5036393394
  end

  def text
    @numbers = (1..20)
    @friend_count = 1
    @enemy_count = 2
    @story = "Hello govenor, top of th mornig to you. jhdohdoehdoiedeijdkwdijoij"
  end

  def url
  end

  def assets
  end


end
