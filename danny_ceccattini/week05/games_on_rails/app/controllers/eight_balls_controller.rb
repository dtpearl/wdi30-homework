class EightBallsController < ApplicationController
  def form
    render :form
  end

  def answer
    @question = params[:question]

    answers_array = ["It is certain.", "It is decidedly so.", "Without a doubt", "Yes - definitely.", "You cay rely on it.","As I see it, yes.", "Most likely.", "Outlook good.", "Yes.", "Signs point to yes.", "Reply hazy, try again.", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.", "Don't count on it.", "My reply is no.", "My sources say no.", "Outlook not so good.", "Very doubful."]

    @answer = answers_array.sample
  end
end
