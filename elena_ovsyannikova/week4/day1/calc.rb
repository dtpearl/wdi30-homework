

require 'pry'

# binding.pry

def show_menu
  puts "Calculator"
  puts "-=" * 40
  puts "[a] - Addition"
  puts "[q] - quit"
  puts "[s] - subtraction"
  puts "[m] - multiplication"
  puts "[d] - division"
  puts "[e] - exponents"
  puts "[r] - root"
  puts "[mc] -mortgage calculator"
  puts "[bmi] - body mass index"
  puts "[tc] - trip calculator"
  print "Enter your selection: "
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
  if menu_choice != 'r' && menu_choice != 'mc' && menu_choice != 'bmi' && menu_choice != 'tc'
    print "Enter your first number: "
    first_number = gets.to_i
    print "Enter your second number: "
    second_number = gets.to_i
  else if menu_choice == 'r'
    print "Enter your first number: "
    first_number = gets.to_i

  else if menu_choice == 'mc'
    print "Enter your loan amount: "
    loan_amount = gets.to_i
    print "Enter your loan term: "
    loan_term = gets.to_i
    print "Enter your interest rate: "
    interest_rate = gets.to_i
  else if menu_choice == 'bmi'
    print "Enter your height in the next fomate: XXX cm: "
    height = gets.to_i/100.0
    print "Enter your weight: "
    weight = gets.to_i
  else if menu_choice == 'tc'
    print "Enter distance in miles : "
    distance = gets.to_i
    print "Enter miles per gallon: "
    miles_per_gallon = gets.to_i
    print "Enter price per gallon: "
    price_per_gallon = gets.to_i
    print "Enter speed in miles per hour: "
    speed = gets.to_i
  end
  end
  end
  end
  end
  case menu_choice
  when 'a'
    summ=first_number+second_number
    puts "the result of adding is: #{summ}"
    # get numbers a, b
    # add(a, b)
  when 's'
    dirrerence=first_number-second_number
    puts "The result of subtraction is: #{dirrerence}"
  when 'm'
    multiplication=first_number*second_number
    puts "The result of multiplication is: #{multiplication}"
  when 'd'
    division=first_number/second_number
    puts "The result of division is: #{division}"
  when 'e'
    exponents=first_number**second_number
    puts "The result of exponents is: #{exponents}"
  when 'r'
    root=Math.sqrt(first_number)
    puts "The result of square roots is: #{root}"
  when 'mc'
    payment=loan_amount/loan_term/12 + loan_amount * interest_rate/100/12

    puts "The monthly required payment  is: #{payment}"
  when 'bmi'
    bmi=weight/(height*height)

    puts "The body mass index  is: #{bmi}"
  when 'tc'
    trip_time =   distance / speed
    puts "The trip time is: #{trip_time}"
    trip_cost = (distance / miles_per_gallon) * price_per_gallon
    puts "The trip cost is: #{trip_cost}"
  else
    puts "Invalid selection"
  end

  show_menu
  menu_choice = gets.chomp.downcase
end

puts "Thanks for using crappy calculator"
