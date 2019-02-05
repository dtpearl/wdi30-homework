
require 'pry'

$num1 = 0
$num2 = 0

def show_menu
  puts "\n\nCalculator"
  puts "-=" * 40
  puts "[+] - Addition"
  puts "[-] - Subtract"
  puts "[*] - Mulply"
  puts "[/] - Division"
  puts "[e] - Exponents"
  puts "[s] - Square Roots"
  puts "[q] - quit"
  print "Enter your selection: "
end

def prompt_two_numbers
  puts "Please input the first number:"
  $num1 = gets.chomp.to_f
  puts "Please input the second number:"
  $num2 = gets.chomp.to_f
  puts "\nResult is:"
end

def prompt_one_number
  puts "Please input the number:"
  $num1 = gets.chomp.to_f
  puts "\nResult is:"
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
  case menu_choice
  when '+'
    prompt_two_numbers;
    puts ($num1 + $num2)
  when '-'
    prompt_two_numbers;
    puts ($num1 - $num2)
  when '*'
    prompt_two_numbers;
    puts ($num1 * $num2)
  when '/'
    prompt_two_numbers;
    puts ($num1 / $num2)
  when 'e'
    prompt_two_numbers;
    puts ($num1 ** $num2)
  when 's'
    prompt_one_number
    puts Math.sqrt($num1)
  else
    puts "Invalid selection"
  end

  show_menu
  menu_choice = gets.chomp.downcase
end

puts "Thanks for using crappy calculator"
