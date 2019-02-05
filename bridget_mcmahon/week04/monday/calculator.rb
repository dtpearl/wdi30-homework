require 'pry'
require 'rainbow'

#binding.pry

def show_menu
  puts "CALCULATOR"
  puts "-=" * 40
  puts Rainbow("[a] - Addition").red
  puts Rainbow("[s] - Subtraction").green
  puts Rainbow("[m] - Multiplication").yellow
  puts Rainbow("[d] - Division").blue
  puts Rainbow("[e] - Exponent").magenta
  puts Rainbow("[h] - Mortgage Calculator").cyan
  puts Rainbow("[b] - BMI Calculator").orange
  puts Rainbow("[q] - Quit").white
  puts "-=" * 40
  print "Enter your selection: "
end

def add(a, b)
  a + b
end

def subtract(a, b)
  a - b
end

def multiply(a, b)
  a * b
end

def divide(a, b)
  a / b
end

def exponent(a, b)
  a ** b
end

def square_root(a)
  Math.sqrt(a)
end

def mortgage(price, deposit, term, rate)
  return price * ( (rate * ((1 + rate) ** term)) / (((1 + rate) ** term) - 1) )
end

def bmi(weight, height)
  bmi = weight / (height * height)
  return bmi
end

def get_two_numbers
  print "Enter the first number: "
  $first_number = gets.to_i
  print "Enter the second number: "
  $second_number = gets.to_i
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
  case menu_choice
  when 'a'
    get_two_numbers
    puts "Result: #{add $first_number, $second_number}"

  when 's'
    get_two_numbers
    puts "Result: #{subtract $first_number, $second_number}"

  when 'm'
    get_two_numbers
    puts "Result: #{multiply $first_number, $second_number}"

  when 'd'
    get_two_numbers
    puts "Result: #{divide $first_number, $second_number}"

  when 'e'
    get_two_numbers
    puts "Result: #{exponent $first_number, $second_number}"

  when 'r'
    print "Number to get square root of: "
    number = gets.to_f
    puts "Result: #{square_root number}"

  when 'h'
    print "Price of house: "
    price = gets.to_f
    print "Deposit amount: "
    deposit = gets.to_f
    print "Interest rate (%): "
    rate = gets.to_f
    monthly_rate = rate / 100 / 12
    print "Term of loan (in months): "
    term = gets.to_i
    puts "Monthly repayment: $#{(mortgage price, deposit, term, monthly_rate).round(2)}"

  when 'b'
    print "Weight (kg): "
    weight = gets.to_f
    print "Height (cm): "
    height = gets.to_f
    height = height / 100
    puts "BMI: #{bmi weight, height}"

  else
    puts "Invalid selection"
  end

  show_menu
  menu_choice = gets.chomp.downcase
end

puts "Thanks for using the calculator"
