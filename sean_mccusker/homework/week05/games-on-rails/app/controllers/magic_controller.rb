class MagicController < ApplicationController

  def home
  end

  def question
  end

  def answer
    replies = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes - definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "Computer says no.",
    "Outlook not so good.",
    "Very doubtful."
  ]
  question = params[:question]
  if question.end_with? "?"
    @answer = replies.sample
  else
    @answer = "Please ask an actual question"
  end

  end

end
