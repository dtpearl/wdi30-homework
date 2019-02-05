require 'pry'
require 'Rainbow'

@number_of_stops = 0;

@subway = {
  "N" => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
  "L" => ["8th", "6th", "Union Square", "3rd", "1st"],
  "6" => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
}

def new_trip(station1, line1, station2, line2)
  # reset
@number_of_stops = 0;
@stops = []

  # Display trip
puts ""
puts Rainbow("You are travelling from #{ station1 } on the #{ line1 } to #{ station2 } on the #{ line2 }").lavenderblush
puts "///" * 20
puts "YOUR TRIP DETAILS"
puts "///" * 20

# travel on the same line
if line1 == line2
  puts Rainbow("Start: #{station1}").mediumvioletred
  get_trip(station1, station2, line1)
  puts Rainbow("Travel on the #{line1} line for #{@number_of_stops + 1} stops").blanchedalmond
  puts @stops
  puts Rainbow("Arrive: #{station2}").mediumvioletred
end

# travel on different lines
if line1 != line2
  puts Rainbow("Start: #{station1}").mediumvioletred
  puts Rainbow("Travel on the #{line1} line for #{@number_of_stops + 1} stops:").thistle
  get_trip(station1, "Union Square", line1)
  puts "Change at Union Square"
  get_trip("Union Square", station2, line2)
  puts Rainbow("Travel on the #{line2} line for #{@number_of_stops} stops").thistle
  puts @stops
  puts Rainbow("Arrive: #{station2}").mediumvioletred
  puts "Number of stops: #{@number_of_stops + 1}"
end

end # end of new_trip

def get_trip(start_point, end_point, line)
    station_1_index = @subway[line].index(start_point.to_s)
    station_2_index = @subway[line].index(end_point.to_s)
    # @intersection_index = @subway[line].index("Union Square")

  if  station_1_index < station_2_index
    @stops = @subway[line][ (station_1_index + 1 )...station_2_index ]
  elsif  station_1_index > station_2_index
    @stops = @subway[line][ ( station_2_index + 1 )...station_1_index ].reverse!
  else
    direction = Rainbow("You're already here!").orange
  end
  @number_of_stops =+ @stops.length
end

def menu_display
  puts ""
  puts Rainbow(" ~ Welcome to the New York City MTA Service ~ ").royalblue
  puts ""
  puts Rainbow("Where are you starting your journey? ").darksalmon
end

# method gets the starting point from user
def get_station1
  print Rainbow("Station: ").blanchedalmond
  start_point = gets.chomp
  @start_point = start_point
end

def get_line1
  print Rainbow("Line: ").blanchedalmond
  start_line = gets.chomp
  @start_line = start_line
end

# method gets the destination from user
def get_station2
  puts Rainbow("Where would you like to go? ").darksalmon
  print Rainbow("Station: ").blanchedalmond
  end_point = gets.chomp
  @end_point = end_point
end

def get_line2
  print Rainbow("Line: ").blanchedalmond
  end_line = gets.chomp
  @end_line = end_line
end

def another_trip(input)
  if input == 'y'
    menu_display
    new_trip(get_station1, get_line1, get_station2, get_line2)
  elsif input == 'n'
    return
  else
    print "Please select 'y' or 'n': "
    new_trip = gets.chomp.downcase
  end
end

menu_display
new_trip(get_station1, get_line1, get_station2, get_line2)

print "Would you like to start a new trip? (y/n) "
new_trip = gets.chomp.downcase
@new_trip = new_trip
another_trip(@new_trip)

menu_display
new_trip(get_station1, get_line1, get_station2, get_line2)
