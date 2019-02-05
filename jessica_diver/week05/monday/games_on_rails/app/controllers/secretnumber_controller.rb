class SecretnumberController < ApplicationController
  def input
    render :input
  end

  def result
    @randomNumber = Random.rand 1..10
    @guess = params[:number].to_i

    if @randomNumber == @guess
      render :resultwin
      # render :resultwin
    else
      @result = 'Try again'
      render :resultlose
      # render :resultlose
    end
  end
end
