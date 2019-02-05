def show_menu
  puts "Calculator"
  puts "*" * 80
  puts "Current Result: #{$input}"
  puts "*" * 60
  puts "Choose from the options:"
  puts "i - input"
  puts "c - clear"
  puts "*" * 30
  puts "a - addition"
  puts "s - subtraction"
  puts "m - mutiplication"
  puts "d - division"
  puts "*" * 30
  puts "e - exponents"
  puts "q - quit"
  puts "r - square root"
  puts "*" * 60
  puts "Advanced Calculator:"
  puts "mortgage - mortgage calculator"
  puts "bmi - bmi calculator"
  puts "trip - trip calculator"
  puts "*" * 60
end

$input = 0.to_f

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
  case menu_choice
  when 'i'
    print "input a number: "
    $input = gets.to_f

  when 'c'
    $input = 0.to_f

  when 'a'
    print "input a number: "
    $input = $input + gets.to_f

  when 's'
    print "input a number: "
    $input = $input - gets.to_f

  when 'm'
    print "input a number: "
    $input = $input * gets.to_f

  when 'd'
    print "input a number: "
    $input = $input / gets.to_f

  when 'e'
    print "input a number: "
    $input = $input ** gets.to_f

  when 'r'
    print "input a number: "
    $input = $input ** 0.5

  when 'mortgage'
    print "input the principal: "
    principal = gets.to_f
    print "input the length of the loan (year): "
    length = gets.to_f
    payments = length * 12
    print "input the rate (%): "
    rate = gets.to_f
    rates = rate / 100 / 12 # rate in digit
    $input = "Monthly payment is $#{principal * ((rates * (1 + rates) ** payments) / ((1 + rates) ** payments - 1))}"

  when 'bmi'
    print "input your weight (kg): "
    weight = gets.to_f
    print "input your height (cm): "
    height = gets.to_f
    $input = weight / (height/100 * height/100)

  when 'trip'
    print "input the distance (km): "
    distance = gets.to_f
    print "input the km per liter (km): "
    km_per_liter = gets.to_f
    print "input the price per liter ($): "
    price_per_liter = gets.to_f
    print "input the speed (km/hr): "
    speed = gets.to_f
    $input = "Time: #{distance / speed} Hours, Cost: $#{distance / km_per_liter * price_per_liter}"
  else
    puts "Invalid selection"
  end

  show_menu
  menu_choice = gets.chomp.downcase
end
