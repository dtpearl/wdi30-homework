require 'pry' # binding.pry
# require 'lolize/auto'

# ------------------------- Input Constants

# Set Menu Width
MENU_WIDTH = 40

# ------------------------- Input Arrays

# Current usable operators
# In order of operation
OPERATORS = ["/", "*", "-", "+"]

# Calculator Options
MENU_OPTIONS = [
  "[q] - Quit"
]

# Calculator Options
CALC_OPTIONS = [
  "[+] - Add",
  "[-] - Subtract",
  "[*] - Multiply",
  "[/] - Divide",
  "e.g - 2-3/4+5*2/4"
]

# ------------------------- Methods

# Menu display
def show_menu
  # Top bar
  puts "-" * MENU_WIDTH
  puts "|" + " " * (MENU_WIDTH/2-6) + "CALCULATOR" + " " * (MENU_WIDTH/2-6) + "|"
  puts "-" * MENU_WIDTH

  # Menu Options
  puts "|" + " "*2 + "Menu:" + " "*(MENU_WIDTH-2-2-"Menu:".length) + "|"
  MENU_OPTIONS.length.times do |i|
    puts "|" + " "*5 + MENU_OPTIONS[i] + " "*(MENU_WIDTH-5-2-MENU_OPTIONS[i].length) + "|"
  end

  # Calculation Options
  puts "|" + " "*2 + "Calculations:" + " "*(MENU_WIDTH-2-2-"Calculations:".length) + "|"
  CALC_OPTIONS.length.times do |i|
    puts "|" + " "*5 + CALC_OPTIONS[i] + " "*(MENU_WIDTH-5-2-CALC_OPTIONS[i].length) + "|"
  end

  # Prompt input
  puts "-" * MENU_WIDTH
  print "Enter: "
end


# Splits the input string into an array,
# split by +, -, * and /. It can handling integers and floats
def calcSplit (input)
  array = input.scan(/(((\d\.?)+)|[\+\-\*\/])/)
  output = []
  array.length.times do |i|
    output.push(array[i].shift());
  end
  return output
end


# Checks if string is numeric
class String
  def numeric?
    Float(self) != nil rescue false
  end
end


# Performs math operations between two numbers
# Limited to +, -, * and /.
def doMath(num1, num2, operator)
  # puts "#{num1} #{operator} #{num2} "
  case operator
  when "+"
    answer = num1 + num2
  when "-"
    answer = num1 - num2
  when "*"
    answer = num1 * num2
  when "/"
    answer = num1 / num2
  else
    answer = nil
  end
  # puts answer
  return answer
end

# ------------------------- Run Script

# Perform initial prompt
show_menu
input = gets.chomp

# Loops menu selection/calculation until 'quit' is selected
until input == 'q'

  # Split input
  array = calcSplit(input)

  # Loop over all operators
  OPERATORS.each do |op|
    # Initilise while loop index
    i = 0
    # Loop over array
    while i <= array.size
      # Perform math on
      if (array[i] == op)
        answer = doMath(array[i-1].to_f, array[i+1].to_f, array[i])
        array[i-1, 3] = answer
        i = 0
      else
        i += 1
      end
    end
  end

  puts "Answer: #{ array[0] }"

  show_menu
  input = gets.chomp

  if input.start_with? "/", "*", "+", "-"
    input = array[0].to_s + input
  end

end

puts "Thanks for using crappy calculator"
