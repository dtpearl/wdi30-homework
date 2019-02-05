require 'pry'
require 'rainbow'
# MTA Lab

# The program takes the line and stop that a user is getting on at and the line and
# stop that user is getting off at and prints the journey and the total number of
# stops for the trip in the console:

# plan_trip 'N', 'Times Square', '6', '33rd' # This is only a suggested function
# name and signature.

# # `puts` shows output similar to this:
# # "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
# # "Change at Union Square."
# # "Your journey continues through the following stops: 23rd, 28th, 33rd."
# # "7 stops in total."

# print "Which stop are you departing: "
# start_stop = gets.chomp.downcase
# print "Which stop are you arriving: "
# end_stop = gets.chomp.downcase
#
# def plan_trip (line, start_stop, end_stop)
#   n = ["time square", "n_34th", "n_28th", "n_23rd", "union square", "n_8th"]
#   puts Rainbow(n).green

  # start = start_stop.index
  # off = end_stop.index
  #first_line = n.slice(start_stop, end_stop)


  # first_line =
  # n.each do |stops|
  #   print stops
  # end
  #
  # first_line_stop = first_line.delete(end_stop)
  # first_line_stop =
  # delete_list = [start_stop, end_stop]
  # delete_list.each do |del|
  #   n.delete_at(n.index(del))
  # end

  #printing out input
#   puts Rainbow("Your journey starts on the #{line} line at #{start_stop}. You will then travel though the following stops:#{first_line} , before you get off the #{line} at #{end_stop}").cyan
# end
#
# result = plan_trip("n", "n_34th", "union square")

subway_system = {
    "N" => ["Times square", "34th", "28th", "23rd", "Union square", "8th"],
    "L" => ["8th", "6th", "Union square", "3rd", "1st"],
    "6" => ["Grand central", "33rd", "28th", "23rd", "Union square", "Astor place"]
}

p subway_system["N"].index("34th")


## digital machine to enter info
# puts Rainbow(" --- Welcome to our digital Subway System ---").black.bg(:yellow)

# p "Please enter your current line: "
# start_line = gets.chomp.upcase
# p "Please enter your current stop: "
# start_stop = gets.chomp.capitalize
# p "Please enter your final line: "
# final_line = gets.chomp.upcase
# p "Please enter your final stop: "
# final_stop = gets.chomp.capitalize

## get start line and final line --- these are name of lines
s_line = subway_system[start_line]
f_line = subway_system[final_line]

## get index of start stop and final stop -- these are number
s_stop = s_line.index(start_stop)
f_stop = f_line.index(final_stop)


# ## forward trip
def forward (start, finish, line)
p s_line[start..finish] if start < finish
end

# ## backward trip
def backward (start, finish, line)
p line[finish..start].reverse if start > finish
end
