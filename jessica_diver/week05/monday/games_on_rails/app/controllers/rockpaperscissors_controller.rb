class RockpaperscissorsController < ApplicationController

  def input
    render :input
  end

  def result
    choices = ['rock', 'paper', 'scissors']
    @computerPlay = choices.sample

    @play = params[:play]

    if @play == 'rock' && @computerPlay == 'scissors' || @play == 'scissors' && @computerPlay == 'paper' || @play == 'paper' && @computerPlay == 'rock' || @play == @computerPlay
      render :result_win
    elsif @computerPlay == 'rock' && @play == 'scissors' || @computerPlay == 'scissors' && @play == 'paper' || @computerPlay == 'paper' && @play == 'rock'
      render :result_lose
    end
  end
end
