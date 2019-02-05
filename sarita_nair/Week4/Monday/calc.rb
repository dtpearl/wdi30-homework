require 'pry'

# binding.pry
#
# show menu

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
  print "Enter the selection:"
end
showMenu
menu_choice = gets.chomp.downcase
puts "You Entered #{menu_choice}"

def addition
  print "Enter the first number :"
  firstnum = gets.chomp
  print "Enter the second number :"
  secnum = gets.chomp
  result = add(firstnum.to_f , secnum.to_f)
  puts "Result : #{result}"
end
def subtraction
  print "Enter the first number :"
  firstnum = gets.chomp
  print "Enter the second number :"
  secnum = gets.chomp
  result = subtract(firstnum.to_f , secnum.to_f)
  puts "Result : #{result}"
end
def multiplication
  print "Enter the first number :"
  firstnum = gets.chomp
  print "Enter the second number :"
  secnum = gets.chomp
  result = multiply(firstnum.to_f , secnum.to_f)
  puts "Result : #{result}"
end
def division
  print "Enter the first number :"
  firstnum = gets.chomp
  print "Enter the second number :"
  secnum = gets.chomp
  result = divide(firstnum.to_f , secnum.to_f)
  puts "Result : #{result}"
end
def exponential
  print "Enter the first number :"
  firstnum = gets.chomp
  print "Enter the power :"
  secnum = gets.chomp
  result = expo(firstnum.to_f , secnum.to_f)
  puts "Result : #{result}"
end
def squarert
  print "Enter the number :"
  firstnum = gets.chomp
  result = Math.sqrt(firstnum.to_f)
  puts "Result : #{result}"
end
def mortgage
  print "Enter Principle :"
  principle = gets.chomp.to_f
  print "Enter interest rate :"
  rate = divide(divide(gets.chomp.to_f , 12) , 100)
  r = add(rate,1)
  print "Enter term :"
  term = multiply(gets.chomp.to_f ,12)
  # result = (principle * rate * ((1 + rate) ** term)) / (((1 + rate) ** term) - 1)
  result = multiply(multiply(principle, rate), expo(r,term)) / subtract(expo(r,term), 1)

  puts "Result : #{result}"
end
def bmi
  print "Enter height in cms :"
  height = multiply(gets.chomp.to_f, 0.01)
  print "Enter weight in kgs :"
  weight = gets.chomp.to_f
  result = divide(weight ,expo(height, 2))
  puts "#{result > 25 ? "overweight" : result < 18 ? "Low" : "Healthy BMI"} : #{result}"
end
def tripcalc
  print "Enter speed in hrs :"
  speed = gets.chomp.to_f
  print "Enter distance in miles :"
  distance = gets.chomp.to_f
  time = divide(distance ,speed)
  print "Enter miles per gallon :"
  milespergallon = gets.chomp.to_f
  print "Enter cost per gallon :"
  costpergallon = gets.chomp.to_f
  totalfuelconsumed = divide(distance ,milespergallon)
  totalcost = multiply(totalfuelconsumed,costpergallon)
  puts "Trip time : #{time}hr and cost #{totalcost}$"
end
def add(num1,num2)
  result = num1 + num2
end
def subtract(num1,num2)
  result = num1 - num2
end
def multiply(num1,num2)
  result = num1 * num2
end
def divide(num1,num2)
  result = num1 / num2
end
def expo(num1,num2)
  result = num1 ** num2
end

until menu_choice == 'q'
  case menu_choice
  when 'a' then addition
  when 's' then subtraction
  when 'm' then multiplication
  when 'd' then division
  when '^' then exponential
  when 'sq' then squarert
  when 'mo' then mortgage
  when 'b' then bmi
  when 't' then tripcalc
  else
    puts "Invalid"
    result = 0
  end
  showMenu
  menu_choice = gets.chomp.downcase
end
# get the user choice
# until the user quites
#   do their maths
#     show menu
#     get the user choice
