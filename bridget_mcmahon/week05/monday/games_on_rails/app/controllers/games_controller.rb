class GamesController < ApplicationController
  ################ Magic 8 Ball ################
  def magic_8_ball
    render :magic_8_ball
  end

  def magic_8_ball_fortune
    answers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes - definitely", "You may rely on it", "As I see it, yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy, try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"]

    @fortune = answers.sample

    render :magic_8_ball_fortune
  end

  ################# Secret Number #################
  def secret_number
    render :secret_number
  end

  def secret_number_result
    @secret_number = (1..10).to_a.sample
    @win = false

    if @secret_number == params["number"].to_i
      @win = true
    end

    render :secret_number_result
  end

  ############### Rock Paper Scissors ###############
  def rock_paper_scissors_play
    render :rock_paper_scissors_play
  end

  def rock_paper_scissors_result
    throws = ["rock", "scissors", "paper"]
    user_throw = params[:throw].downcase
    user_index = throws.index(user_throw)
    @computer_throw = throws.sample.to_s
    computer_index = throws.index(@computer_throw)
    @user_wins = false
    @draw = false

    if @computer_throw == user_throw
      @draw = true
    elsif throws[computer_index - 1] == throws[user_index]
      @user_wins = true
    end

    # solution from stack overflow - https://stackoverflow.com/questions/26393870/ruby-rock-paper-scissor-game-using-while-if-else-statements-player-vs-comput

    render :rock_paper_scissors_result
  end
end
