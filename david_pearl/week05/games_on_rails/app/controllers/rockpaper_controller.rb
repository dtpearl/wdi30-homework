class RockpaperController < ApplicationController

  def choice
    render :choice
  end

  def rock_response
    choices = ['rock', 'paper', 'scissors']
    @comp_choice = choices.sample
    @result = 'Bill Murray rules'
    player_choice = params["player_response"]

    case player_choice

    when 'rock'
      @result = 'Draw' if @comp_choice == 'rock'
      @result = 'Winner' if @comp_choice == 'scissors'
      @result = 'Sorry, you lost.' if @comp_choice == 'paper'
    when 'paper'
      @result = 'Draw' if @comp_choice == 'paper'
      @result = 'Winner' if @comp_choice == 'scissors'
      @result = 'Sorry, you lost.' if @comp_choice == 'paper'
    when 'scissors'
      @result = 'Draw' if @comp_choice == 'scissors'
      @result = 'Winner' if @comp_choice == 'paper'
      @result = 'Sorry, you lost.' if @comp_choice == 'rock'
    end
    @result
    render :rock_response
  end
end


# player_response
