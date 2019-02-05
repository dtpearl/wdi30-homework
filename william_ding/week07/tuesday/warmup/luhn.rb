
def luhn()
  print "enter a number"
  input = gets.chomp
  output = []
  input.split("").reverse.each_with_index do |num, index|
    if index % 2 == 0
      output.push(num.to_i)
    else
      num = num.to_i * 2
      if num >= 10
        num = num - 9
      end
      output.push(num)
    end
  end
  sum = output.inject(0){|sum,x| sum + x }
  puts "#{input} is valid" if sum % 10 == 0
  puts "#{input} is not valid" if sum % 10 != 0
end
