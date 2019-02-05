=begin

Trip Calculator
Calculate a trip time and cost given inputs for

distance
miles per gallon
price per gallon
speed in miles per hour

=end

def show_menu
puts "calculator"
puts "-=" * 40 # This is just printing something across the screen
puts "[t] - Trip Cost"

print "Enter your selection: "
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == "q"
case menu_choice

when "t"
  print "Enter your trip distance: "
  d = gets.to_f
  print "Enter your miles per gallon: "
  m = gets.to_f
  print "Enter your price per gallon: "
  pr = gets.to_f
  print "Enter your speed in miles per hour: "
  s = gets.to_f
  puts "Your trip time is #{ d / s }."
  puts "Your trip cost is #{ pr * m }."

else
puts "Invalid selection"
end

show_menu
menu_choice = gets.chomp.downcase
end

puts "Thank you for using crappy calculator."

# binding.pry
# binding.rainbow
