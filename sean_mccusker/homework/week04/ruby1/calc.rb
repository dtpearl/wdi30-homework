require 'pry'

# binding.pry

def show_menu
  puts "Calculator"
  puts "-=" * 40
  puts "[a] - Addition"
  puts "[q] - quit"
  print "Enter your selection: "
end

show_menu
menu_choice = gets.chomp.downcase

puts "You entered: #{ menu_choice }."

until menu_choice == 'q'
  case menu_choice
  when 'a'
    # get numbers a, begin
    # add (a, b)
    puts "Addition coming soon"
  else
    puts "Invalid selection"
  end




  show_menu
  menu_choice = gets.chomp.downcase
end

puts "Thanks for using crappy calculator"
# show menu
# get the user choice

# until the user quits
  # do their mathematics
  # show menu
  # get user choice
