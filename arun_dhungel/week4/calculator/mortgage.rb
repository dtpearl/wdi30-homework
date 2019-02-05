#Mortgage Calculator
#Calculate the monthly required payment given the other variables as input (look up the necessary variables)

puts "Mortgage Calculator"

puts "Please enter the principal loan: "
p = gets.to_f

puts "Please enter your monthly interest rate: "
r = gets.to_f

puts "Please enter your total number of repayments: "
n = gets.to_i

m = r * P (1 + r) ** n / (1 + r) ** n -1

puts "Your monthly repayment will be #{m}."
