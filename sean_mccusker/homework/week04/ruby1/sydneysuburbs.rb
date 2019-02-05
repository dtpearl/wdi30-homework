=begin

Sydney Suburbs

Create a program that asks what suburbs you live in.
Depending on the answer, print an appropriate response of your choosing

=end

print "What suburb do you live in: "
residence = gets.chomp.capitalize

puts case residence
when 'Glebe'
  "Beautiful foreshore walk"
when 'Greemwich'
  "Cool mumified corpse"
when 'Fairlight'
  "What a fancy name"
when 'Cabramatta'
  "Fine dining. Also heroin"
else
  "I'm sure that's a nice place also"
end
