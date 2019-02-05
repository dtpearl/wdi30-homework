
class Simplesums
  attr_accessor :num
  def initialize num
    @num = num
  end
  def sum1(num)
    @num % 2
  end
  def sum2(num)
  #   i = 1
  #   sum_var = 0
  # while(i < num)
  # sum_var += i
  # i += 1
  #
  # end
  # (@num * (@num + 1))/2
  (1...@num).sum
  sum_var
  end
end

sum = Simplesums.new(10)
puts sum.sum1
puts sum.sum2
