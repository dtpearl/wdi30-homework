class SecretNumbersController < ApplicationController
  def form
    render :form
  end

  def answer
    guess_numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    # guess_numbers = [1, 2]
    @computers_number = guess_numbers.sample.to_i
    @users_guess = params[:guess].to_i

  end

end
