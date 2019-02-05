$menu_choice = ''
def handle_input(input)
  # result = eval(input)
  $menu_choice = input
  # puts "You Entered #{$menu_choice}"
  # puts(" => #{input}")
end

repl = -> prompt do
  prompt
  handle_input(gets.chomp!)
end

def showMenu
  puts "Calculator"
  puts "=" * 40
  puts "[a] - Addition"
  puts "[s] - Subtraction"
  puts "[d] - Division"
  puts "[m] - Multiplication"
  puts "[^] - Exponential"
  puts "[sq] - Square Roots"
  puts "[mo] - Mortgage"
  puts "[b] - BMI"
  puts "[t] - Trip Calculator"
  puts "[q] - Quit"

  # print "Enter the selection:"
end
# showMenu
def addition
  # print "Enter the first number :"
  firstnum = repl["Enter the first number :>> "]
  # print "Enter the second number :"
  secnum = repl["Enter the second number :>> "]
  result = add(firstnum.to_f , secnum.to_f)
  puts "Result : #{result}"
end
def add(num1,num2)
  result = num1 + num2
end

until $menu_choice == 'q'
  case $menu_choice
  when 'a' then
    firstnum = repl["Enter the first number :>> "]
    secnum = repl["Enter the second number :>> "]
    result = add(firstnum.to_f , secnum.to_f)
    puts "Result : #{result}"
  # when 's' then subtraction
  # when 'm' then multiplication
  # when 'd' then division
  # when '^' then exponential
  # when 'sq' then squarert
  # when 'mo' then mortgage
  # when 'b' then bmi
  # when 't' then tripcalc
  else
    puts "Invalid"
    result = 0
  end
  showMenu
  repl["Enter the selection:>> "]
  puts $menu_choice
end
