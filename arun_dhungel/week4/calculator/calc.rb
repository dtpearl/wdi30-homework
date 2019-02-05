#Calculator
#Explanation
#You will be building a calculator. A calculator can perform multiple arithmetic operations. Your function should allow the user to choose which operation is expected, enter in the values to perform the operation on, and ultimately view the result.
#Specification:
#A user should be given a menu of operations
#A user should be able to choose from the menu
#A user should be able to enter numbers to perform the operation on
#A user should be shown the result
#This process should continue until the user selects a quit option from the menu
#Phase 1
#Calculator functionality
#Calculator should be able to do basic arithmetic (+,-, *, /)
#Phase 2
#Advanced Calculator functionality
#Calculator should be able to do basic arithmetic (exponents, square roots)


require 'pry'
require 'colorize'
require 'rainbow'
# binding.pry

def show_menu
  puts  Rainbow("Calculator").red.underline
  puts "-=" * 40
  puts "[a] - Addition"
  puts "[s] - Subtraction"
  puts "[m] - Multiplication"
  puts "[d] - division"
  puts "[e] - exponent"
  puts "[r] - square root"
  puts "[q] - quit"
  print "Enter your selection: "
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
  case menu_choice
  when 'a'
    puts "Please enter the numbers you want to add: "
    n1 = gets.to_f
    n2 = gets.to_f
    answer = n1 + n2
    puts "The sum is... #{n1} + #{n2} = #{answer}"

  when 's'
    puts "Please enter the numbers you want to subtract: "
    n1 = gets.to_f
    n2 = gets.to_f
    answer = n1 - n2
    puts "The subtraction is... #{n1} - #{n2} = #{answer}"

  when 'm'
    puts "Please enter the numbers you want to multiply: "
    n1 = gets.to_f
    n2 = gets.to_f
    answer = n1 * n2
    puts "The multiplication is... #{n1} * #{n2} = #{answer}"

  when 'd'
    puts "Please enter the numbers you want to do division: "
    n1 = gets.to_f
    n2 = gets.to_f
    answer = n1 / n2
    puts "The division is... #{n1} / #{n2} = #{answer}"

  when 'e'
    puts "Please enter the base number: "
    n1 = gets.to_f
    puts "Please enter the power you'd like to raise it to: "
    power = gets.to_i
    answer = n1 ** power
    puts "The result is... #{n1} ** #{power} = #{answer}"

  when 'r'
    puts "Please enter the number you'd like to find the square root of: "
    n1= gets.to_f
    sqr = n1 ** (0.5)
    puts "Your square root is #{sqr}"


  else
    puts "Invalid selection"
  end

  show_menu
  menu_choice = gets.chomp.downcase


end

puts "Thanks for using crappy calculator"