class RockController < ApplicationController
  def home
    render :home
  end

  def result
    n = rand(3)
    plays = ["Rock", "Paper", "Scissors"]
    @computer_play = plays[n]
    @player_play = params[:play].capitalize

    if @player_play == "Rock" && @computer_play == "Rock"
      @message = "Draw."
    elsif @player_play == "Rock" && @computer_play == "Paper"
      @message = "You lose."
    elsif @player_play == "Rock" && @computer_play == "Scissors"
      @message = "You win."

    elsif @player_play == "Paper" && @computer_play == "Paper"
      @message = "Draw."
    elsif @player_play == "Paper" && @computer_play == "Scissors"
      @message = "You lose."
    elsif @player_play == "Paper" && @computer_play == "Rock"
      @message = "You win."

    elsif @player_play == "Scissors" && @computer_play == "Scissors"
      @message = "Draw."
    elsif @player_play == "Scissors" && @computer_play == "Paper"
      @message = "You win."
    elsif @player_play == "Scissors" && @computer_play == "Rock"
      @message = "You lose."
    end

    render :result
  end
end
