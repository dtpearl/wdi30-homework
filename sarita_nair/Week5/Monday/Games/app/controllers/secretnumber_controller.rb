class SecretnumberController < ApplicationController
  def home
    render :plain => "hello world"
  end
  def secretnumber

    render :secret_number

  end
  def createsecretnumber
    max = params["max_number"].to_f
    $secretnumber = rand(1...max).to_i
    render :guess_number

  end
  def guess
     if $secretnumber == params["input_number"].to_f
       @msg = "Congratulations!!!"
     else
       @msg =  "Error"
     end
     render :guess_number
  end
end
