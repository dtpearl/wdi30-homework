class Roman

  def initialize
    @roman_map = {
      1000 => "M",
      100 => "CM",
      500 => "D",
      400 => "CD",
      100 => "C",
      90 => "XC",
      50 => "L",
      40 => "XL",
      10 => "X",
      9 => "IX",
      5 => "V",
      4 => "IV",
      1 => "I"
    }
  end
  def to_roman(number)
    result = ''
    @roman_map.each do |key,value|
      while number >= key
        result += value
        puts "number:#{number} >= #{key}"
        puts "result: #{result}"

        number -= key
        puts "new number: #{number}."
      end
    end
    result
  end
end

test = Roman.new
puts test.to_roman 1990
