require "pry"
# MTA Lab

# Objectives:

# Apply your knowledge of Ruby to solve a real world problem.
# Get really good at array manipulation.
# Activity
# Create a program that models a simple subway system.

# The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:

# plan_trip 'N', 'Times Square', '6', '33rd' # This is only a suggested function name and signature.

# # `puts` shows output similar to this:
# # "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
# # "Change at Union Square."
# # "Your journey continues through the following stops: 23rd, 28th, 33rd."
# # "7 stops in total."

# There are 3 subway lines:
# The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
# The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
# The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.

# All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
# Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.

# Hints:
# Work out how you would do it on paper first! Then start to explain that process in Ruby.
# Get the program to work for a single line before trying to tackle multiple lines.
# Don't worry about prompting the user for input. Hard code some values to get it working. You can use gets later to make it more interactive.
# Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
# The key to the lab is finding the index positions of each stop. (hint: index)
# Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)

$n = ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"]
$l = ["8th", "6th", "Union Square", "3rd", "1st"]
$six = ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]

def same_line(line_a, hop_on, hop_off)
  n = ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"]
  hop_on = line_a.index(hop_on) + 1
  hop_off = line_a.index(hop_off)
  print "You must travel through the following stops on the N line: #{ n[hop_on..hop_off].join(", ") }.\n"
end

def switch_lines(line_a, hop_on, line_b, hop_off)
  hop_on = line_a.index(hop_on) + 1
  change_a = line_a.index("Union Square")
  change_b = line_b.index("Union Square") + 1
  hop_off = line_b.index(hop_off)
  print "\nYou must travel through the following stops: #{ line_a[hop_on..change_a].join(", ") }.\n"
  puts "Change at Union Square...\n"
  print "Your journey continues through the following stops: #{ line_b[change_b..hop_off].join(", ") }.\n"
end

def same_line_reversed(line_a, hop_on, hop_off)
  line_a_reversed = line_a.reverse
  hop_on = line_a_reversed.index(hop_on) + 1
  hop_off = line_a_reversed.index(hop_off)
  print "\nYou must travel through the following stops: #{ line_a_reversed[hop_on..hop_off].join(", ") }.\n"
end

def switch_lines_reversed(line_a, hop_on, line_b, hop_off)
  line_a_reversed = line_a.reverse
  line_b_reversed = line_b.reverse
  hop_on = line_a_reversed.index(hop_on) + 1
  hop_off = line_b_reversed.index(hop_off)
  change_a = line_a_reversed.index("Union Square")
  change_b = line_b_reversed.index("Union Square") + 1
  print "\nYou must travel through the follwing stops: #{ line_a_reversed[hop_on..change_a].join(", ") }.\n"
  puts "Change at Union Square...\n"
  print "Your journey continues through the follwing stops: #{ line_b_reversed[change_b..hop_off].join(", ") }.\n"
end


def plan_trip(line_a, hop_on, line_b, hop_off)
  puts "\n\n======================="
  puts "METRO TRANSIT AUTHORITY"
  puts "=======================\n\n"
  puts "-----"
  puts "LINES"
  puts "-----\n\n"
  print "Line N => #{ $n.join(', ') }\n\n"
  print "Line L => #{ $l.join(', ') }\n\n"
  print "Line 6 => #{ $six.join(', ') }\n\n"

  if (line_a != line_b) && (line_a.index(hop_on) > line_a.index("Union Square")) && (line_b.index("Union Square") > line_b.index(hop_off))
    switch_lines_reversed(line_a, hop_on, line_b, hop_off)
  elsif (line_a == line_b) && (line_a.index(hop_on) > line_a.index(hop_off))
    same_line_reversed(line_a, hop_on, hop_off)
  elsif line_a != line_b
    switch_lines(line_a, hop_on, line_b, hop_off)
  elsif line_a == line_b
    same_line(line_a, hop_on, hop_off)
  end
end

# For the same_line option
# plan_trip($n, "Times Square", $n, "Union Square")

# For switch_lines option
# plan_trip($n, "Times Square", $l, "1st")

# For same_line_reversed
plan_trip($six, "Astor Place", $six, "Grand Central")

# For switch_lines_reversed
plan_trip($n, "8th", $six, "Grand Central")
