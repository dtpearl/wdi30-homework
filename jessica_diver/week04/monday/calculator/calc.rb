require 'pry'
require 'rainbow'

# display the menu
def show_menu
  puts ""
  puts Rainbow("CALCULATOR").plum.underline.bright
  puts ""
  puts Rainbow("~ Menu ~").skyblue
  puts ""
  puts Rainbow("[a] - Addition").crimson
  puts Rainbow("[s] - Subtract").crimson
  puts Rainbow("[m] - Multiply").crimson
  puts Rainbow("[d] - Divide").crimson
  puts Rainbow("[sq] - Square").crimson
  puts Rainbow("[sr] - Square Root").crimson
  puts Rainbow("[x] - Exponent").crimson
  puts Rainbow("[q] - Quit").crimson
  puts ""
  print Rainbow("Enter your selection: ").skyblue.blink
end


# math methods
def add(a, b) a + b end
def subtract(a, b) a - b end
def multiply(a, b) a * b end
def divide (a, b) a / b end
def square (a) a * a end
def square_root (a) a ** 0.5 end
def exponent (a, b) a**b end

def get_number()
  print Rainbow("Enter number: ").skyblue
  a = gets.to_f
  return a
end

def get_answer(answer)
  puts ""
  puts Rainbow("ANSWER: #{ answer }").orange
end

# show menu
# get the user choice

show_menu
menu_choice = gets.chomp.downcase
system('clear')

puts ""
puts Rainbow("You entered: #{ menu_choice } ").plum.bright

# until the user quits
until menu_choice == 'q'

# determines if 1 or 2 numbers are needed for the calculation
  if menu_choice == 'sq' || menu_choice == 'sr'
    number_1 = get_number
  else
    number_1 = get_number
    number_2 = get_number
  end

  case menu_choice
  when 'a'
    answer = add number_1, number_2
  when 's'
    answer = subtract number_1, number_2
  when 'm'
    answer = multiply number_1, number_2
  when 'd'
    answer = divide number_1, number_2
  when 'x'
    answer = exponent number_1, number_2
  when 'sq'
    answer = square number_1
  when 'sr'
    answer = square_root number_1
  else
  puts "Invalid selection"
end

  get_answer(answer)
  show_menu
  puts ""
  menu_choice = gets.chomp.downcase
  system('clear')
  puts ""
  puts "You entered: #{ menu_choice } "

end
