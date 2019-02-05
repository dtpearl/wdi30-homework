class SecretController < ApplicationController
  def secret_number
  end
  def guess
    @secret_num = Random.rand(1..10)
    @guess = params[:number].to_i


    if @secret_num == @guess
      @result = "Woah! Are you psychic?!"
      puts @guess
    else
      @result = "All your bases are belong to us!"
      puts @guess
    end
  end
end
