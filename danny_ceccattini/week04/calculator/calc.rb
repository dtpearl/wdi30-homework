require 'pry'

# binding.pry

def show_menu
  puts "-=" * 17
  puts "| CALCULATOOOOOOOOOOOOOOOOOOOOR |"
  puts "=-" * 17
  puts "[A] - Addition"
  puts "[S] - Subtraction"
  puts "[M] - Multiplication"
  puts "[D] - Division"
  puts "[E] - Exponentials"
  puts "[R] - Square Roots"
  puts "[Q] - Quit"
  print "Enter your selection: "
end

show_menu

menu_choice = gets.chomp.downcase

puts "You entered: #{ menu_choice.capitalize }..."

until menu_choice == "q"
  case menu_choice
  when "a"
    puts "+" * 8
    puts "ADDITION"
    puts "+" * 8
    puts "Type in two numbers you would like to add: "

    print "> "
    a = gets.to_i
    print "> "
    b = gets.to_i

    puts "\nAdding #{ a } to #{ b }..."
    puts "\n\n\n\nThe sum of #{ a } and #{ b } is #{ a + b }.\n\n\n\n"
  when "s"
    puts "-" * 11
    puts "SUBTRACTION"
    puts "-" * 11

    puts "Type two numbers you would like to subtract: "
    print "> "
    a = gets.to_i
    print "> "
    b = gets.to_i

    puts "\nSubtracting #{ b } from #{ a }..."
    puts "\n\n\n\nSubtracting #{ b } from #{ a } leaves you with #{ a - b }.\n\n\n\n"
  when "m"
    puts "*" * 14
    puts "MULTIPLICATION"
    puts "*" * 14

    puts "Select two numbers you wish to multiply: "
    print "> "
    a = gets.to_f
    print "> "
    b = gets.to_f

    puts "\nMultiplying #{ a } by #{ b }..."
    puts "\n\n\n\nMultiplying #{ a } by #{ b } gives you #{ a * b }.\n\n\n\n"
  when "d"
    puts "/" * 8
    puts "DIVISION"
    puts "/" * 8

    puts "Type two numbers would like to divide: "
    print "> "
    a = gets.to_f
    print "> "
    b = gets.to_f

    puts "\nDividing #{ a } by #{ b }..."
    puts "\n\n\n\n#{ a } divided by #{ b } gives us #{ a / b }!\n\n\n\n"
  when "e"
    puts "** ** ** ** **"
    puts "EXPONENTIALS"
    puts "** ** ** ** **"

    puts "Type in the exponent: "
    print "> "
    a = gets.to_i
    puts "And now type in its root: "
    print "> "
    b = gets.to_i

    puts "\nCalculating the exponentiation of #{ a } by the root #{ b }..."
    puts "\n\n\n\nAAAAAAAAAAAAAND the answer is #{ a ** b }!\n\n\n\n"
  when "r"
    puts "!@#$%^&*()}_+"
    puts "SQUARE ROOTS"
    puts "!@#$%^&*()}_+"

    puts "Type the number, the root of which you'd like to know!"
    print "> "
    a = gets.to_f

    puts "\nCalculating the square root of #{ a }..."
    puts "\n\n\n\nThe square root of #{ a } is #{ Math.sqrt(a) }!\n\n\n\n"
  else
    puts "-----------------"
    puts "INVALID SELECTION"
    puts "-----------------"
  end

  show_menu
  menu_choice = gets.chomp.downcase
end

puts "~" * 35
puts "Thanks for using Crappy Calculator"
puts "~" * 35

# binding.pry
# get the user choice
