=begin
Air Conditioning

Ask the user what the current temperature is, if the A/C is functional, and what
temperature they wish it was.

If the airconditioner is functional and the current temperature is above the the
desired temperature... display "Turn on the A/C Please"

If the airconditioner is non-functional and the current temperature is above the
desired temperature... display "Fix the A/C now! It's hot!"

If the airconditioner is non-functional and the current temperature is below the
desired temperature... display "Fix the A/C whenever you have the chance... It's cool..."

=end

require 'pry'

print "What is the current temperature: "
current_temperature = gets.to_f

print "Is the A/C functional (y/n): "
functional_ac = gets.downcase[0] # Lowercase first character

print "What is the desired temperature: "
desired_temperature = gets.to_f

# binding.pry # Pause the program and take me to pry

# p - programmers puts
# p current_temperature
# p functional_ac
# p desired_temperature

if functional_ac == 'y'
  puts "Turn on the A/C please" if current_temperature > desired_temperature
else
  if current_temperature > desired_temperature
    puts "Fix the A/C now! It's hot!"
else
  puts "Fix the A/C whenever you have the chance... It's cool..."
  end
end
