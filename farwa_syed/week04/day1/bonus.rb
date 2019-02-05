require 'pry'

#binding .binding.pry
#show menu

#function
def show_menu
  puts "Welcome to the Bonus"
  puts "//\\" * 50
  puts "[M] - Mortgage"
  puts "[B] - BMI"
  puts "[T] - Trip Calculator"
  puts "[e] - exit"
  print "What would you like to calculate? : "
end

menu_selection = gets.chomp
if menu_selection == 'M'
  puts "Enter your Home Price"
  home_price = gets.to_f
  puts "Enter your Down Payment"
  down_payment = gets.to_f
  puts "Lastly, enter you annual interest rate: "
  puts num1 ** num2
  puts "/\+//+\\" * 40
  show_menu

elsif menu_selection == 'B'
  puts "Enter your weight in kilograms"
  num1 = gets.to_f
  puts "Enter your height in meters"
  num2 = gets.to_f
  puts "Your BMI is: "
  num2 = num2 * num2
  puts num1 / num2
  puts "/\-//-\\" * 40
  show_menu
else
  puts "Thanks for using the bonus calculator!"
  show_menu
end
