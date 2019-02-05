class Luhn
  def initialize number
    @number = number
  end

  def luhnify
    numbers = []
    @number.digits.each_with_index do |digit, index|
      if index.odd?
        digit * 2
      end

      puts "digit: #{digit}, index: #{index}"

      if digit > 9
        digit -= 9
      end

      puts "digit: #{digit}, index: #{index}"

      numbers << digit
    end
    numbers.reverse!
  end

  def valid?
    num = luhnify

    total = 0
    num.each do |n|
      total += n
    end

    if total % 10 == 0
      puts "#{@number} is a valid luhn number"
      # true
    else
      puts "#{@number} is not a valid luhn number"

      @number = @number + (10 - (total % 10))
      # false

      puts "#{@number} is a valid luhn number"
    end
  end
end


l = Luhn.new(3554)
l.valid?


l = Luhn.new(8763)
l.valid?
