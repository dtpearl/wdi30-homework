=begin
Bonus
Mortgage Calculator
Calculate the monthly required payment given the other variables as input
(look up the necessary variables)
=end

# require "pry"
# require "rainbow"

def show_menu
  puts "Calculator"
  puts "-=" * 40
  puts "[mor] - Mortgage Calculator"
  print "Enter your selection: "
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == "q"
  case menu_choice

  when "mor"
    print "Loan amount: "
    a = gets.to_i
    print "Amount paid: "
    b = gets.to_i
    print "Loan time left in moths: "
    c = gets.to_i
    puts "Monthly payment left is: #{ (a - b) / c }"

  else
  puts "Invalid selection"
end

show_menu
menu_choice = gets.chomp.downcase
end

puts "Thank you for using crappy calculator."

# binding.pry
# binding.rainbow
