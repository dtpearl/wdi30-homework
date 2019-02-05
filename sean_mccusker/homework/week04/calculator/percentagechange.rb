# require 'pry'
# require 'rainbow'

# NEED TO FINETUNE THE CALCULATOR NOT GETTING DESIRED RESULT 
def show_menu
  puts "calculator"
  puts "-=" * 40 # This is just printing something across the screen
  puts "[p] - Percentage Change"
  print "Enter your selection: "
end

show_menu
menu_choice = gets.chomp.downcase

def percentagechange ( a, b )
  a - b / b  * 100
end


until menu_choice == "q"
case menu_choice



when "p"
  print "Please enter two numbers: "
  a = gets.to_f
  b = gets.to_f
  result = percentagechange( a, b )
  puts "#{ a  -  b / b } * 100 = #{ result }"
  show_menu
  menu_choice = gets.chomp.downcase

else
puts "Invalid selection"
end


show_menu
menu_choice = gets.chomp.downcase
end

puts "Thank you for using crappy calculator."

# binding.pry
# binding.rainbow
