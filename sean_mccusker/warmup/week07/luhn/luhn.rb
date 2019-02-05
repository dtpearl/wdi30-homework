# Luhn Formula
#
# Write a program that can take a number and determine whether or not it is valid
# per the Luhn formula.
#
# The Luhn formula is a simple checksum formula used to validate a variety of
# identification numbers, such as credit card numbers and Canadian Social
# Insurance Numbers.
#
# This number must pass the following test:
#
# Counting from rightmost digit (which is the check digit) and moving left, double
# the value of every second digit. For any digits that thus become 10 or more,
# subtract 9 from the result.
#
# E.g., 1111 becomes 2121, while 8763 becomes 7733 (from 2×6=12 → 12-9=3 and
# 2×8=16 → 16-9=7).
#
# Add all these digits together. For example, if 1111 becomes 2121, then 2+1+2+1 is
# 6; and 8763 becomes 7733, so 7+7+3+3 is 20.
#
# If the total ends in 0 (put another way, if the total modulus 10 is 0), then the
# number is valid according to the Luhn formula; otherwise it is not valid. So,
# 1111 is not valid (as shown above, it comes out to 6), while 8763 is valid (as
# shown above, it comes out to 20).
#
# Write a program that, given a number, can check if it is valid per the Luhn
# formula.
#
# BONUS:
#
# For an invalid number, add a check digit to make the number valid.
#
# l = Luhn.new(3554)
# l.valid?
# # => false
#
# l = Luhn.new(8763)
# l.valid?
# # => true
# Do this in Ruby.

# Yianni's solution

class Luhn
  def initialize(number)
    @number = number
  end

  def luhnify
    # We want to work from the right (since we want to double every second digit from the RIGHTMOST digit passed in), but there is no .reverse method for numbers. So let's start with this...
    # @number = @number.to_s.reverse
    # ... but we really want this as an array, so we can work with each element (and its index) individually. So let's add this...
    # @number = @number.chars #["4", "5", "5", "3"]

    numbers = []

    # OR @number.digits, it is would give you an array with reverse order
    # e.g. 1234.digits #=> [4,3,2,1]

    # Now we want to iterate over the resulting array and, starting from the checksum (which is now the 0th number in the array, because we reversed the numbers earlier). We also want the index of the element, because that's what determines whether the digit should be multiplied by two or not, so we'll use each_with_index.
    # @number.to_s.reverse.chars.each_with_index do |digit, index|
    # OR
    @number.digits.each_with_index do |digit, index|
      # puts "index: #{index}, digit: #{digit}"

      #Now each element in the array is string, but we want to by able to multiply every second digit by two. The problem is, if we call the :* method on a string, it returns a string with the 'digit' repeated x times  - eg "5"*3 = "555". So we need to convert EACH element back to an integer

      # if index.odd?
      #   digit *= 2
      # end
      digit *= 2 if index.odd?
      # puts "index: #{index}, digit: #{digit}"

      # if digit > 9
      #   digit = digit - 9
      # end
      digit -= 9 if digit > 9
      # puts "index: #{index}, digit: #{digit}"

      numbers << digit # append/push value to the end of the numbers array
    end

    # implicit return
    numbers.reverse # [6, 5, 1, 4]
  end

  def valid?
    num = luhnify # [6, 5, 1, 4]

    #Get the sum for the array
    total = 0
    num.each do |n|
      total += n
    end #loop

    #OR use .inject method
    # total = num.inject(0) do |sum, num|
    #   sum = sum + num
    #     # 6 = 0 + 6
    #     # 11 = 6 + 5
    #     # 12 = 11 + 1
    #     # 16 = 12 + 4
    # end

    #OR a shorter way
    # total = num.inject(0, :+) # [0, + 6, + 5, + 1, + 4]
    # OR
    # total = num.reduce(0, :+) # [16]

    puts "old total: #{total}"

    if total % 10 == 0
      puts "#{@number} is a valid Luhn number."
    else
      # If the result does not end in zero,  add the difference between 10 and the remainder of check % 10.
      luhnified_num = @number + (10 - total % 10)
      puts "new total: #{total + (10 - total % 10)}"
      puts "#{luhnified_num} would be a valid Luhn number."
    end
  end
end

l1 = Luhn.new(1315)
# p l1.luhnify # => 6514
puts l1.valid?
# => false

l2 = Luhn.new(8763)
puts l2.valid?
