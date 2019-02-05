# Mortgage Calculator
# Calculate the monthly required payment given the other variables as input (look up the necessary variables)
# Loan amount
# Interest rate
# years

require "pry"
require 'rainbow'

def mortgage_calculator 
    puts Rainbow("-*<->*-" * 4).green
    puts Rainbow(" -- Mortgage Calculator -- ").black.bg(:white)
    puts Rainbow("-*<->*-" * 4).green
    print Rainbow("Loan amount: $ ").yellow
    $loan = gets.to_i
    print Rainbow("Monthly Interest rate: % ").indianred
    $rate = ((gets.to_f) / 100) / 12
    print Rainbow("Loan term: years ").red
    $years = gets.to_i
end

mortgage_calculator
months = $years * 12
factor = 1 + $rate
a = $rate * ((factor) ** months)
b = (factor ** months) - 1
payment = $loan * (a / b)
total_pay = (payment * months).round

puts Rainbow("Your estimated monthly payments are $#{payment.round}, and you will pay totally $#{total_pay} and $#{total_pay - $loan} interest over #{$years} years loan period.").magenta.underline
