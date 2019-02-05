# The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
# The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
# The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.

$subway = {
  "N" => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
  "L" => ["8th", "6th", "Union Square", "3rd", "1st"],
  "6" => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
}

def determine_stops line, start_station, end_station
  start_index = $subway[line].index(start_station)
  end_index = $subway[line].index(end_station)

  if start_index < end_index
    $trip = $subway[line].slice(start_index..end_index)
  elsif start_index > end_index
    $trip = $subway[line].slice(end_index..start_index).reverse
  end

  $total_stops += $trip.length - 1
end

def first_line_trip line, start_station, end_station
  determine_stops line, start_station, end_station
  puts "You must travel through the following stops on the #{ line } line: #{ $trip * ", " }"
end

def second_line_trip line, start_station, end_station
  puts "Change stations at Union Square and get on line #{ line }"
  determine_stops line, start_station, end_station
  puts "Your journey continues through the following stops: #{ $trip * ", " }"
end

def plan_trip start_line, start_station, end_line, end_station
  $total_stops = 0

  if start_line == end_line
    first_line_trip start_line, start_station, end_station
  else
    first_line_trip start_line, start_station, 'Union Square'
    second_line_trip end_line, 'Union Square', end_station
  end

  puts "#{ $total_stops.to_s } stops in total."
end

plan_trip 'N', 'Times Square', 'L', '1st'
puts "*" * 30
plan_trip 'N', '8th', 'L', '1st'
puts "*" * 30
plan_trip '6', 'Grand Central', 'N', '34th'
