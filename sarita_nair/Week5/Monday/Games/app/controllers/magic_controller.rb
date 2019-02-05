class MagicController < ApplicationController
  def magic
    render :magic_eight
  end
  def prediction
    magicarr = Array.new
    magicarr = ["It is certain.","As I see it, yes.","Most likely.","Outlook good.","Yes.","Signs point to yes.",
    "Reply hazy, try again.","Ask again later.","Better not tell you now.","Cannot predict now.","Concentrate and ask again.",
    "Don't count on it.","My reply is no.","My sources say no.","Outlook not so good.","Very doubtful.","It is decidedly so.",
    "Without a doubt.","Yes - definitely.","You may rely on it."]
    @prediction = magicarr[rand(1...magicarr.size).to_i]
    render :magic_eight

  end

end
