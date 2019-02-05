a = 10
if a > 5
  puts "a is greater than 5"
end

grade = 'A'
if grade == 'A'
  puts "You are killing it"
elsif grade == 'B'
  puts "You are coasting fine"
elsif grade == 'C'
  puts "Acceptable"
else
  puts "Please see Linna"
end

# Case (equivalent to JS's switch BUT it doesn't suck)
grade = 'B'
case grade
when 'A'
  puts "You are killing it"
when 'B'
  puts "You are coasting fine"
when 'C'
  puts "Acceptable"
else
  puts "Please see Linna"
end      

# Modifier condition AKA backwards if statement
a = 1000
puts "a is greater than 5" if a > 5 # This only works for one line of code

# Unless -- opposite of if

x = 1
unless x > 2
  puts "X is not greater than 2"
end

puts "X is not greater than 2" unless x > 2
