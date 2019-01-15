class LuckyController < ApplicationController

  def guess
    render :guess
  end

  def lucky_response
    @lucky_number = (1..10).to_a.sample
    @player_choice = params["choice"]
    render :lucky_response
  end
end
