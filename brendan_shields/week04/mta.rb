# MTA Lab
# Objectives:
# Apply your knowledge of Ruby to solve a real world problem.
# Get really good at array manipulation.
# Activity
# Create a program that models a simple subway system.
#
# The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:
#
# plan_trip 'N', 'Times Square', '6', '33rd' # This is only a suggested function name and signature.
#
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











MTA = {:N => ["times square", "34th","28th", "23rd", "union square", "8th"],:L => ["8th", "6th", "union square", "3rd", "1st"],:six => ["grand central", "33rd", "28th", "23rd", "union square", "astor place"]}
#
# def mta(ln1, stn1, ln2, stn2)

# i1 = MTA[ln1].index(stn1); i2 = MTA[ln2].index(stn2); usq1 = MTA[ln1].index('union square'); usq2 = MTA[ln2].index('union square'); t2 = i1<usq1; t3 = usq2<i2;
#
# if !(ln1==ln2) then p MTA[ln1][i1...usq1].insert(-1, "Change at").concat(MTA[ln2][usq2..i2]) if t2&&t3;
#                     p MTA[ln1][i1..usq1].insert(-1, "Change at").reverse.concat(MTA[ln2][usq2...i2]) if !t2&&t3;
#                     p MTA[ln1][i1..usq1].insert(-2, "Change at").concat(MTA[ln2][i2...usq2].reverse) if t2&&!t3;
#                     p MTA[ln1][i1..usq1].reverse.concat(MTA[ln2][i2..usq2].insert(-1, "Change at").reverse) if !t2&&!t3; else
#                     p MTA[ln1][i1..i2] if i1 < i2;  MTA[ln2][i2..i1].reverse if i1 > i2
#                   end
#                 end

def logic(ln1, stn1, ln2, stn2) p arr(ln1, stn1).concat(arr(ln1, stn1)) end
def arr(ln, stn) @i_stn = MTA[ln].index(stn); @i_usq = MTA[ln].index('union square'); @i_stn < @i_usq ? MTA[ln][@i_stn..@i_usq].reverse : MTA[ln][@i_stn..@i_usq] end



















logic(:N, '34th', :N, '8th'); logic(:N, '23rd', :six, 'union square'); logic(:L, '8th',  :six, '33rd')
logic(:six, 'astor place', :N, 'times square'); logic(:N, '28th', :six, 'grand central'); logic(:N, 'union square', :N, 'times square')



















# puts '=0='*30
# if ln1==ln2 then from < to ? MTA[ln1][from..to].map {|value| puts "#{value}"} : MTA[ln2][to..from].reverse.map {|value| puts "#{value}"} end
# MTA[ln1][from...usq1].concat(MTA[ln2][usq2..to]).map { |value| puts "| #{value}" } if !(ln1==ln2) && (tog2 && tog3)
# MTA[ln1][from..usq1].reverse.concat(MTA[ln2][usq2...to]).map { |value| puts "| #{value}" } if (!tog2 && tog3)
# MTA[ln1][from..usq1].concat(MTA[ln2][to...usq2].reverse).map { |value| puts "| #{value}" } if (tog2 && !tog3)
# MTA[ln1][from..usq1].reverse.concat(MTA[ln2][to...usq2].reverse).map { |value| puts "| #{value}" } if (!tog2 && !tog3)
# puts '=0='*30
# both positive
#
# case single && positive
#   MTA[ln1][pos1..pos2].map { |value| puts "| #{value}" }
# case single and negative
#   MTA[ln1][pos1..pos2].map.reverse { |value| puts "| #{value}" }
# case double &&

# p lines[input.upcase](lines[input.upcase].index(from)...lines[input.upcase].index(to))
# p "#{lines[input.upcase](from...'union square')} to #{lines[input.upcase]('union square'...to)}"
#if MTA[:N].include?("times square") & MTA[:N].include?("union square")
