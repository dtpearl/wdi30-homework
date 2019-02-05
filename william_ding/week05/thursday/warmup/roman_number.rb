require "pry"

def roman(num)
  roman_number = [
    "I",
    "II",
    "III",
    "IV",
    "V",
    "VI",
    "VII",
    "VIII",
    "IX",
    "X"
  ]

  roman = []
  if num >= 5000
    until num < 5000
      roman.push("V")
      num -= 5000
    end
  end
  if num >= 4000
    until num < 4000
      roman.push("MV")
      num -= 4000
    end
  end
  if num >= 1000
    until num < 1000
      roman.push("M")
      num -= 1000
    end
  end
  if num >= 900
    until num < 900
      roman.push("CM")
      num -= 900
    end
  end
  if num >= 500
    until num < 500
      roman.push("D")
      num -= 500
    end
  end
  if num >= 400
    until num < 400
      roman.push("CD")
      num -= 400
    end
  end
  if num >= 100
    until num < 100
      roman.push("C")
      num -= 100
    end
  end
  if num >= 90
    until num < 90
      roman.push("XC")
      num -= 90
    end
  end
  if num >= 50
    until num < 50
      roman.push("L")
      num -= 50
    end
  end
  if num >= 40
    until num < 40
      roman.push("XL")
      num -= 40
    end
  end
  if num >= 10
    until num < 10
      roman.push("X")
      num -= 10
    end
  end
  if num <= 10
    roman.push(roman_number[num - 1])
  end

  puts roman.join("")

end

binding pry
