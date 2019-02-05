# while conditional
# body
# end

# while true
#   print "OMG"
# end

# whule runs while something is true
i = 0
while i < 5
  puts "i: #{ i }"
  i += 1 # update
end

# until runs while something is false
j = 0
until j == 5
  puts "j: #{ j }"
  j += 1
end

# Iterators ####################################################################
5.times do
  puts "omg"
end

5.times { puts "OmG" }

5.times do |i|
  puts "i: #{ i }"
end
