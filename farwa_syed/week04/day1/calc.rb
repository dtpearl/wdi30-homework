require 'pry'
require 'Rainbow'
#require 'lolcat'
#binding .binding.pry
#show menu

#function
def show_menu
  puts Rainbow("Welcome to the Calculator").yellow
  puts Rainbow("//\\" * 50).yellow
  puts Rainbow("[a] - Addition").green
  puts Rainbow("[s] - Subtraction").green
  puts Rainbow("[m] - Multiplication").green
  puts Rainbow("[d] - Division").green
  puts Rainbow("[q] - quit").red
  print Rainbow("Enter your selection: ").yellow
end


show_menu
menu_choice = gets.chomp.downcase

puts "You entered #{menu_choice}"
#
until menu_choice == 'q'
  #does calculaiton
  case menu_choice
  when 'a'
    puts "Enter first number"
    num1 = gets.to_i
    puts "Enter second number"
    num2 = gets.to_i
    puts "The Sum is: "
    puts num1 + num2
    puts "/\+//+\\" * 40
#----
  when 's'
    puts "Enter first number"
    num1 = gets.to_i
    puts "Enter second number"
    num2 = gets.to_i
    puts "The Difference is: "
    puts num1 - num2
    puts "/\-//-\\" * 40
#-----
when 'm'
    puts "Enter first number"
    num1 = gets.to_i
    puts "Enter second number"
    num2 = gets.to_i
    puts "The Multiplication result is: "
    puts num1 * num2
    puts "/\*//*\\" * 40
#----
when 'd'
    puts "Enter first number"
    num1 = gets.to_f
    puts "Enter second number"
    num2 = gets.to_f
    puts "The Division result is: "
    puts num1 / num2
    puts "/\////\\" * 40
else
  puts "invalid selection"
end

  show_menu
  menu_choice = gets.chomp.downcase
end

puts "Thanks for using the Calculator"
