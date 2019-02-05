def raindrops num
  
  # create an empty string that will be apppended to
  string = ''

  # if statement to test if number if divisible by 3, and if so, print out 'Pling' (add Pling to the str)
  # if num % 3 == 0
  #   string += "Pling"
  # end

  # short conditional 'if' statements can be condensed down to a single line.
  string += "Pling" if num % 3 == 0

  # if num % 5 == 0
  #   string += "Plang"
  # end
  string += "Plang" if num % 5 == 0

  # if num % 7 == 0
  #   string += "Plong"
  # end
  string += "Plong" if num % 7 == 0

  # if string.length == 0
  #   string = num.to_s
  # end

  # If str is empty, ie not a factor of 3,5,7 then return num (as string)
  string = num.to_s if string.empty?

  # Ruby allows implicit return. Placing this value last in my program is the same as saying return str.
  string

end

puts raindrops 28
puts raindrops 34
puts raindrops 105
puts raindrops 1755
