print "start line: "
start_line = gets.chomp.upcase
print "start station: "
start_station = gets.chomp.downcase
print "finish line: "
finish_line = gets.chomp.upcase
print "finish station: "
finish_station = gets.chomp.downcase

$subway = {
  "N" => ["times square", "34th", "28th", "23rd", "union square", "8th"],
  "L" => ["8th", "6th", "union square", "3rd", "1st"],
  "6" => ["grand central", "33rd", "28th", "23rd", "union square", "astor place"]
}

# Single line message -----------------------
def message_single_line(line, stations)
  stops = stations.size - 1
  stations = stations.map { |item| item.split.map(&:capitalize).join(' ')}.join(", ")
  puts "You must travel through the following stops on the #{line} line: #{stations}."
  puts "#{stops} stops in total."
end

# Two lines message ----------------------------
def message_two_lines(line1, line2, stations1, stations2)
  stops = stations1.size + stations2.size - 1
  stations1 = stations1.map { |item| item.split.map(&:capitalize).join(' ')}.join(", ")
  stations2 = stations2.map { |item| item.split.map(&:capitalize).join(' ')}.join(", ")
  puts "You must travel through the following stops on the #{line1} line: #{stations1}."
  puts "Change at Union Square."
  puts "Your journey continues through the following stops on the #{line2} line: #{stations2}."
  puts "#{stops} stops in total."
end

def mta(start_line, start_station, finish_line, finish_station)
  # Single Line --------------------------------------------------
  if start_line == finish_line
    line1 = $subway[start_line]
    start_index = line1.index(start_station)
    finish_index = line1.index(finish_station)
    if start_index < finish_index
      stations = line1[start_index..finish_index]
      message_single_line(start_line, stations)
    elsif start_index > finish_index
      stations = line1[finish_index..start_index].reverse
      message_single_line(start_line, stations)
    else
      puts "You are already there!"
    end

    # Start from union square --------------------------------------------------
  elsif start_station == "union square"
    line1 = $subway[finish_line]
    start_index = line1.index(start_station)
    finish_index = line1.index(finish_station)
    if start_index < finish_index
      stations = line1[start_index..finish_index]
      message_single_line(finish_line, stations)
    elsif start_index > finish_index
      stations = line1[finish_index..start_index].reverse
      message_single_line(finish_line, stations)
    else
      puts "You are already there!"
    end

  # Two Lines --------------------------------------------------
  else
    line1 = $subway[start_line]
    line2 = $subway[finish_line]
    start_index = line1.index(start_station)
    union_index1 = line1.index("union square")
    finish_index = line2.index(finish_station)
    union_index2 = line2.index("union square")

    # Two Lines, first left to right
    if start_index < union_index1
      stations1 = line1[start_index..union_index1]

      # second left to right -----------------
      if union_index2 < finish_index
        stations2 = line2[(union_index2 + 1)..finish_index]
        message_two_lines(start_line, finish_line, stations1, stations2)

      # second right to left -----------------
      else
        stations2 = line2[finish_index..(union_index2 - 1 )].reverse
        message_two_lines(start_line, finish_line, stations1, stations2)
      end

    # Two Lines, first right to left
    else
      stations1 = line1[union_index1..start_index].reverse

      #second left to right
      if union_index2 < finish_index
        stations2 = line2[( union_index2 + 1)..finish_index]
        message_two_lines(start_line, finish_line, stations1, stations2)

      #second right to left
      else
        stations2 = line2[finish_index..( union_index2 - 1 )].reverse
        message_two_lines(start_line, finish_line, stations1, stations2)
      end
    end
  end
end

mta(start_line, start_station, finish_line, finish_station)
