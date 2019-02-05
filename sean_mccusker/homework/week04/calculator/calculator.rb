=begin
Calculator

Explanation

You will be building a calculator. A calculator can perform multiple arithmetic
operations. Your function should allow the user to choose which operation is
expected, enter in the values to perform the operation on, and ultimately view
the result.

Specification:

A user should be given a menu of operations
A user should be able to choose from the menu
A user should be able to enter numbers to perform the operation on
A user should be shown the result
This process should continue until the user selects a quit option from the menu

Phase 1
Calculator functionality
Calculator should be able to do basic arithmetic (+,-, *, /)

Phase 2
Advanced Calculator functionality
Calculator should be able to do basic arithmetic (exponents, square roots)
=end

# require 'pry'
# require 'rainbow'

def show_menu
  puts "calculator"
  puts "-=" * 40 # This is just printing something across the screen
  puts "[a] - Addition"
  puts "[s] - Subtraction"
  puts "[m] - Multiplication"
  puts "[d] - Division"
  puts "[e] - Exponent"
  puts "[sq] - Square Root"
  puts "[q] - Quit"
  print "Enter your selection: "
end

show_menu
menu_choice = gets.chomp.downcase

# Addition Function
def add ( a , b )
  a + b
end

# Subtraction Function
def sub ( a, b )
  a - b
end

# Multiplication Function
def multiplication ( a, b )
  a * b
end

# Division Function
def division ( a, b )
  a / b
end

# Exponent Function
def exponent ( a, b )
  a ** b
end

# Square Root Function
def square_root ( a )
  Integer.sqrt( a )
end

until menu_choice == "q"
  case menu_choice

when "a"
  print "Please enter two numbers: "
  a = gets.to_i
  b = gets.to_i
  result = add( a, b )
  puts "#{ a } + #{ b } = #{ result }"
  show_menu
  menu_choice = gets.chomp.downcase

when "s"
  print "Please enter two numbers: "
  a = gets.to_i
  b = gets.to_i
  result = sub( a, b )
  puts "#{ a } - #{ b } = #{ result }"
  show_menu
  menu_choice = gets.chomp.downcase

when "m"
  print "Please enter two numbers: "
  a = gets.to_i
  b = gets.to_i
  result = multiplication( a, b )
  puts "#{ a } * #{ b } = #{ result }"
  show_menu
  menu_choice = gets.chomp.downcase

when "d"
  print "Please enter two nuimbers: "
  a = gets.to_i
  b = gets.to_i
  result = division( a, b )
  puts "#{ a } / #{ b } = #{ result }"
  show_menu
  menu_choice = gets.chomp.downcase

when "e"
  print "Please enter two numbers: "
  a = gets.to_i
  b = gets.to_i
  result = exponent( a, b )
  puts "#{ a } ** #{ b } = #{ result }"
  show_menu
  menu_choice = gets.chomp.downcase

when "sq"
  print "Please enter the number you want to get the square root for: "
  a = gets.to_i
  result = Integer.sqrt( a ) # Integer#sqrt method which returns the integer square root of the non-negative integer
  puts "The squareroot of #{ a } is #{ result }"
  show_menu
  menu_choice = gets.chomp.downcase

else
  puts "Invalid selection"
  show_menu
  menu_choice = gets.chomp.downcase
end
end

show_menu
menu_choice = gets.chomp.downcase

puts "Thank you for using crappy calculator"

# binding.pry
# binding.rainbow
