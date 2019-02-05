class Luhn
  attr_accessor :num
def initialize(num)
  @num = num.to_s.split('')
  @reversenum = @num.reverse
end
def validate
  @generatenum = ''
  @doublenum = 0
  # @num.digits.each_with_index
  @reversenum.each_with_index do |item, index|
    # puts num.to_i
    # puts index

    if index % 2 == 0
      # @generatenum = item.to_s + @generatenum
      puts index
    else
      @doublenum = item.to_i * 2
      # puts @doublenum
      if @doublenum > 10
        @doublenum -= 10
      end
      puts @doublenum
      # puts @generatenum
      @generatenum = @doublenum.to_s + @generatenum
    end
  end
  puts @generatenum
end
end

# num = Luhn.new(1111)
# num.validate
num1 = Luhn.new(8763)
num1.validate
