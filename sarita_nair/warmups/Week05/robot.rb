require 'securerandom'
require 'date'
class Robot
  attr_accessor :name
  attr_accessor :createdtime
  attr_accessor :resettime
  attr_accessor :instruction_count

  def initialize()
    @name = secure_random_string(5)
    @createdtime = Time.now.to_i
    @resettime = Time.now.to_i
    @instruction_count = 0
  end
  def reset
    @name = secure_random_string(5)
    @resettime = Date.today
    @instruction_count += 1

  end
end
def timers
  puts "#{Time.now.to_i - @resettime} since last reboot"
  puts "#{@createdtime - @resettime} since last create"

end
def secure_random_string(length = 32, non_ambiguous = false)
  # characters = ('a'..'z').to_a + ('A'..'Z').to_a + ('0'..'9').to_a
  # alphabetarr = ('A'..'Z').to_a
  alphabetarr = ('A'..'Z').to_a.sample(2)

  # numarr = ('0'..'9').to_a
  numarr = ('0'..'9').to_a.sample(3)
  # numarr = ('000'..'999').to_a.sample

  characters = alphabetarr.concat(numarr).join
  characters
  # characters = ('A'..'Z').to_a + ('0'..'9').to_a

# puts characters
#   %w{I O l 0 1}.each{ |ambiguous_character|
#     characters.delete ambiguous_character
#   } if non_ambiguous

  # (0...length).map{
  #   characters[SecureRandom.random_number(characters.size)]
  # }.join

  # characters = (0...2).map{
  # alphabetarr[SecureRandom.random_number(alphabetarr.size)]
  # }.join
  # characters += (0...3).map{
  # numarr[SecureRandom.random_number(numarr.size)]
  # }.join
  # puts characters
  # puts characters1

end

# puts secure_random_string(5)

robot1 = Robot.new
puts "robot1:#{robot1.name}"
puts "robot1:#{robot1.createdtime}"
puts "robot1:#{robot1.resettime}"
puts "robot1:#{robot1.instruction_count}"

robot1.reset
robot1.timers
puts "robot1 after reset:#{robot1.name}"
puts "robot1 after reset:#{robot1.createdtime}"
puts "robot1 after reset:#{robot1.resettime}"
puts "robot1 after reset:#{robot1.instruction_count}"

robot1.reset
puts "robot1 after reset:#{robot1.name}"
puts "robot1 after reset:#{robot1.createdtime}"
puts "robot1 after reset:#{robot1.resettime}"
puts "robot1 after reset:#{robot1.instruction_count}"
