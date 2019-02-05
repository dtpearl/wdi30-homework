class SecretController < ApplicationController
  def home
    render :home
  end

  def result
    @guess = params[:guess].to_i
    @answer = rand(1..10).to_i
    @message = "You got it!" if @guess == @answer
    @message = "Wrong guess." if @guess != @answer

    render :result
  end
end
