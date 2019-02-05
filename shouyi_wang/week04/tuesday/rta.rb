#
# MTA Lab
# Objectives:
# Apply your knowledge of Javascript to solve a real world problem.
# Get really good at array manipulation.
# Activity
# Create a program that models a simple subway system.
#
# The program takes the line and stop that a user is getting on at and the line and stop that user is getting # off at and prints the journey and the total number of stops for the trip in the console:
#
# plan_trip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.
#
# // console.log() shows output similar to this:
# // "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
# // "Change at Union Square."
# // "Your journey continues through the following stops: 23rd, 28th, 33rd."
# // "7 stops in total."
# There are 3 subway lines:
# The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
# The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
# The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
# All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, # this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have # to differentiate this when you name your stops in the arrays.)
# Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
# Hints:
# Work out how you would do it on paper first! Then start to explain that process in Javascript.
# Get the program to work for a single line before trying to tackle multiple lines.
# Don't worry about prompting the user for input. Hard code some values to get it working. You can use # prompt() later to make it more interactive.
# Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
# The key to the lab is finding the index positions of each stop. (hint: index())
# Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on # the 6 need to be differentiated)


def plan_trip (line1, station1, line2, station2)
  start_line = 0
  end_line = 0
  stops = []

  n_line = ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th']
  l_line = ['8th', '6th', 'Union Square', '3rd', '1st']
  six_line = ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']

  if line1 == 'N'
    start_line = n_line

  elsif line1 == 'L'
    start_line = l_line

  elsif line1 == '6'
    start_line = six_line
  else
    puts "start line invalid"
    return false
  end

  if line2 == 'N'
    end_line = n_line
  elsif line2 == 'L'
    end_line = l_line
  elsif line2 == '6'
    end_line = six_line
  else
    puts "end line invalid"
    return false
  end

  output = "You must travel through the following stops on the #{line1} line: "

  if line1 == line2

    if start_line.index(station1) > start_line.index(station2)
      i =  start_line.index(station1) - 1
      while i >= start_line.index(station2) do
        stops.push(start_line[i])
        output += start_line[i] + ', '
        i -= 1
      end

    elsif start_line.index(station1) < start_line.index(station2)
      i =  start_line.index(station1) + 1
      while i <= start_line.index(station2) do
        stops.push(start_line[i])
        output += start_line[i] + ', '
        i += 1
      end
    end

  else
    if start_line.index(station1) > start_line.index('Union Square')

      i =  start_line.index(station1) - 1
      while i >= start_line.index('Union Square') do
        stops.push(start_line[i])
        output += start_line[i] + ', '
        i -= 1
      end

    elsif start_line.index(station1) < start_line.index('Union Square')
      i =  start_line.index(station1) + 1
      while i <= start_line.index('Union Square') do
        stops.push(start_line[i])
        output += start_line[i] + ', '
        i += 1
      end
    end


    output += "\nChange at Union Square."

    if end_line.index(station2) > end_line.index('Union Square')
      output += "\nYour journey continues through the following stops on the #{line2} line: "
      i =  end_line.index('Union Square') + 1
      while i <= end_line.index(station2) do
        stops.push(end_line[i])
        output += end_line[i] + ', '
        i += 1
      end
    elsif end_line.index(station2) < end_line.index('Union Square')
      output += "\nYour journey continues through the following stops on the #{line2} line: "
      i =  end_line.index('Union Square') - 1
      while i >= end_line.index(station2) do
        stops.push(end_line[i])
        output += end_line[i] + ', '
        i -= 1
      end
    end
  end

  output += "\n#{stops.length} stops in total.";

  puts output
end


plan_trip('N', '28th', 'L', '8th');
plan_trip('N', '34th', 'N', '8th');
plan_trip('N', '34th', '6', 'Union Square');
plan_trip('L', '1st', '6', '33rd');
