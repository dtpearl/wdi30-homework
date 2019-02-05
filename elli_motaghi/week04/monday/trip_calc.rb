# ## Trip Calculator
# Calculate a trip time and cost given inputs for
# - distance
# - miles per gallon
# - price per gallon
# - speed in miles per hour

require "pry"
require 'rainbow'

def trip_calculator
    puts Rainbow("~~~~" * 5).green
    puts Rainbow("  Trip Calculator  ").aqua
    puts Rainbow("~~~~" * 5).green
    print Rainbow("Trip distance(miles): ").yellow
    $distance = gets.to_i
    print Rainbow("Fuel efficiency(miles per gallon): ").indianred
    $fuel = gets.to_i.round(2)
    print Rainbow("Gas/fuel price(per gallon): ").red
    $price = gets.to_i.round(2)
end

trip_calculator
gallon = $distance / $fuel
puts Rainbow("This trip will require #{gallon} gallons of gas, which amounts to a fuel cost of $#{gallon * $price}.").magenta.underline