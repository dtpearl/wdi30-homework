# Trip Calculator
# Calculate a trip time and cost given inputs for
#
# distance -x-
# miles per gallon -x-
# price per gallon -x-
# speed in miles per hour -x-

def trip_calculator
  puts "What is the total distance of the trip? "
  print "> "
  distance_in_m = gets.to_i
  if distance_in_m < 1000
    puts "That's a nice little trip"
  else puts
    puts "#{ distance_in_m } miles!!! That's a long drive my man"
  end

  puts "Ok how much fuel does your car consume? "
  print "> "
  m_per_g = gets.to_i

  if m_per_g < 14
    puts "#{ m_per_g } miles to the gallon is alot of the dead dinosaurs."
  else
    puts "Ok #{ m_per_g } seems reasonable."
  end

  puts "What's the price of fuel these days? "
  price_per_g = gets.to_f

  puts "How fast will you be travelling on average? "
  m_per_hr = gets.to_i

  trip_time = (distance_in_m / m_per_hr).round(2)

  puts "Trip time should be on average #{trip_time} days."

  trip_cost = (distance_in_m * m_per_g).round(2)

  puts "Trip cost should be roughly $#{trip_cost}"



end

trip_calculator
