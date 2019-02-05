require "pry"
require 'rainbow'
require 'cmath'

# binding.pry

def menu 
    puts Rainbow("-*<>*-" * 3).green
    puts Rainbow("--- Calculator ---").black.bg(:white)
    puts Rainbow("-*<>*-" * 3).green
    puts Rainbow("[a] - Addition").yellow
    puts Rainbow("[s] - Subtraction").indianred
    puts Rainbow("[m] - Multiplication").red
    puts Rainbow("[d] - division").magenta
    puts Rainbow("[md] - Modular").blue
    puts Rainbow("[e] - Exponent").cyan
    puts Rainbow("[sr] - Square Roots").aqua
    puts Rainbow("[q] - Quit").aliceblue
    print Rainbow("Enter your selection: ").underline
end

menu
menu_choice = gets.chomp.downcase

puts Rainbow("You selected: #{menu_choice}!").green.bright

until menu_choice == 'q'
    print Rainbow("Enter your first number: ").yellow
    num1 = gets.to_f

    if menu_choice != 'sr'
    print Rainbow("Enter your second number: ").indianred
    num2 = gets.to_f
    end

    case menu_choice
    when "a"
        puts Rainbow("#{num1} + #{num2} = #{num1 + num2}").red
    when "s"
        puts Rainbow("#{num1} - #{num2} = #{num1 - num2}").red
    when "m"
        puts Rainbow("#{num1} x #{num2} = #{num1 * num2}").red
    when "d"
        puts Rainbow("#{num1} / #{num2} = #{num1 / num2}").red
    when "mo"
        puts Rainbow("#{num1} % #{num2} = #{num1 % num2}").red
    when "e"
        puts Rainbow("#{num1} ** #{num2} = #{num1 ** num2}").red
    when "sr"
        puts Rainbow("Square root of #{num1} is #{CMath.sqrt(num1)}").red
    else 
        puts Rainbow("Invalid selection").red
end 

menu
  menu_choice = gets.chomp.downcase
end

puts Rainbow("Thanks for using funny rainbow calculator!").magenta
