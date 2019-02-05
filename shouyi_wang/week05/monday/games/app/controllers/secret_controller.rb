class SecretController < ApplicationController
  def game
    render :game
  end

  def answer
    @generated_answer = rand(10)
    @your_answer = params[:question].to_i
    if @your_answer > @generated_answer
      @result = "You Win!"
    else
      @result = "You Lose!"
    end

    render :answer
  end
end
