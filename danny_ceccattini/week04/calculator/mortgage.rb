require "pry"

# binding.pry

# 99999999999999999999999999999999999999999999999999999

def mortgage
  puts "+" * 30
  puts "      MORTGAGE CALCULATOR"
  puts "=" * 30
  puts "Enter the price of your house below: "
  print "> "
  house_value = gets.to_f
  puts "Enter your deposit amount below: "
  print "> "
  deposit = gets.to_f
  principal = house_value - deposit
  puts "Calculating principle...\n\nPrinciple is $#{ principal }."
  puts "Enter the current interest rate as a percentage: "
  print "> "
  current_interest_rate = gets.to_f
  interest_rate = ((current_interest_rate / 100) / 12).round(3)
  puts "Calculating monthly interest rate...\n\nMonthly interest rate is #{ interest_rate * 100 }%."
  puts "In how many years would you like to pay off this mortgage: "
  print "> "
  years = gets.to_i
  num_payments = years * 12
  puts "...\n...\n..."

  monthly_payments = (principal * ((interest_rate * (1 + interest_rate) ** num_payments) / (((1 + interest_rate) ** num_payments) - 1))).round(2)

  puts "According to your info, you should be making monthly repayments of around $#{ monthly_payments }."

end

mortgage



#
# p = 100000
# r = 0.005
# n = 180
#
# m = (p * ((r * (1 + r) ** n) / (((1 + r) ** n) - 1))).round(2)
#
# puts "Your monthly repayments are $#{ m }. Fuck!"
