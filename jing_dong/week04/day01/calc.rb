require 'pry'
require 'rainbow'


# binding.pry

def show_menu
  puts Rainbow("Calculator").yellow
  puts "-=" * 40
  puts "[a] - Addition"
  puts "[s] - Substraction"
  puts "[m] - Multiply"
  puts "[d] - Divide"
  puts "[e] - Exponents"
  puts "[r] - Square roots"
  puts "[o] - Mortgage"
  puts "[b] - BMI"
  puts "[t] - Trip"
  puts "[q] - quit"
  print "Enter your selection: "
end

show_menu
menu_choice = gets.chomp.downcase

puts "You entered: #{ menu_choice }."

until menu_choice == 'q'
  #do actual calculation
  case menu_choice
  when 'a'
    puts "Enter your first number: "
    a = gets.to_f
    puts "Enter your second number: "
    b = gets.to_f
    a + b
    puts "the answer is #{a + b}"
  when 's'
    puts "Enter your first number: "
    a = gets.to_i
    puts "Enter your second number: "
    b = gets.to_i
    a - b
    puts "the answer is #{a - b}"
    #puts "Substraction coming soon"
  when 'm'
    puts "Enter your first number: "
    a = gets.to_i
    puts "Enter your second number: "
    b = gets.to_i
    puts "the answer is #{a * b}"
    #puts "Multiply is coming"
  when 'd'
    puts "Enter your first number: "
    a = gets.to_i
    puts "Enter your second number: "
    b = gets.to_i
    puts "the answer is #{a / b}"
    #puts "Division is coming"
  when 'e'
    puts "Enter your base number: "
    a = gets.to_f
    puts "Enter your exponent: "
    b = gets.to_f
    puts "the answer is #{a ** b}"
    #puts "Expnents is coming"
  when 'r'
    puts "Find the square root of: "
    a = gets.to_f
    puts "the answer is #{Math.sqrt(a)}"
    #puts "Square roots is coming"
  when 'o'
    puts "Enter your principal: "
    principal = gets.to_f
    puts "Enter your annual interest: "
    annual_interest = (gets.to_f) / 100
    monthly_interest = annual_interest / 12
    puts "Enter how many years repayments: "
    years_repayments = gets.to_f * 12
    monthly_payment = principal * ( ( monthly_interest * ((1 + monthly_interest) ** years_repayments) ) / ( ( (1 + monthly_interest) ** years_repayments) - 1) )
    puts "the answer is #{monthly_payment}"
  when 'b'
    puts "Enter your weight in KG: "
    weight = gets.to_f
    puts "Enter your height in Metres: "
    height = gets.to_f
    puts "your BMI is #{(weight / (height ** 2))}"
  when 't'
    puts "Enter your distance traveled by km: "
    distance = gets.to_f
    puts "Enter your speed in km per hour: "
    speed = gets.to_f
    trip_time = distance / speed
    trip_time_in_mins = trip_time * 60
    puts "Your trip time #{ trip_time_in_mins } mins"
  else
    puts "Invalid selection"
  end

  show_menu
  menu_choice = gets.chomp.downcase
end

puts "Thanks for using this"

# show menu
# get the user choice

# until the user quits
 # do their mathematics
 # show menu
 # get the user choice
