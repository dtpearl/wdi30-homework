=begin

BMI Calculator
Calculate the body mass index (BMI) for an individual, given their height and weight

=end

# require 'pry'
# require 'rainbow'

def show_menu
puts "calculator"
puts "-=" * 40 # This is just printing something across the screen
puts "[bmi] - Body Mass Index"
print "Enter your selection: "
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == "q"
case menu_choice

when "bmi"
  print "Enter your weight in kilos: "
  k = gets.to_i
  print "Enter your height in cm, i.e. 1.50 for 1 meter 50cm: "
  h = gets.to_f
  puts "Your result is: #{ k / ( h * h ) }."

else
puts "Invalid selection"
end

show_menu
menu_choice = gets.chomp.downcase
end

puts "Thank you for using crappy calculator."

# binding.pry
# binding.rainbow
