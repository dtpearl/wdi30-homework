# Warmup - Raindrops
# Write a program using Ruby that will take a number (eg 28 or 1755 or 9, etc) and output the following:
#
# If the number contains 3 as a factor, output 'Pling'.
# If the number contains 5 as a factor, output 'Plang'.
# If the number contains 7 as a factor, output 'Plong'.
# If the number does not contain 3, 5, or 7 as a factor, output the number as a string.

print "Number :"
num = gets.chomp.to_f

print "Plong" if num % 7 == 0
print "Pling" if num % 3 == 0
print "Plang" if num % 5 == 0
print num if num % 7 != 0 && num % 5 != 0 && num % 7 != 0

  # case num
  # when (num % 7 == 0) then puts "Plong"
  # when (num % 3 == 0 && num % 5 == 0) then puts "PlingPlang"
  # when (num % 7 == 0 && num % 5 == 0 && num % 7 == 0) then puts num
  # else puts "Nothing"
  # end
