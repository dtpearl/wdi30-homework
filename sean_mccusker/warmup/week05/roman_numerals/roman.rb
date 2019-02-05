# Roman Numerals
#
# The Romans were a clever bunch. They conquered most of Europe and ruled it for
# hundreds of years. They invented concrete and straight roads and even bikinis.
# One thing they never discovered though was the number zero. This made writing and
# dating extensive histories of their exploits slightly more challenging, but the
# system of numbers they came up with is still in use today. For example, the BBC
# uses Roman numerals to date their programmes.
#
# The Romans wrote numbers using letters - I, V, X, L, C, D, M. (notice these letters
# have lots of straight lines and are hence easy to hack into stone tablets using
# a chisel).
#
#  1  => I
# 10  => X
#  7  => VII
# Write a program that will convert Arabic numerals to Roman numerals.
#
# There is no need to be able to convert numbers larger than about 3000. (The Romans
# themselves didn't tend to go any higher)
#
# Wikipedia says: "Modern Roman numerals ... are written by expressing each digit
# separately starting with the left most digit and skipping any digit with a value
# of zero."
#
# To see this in practice, consider the example of 1990.
#
# In Roman numerals 1990 is MCMXC:
#
# 1000=M 900=CM 90=XC
#
# 2008 is written as MMVIII:
#
# 2000=MM 8=VIII
#
# See http://www.romannumerals.co.uk/roman-numerals/numerals-chart.html for the table
# of Roman Numbers you will need to check for.
#
# Do this in Ruby.

class Roman
  def initialize
    @roman_map = {
      1000 => "M",
      900 => "CM",
      800 => "DCCC",
      700 => "DCC",
      600 => "DC",
      500 => "D",
      400 => "CD",
      300 => "CCC",
      200 => "CC",
      100 => "C",
      90 => "XC",
      80 => "LXXX",
      70 => "LXX",
      60 => "LX",
      50 => "L",
      40 => "XL",
      30 => "XXX",
      20 => "XX",
      10 => "X",
      9 => "IX",
      8 => "VIII",
      7 => "VII",
      6 => "VI",
      5 => "V",
      4 => "IV",
      3 => "III",
      2 => "II",
      1 => "I"
    }
  end

  def to_roman(number)
    result = ""

    @roman_map.each do |key, value|
      puts "========= each key: #{key}, value: #{value} =========="

      # don't even enter the while loop if our number is smaller than the current key
      while number >= key
        result += value

        puts "number: #{number} >= #{key}"
        puts "result: #{result}"
        number -= key

        puts "new number: #{number}"
      end #while

    end #loop

    result
  end

end

test = Roman.new
puts test.to_roman 1990
puts test.to_roman 3456
