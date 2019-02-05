require 'pry'

#function
def show_menu
  puts "Welcome to the Calculator"
  puts "//\\" * 50
  puts "[B] - Basic Arithmatic Ops"
  puts "[A] - Advanced Arithmativ Ops"
  puts "[q] - quit"
  print "Enter your selection: "
end

def basic_calc
  puts "~~~~\\\///~~~"
  puts "[a] - Addition"
  puts "[s] - Subtraction"
  puts "[m] - Multiplication"
  puts "[d] - Division"
  puts "[e] - exit"
  print "Enter your selection"

  menu_basic = gets.chomp.downcase
  if menu_basic == 'a'
    puts "Enter first number"
    num1 = gets.to_i
    puts "Enter second number"
    num2 = gets.to_i
    puts "The Sum is: "
    puts num1 + num2
    puts "/\+//+\\" * 40

  elsif menu_basic == 's'
    puts "Enter first number"
    num1 = gets.to_i
    puts "Enter second number"
    num2 = gets.to_i
    puts "The Difference is: "
    puts num1 - num2
    puts "/\-//-\\" * 40

  elsif menu_basic == 'm'
    puts "Enter first number"
    num1 = gets.to_i
    puts "Enter second number"
    num2 = gets.to_i
    puts "The Multiplication result is: "
    puts num1 * num2
    puts "/\*//*\\" * 40
  elsif menu_basic == 'd'
    puts "Enter first number"
    num1 = gets.to_i
    puts "Enter second number"
    num2 = gets.to_i
    puts "The Division result is: "
    puts num1 / num2
    puts "/\////\\" * 40

  else
    puts "Thanks for using the basic calculator!"
    show_menu
  end
end

def advanced_calc
  puts "~~~~\\\///~~~"
  puts "[ex] - Exponent"
  puts "[sq] - SquareRoot"
  puts "[e] - exit"
  print "Enter your selection"

  menu_advanced = gets.chomp.downcase
  if menu_advanced == 'ex'
    puts "Enter your number"
    num1 = gets.to_i
    puts "Enter exponent"
    num2 = gets.to_i
    puts "The exponent is: "
    puts num1 ** num2
    puts "/\+//+\\" * 40
    show_menu

  elsif menu_advanced == 'sq'
    puts "Enter the number"
    num1 = gets.to_i
    num2 = Math.sqrt(num1)
    puts "The SquareRoot is: "
    puts num2
    puts "/\-//-\\" * 40
    show_menu
  else
    puts "Thanks for using the advanced calculator!"
    show_menu
  end
end


show_menu
calc_type = gets.chomp
puts "You selected #{calc_type}"

if calc_type == 'b'
  puts "Your selected basic calculator"
  basic_calc

elsif calc_type == 'a'
  puts "You selected advanced Calculator"
  advanced_calc

elsif calc_type == 'q'
  puts "Thanks for using the Calc - Goodbye!"

else
  puts "Invalid selection"
  show_menu
end



#
