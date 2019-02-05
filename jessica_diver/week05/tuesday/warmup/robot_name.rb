# Robot Name
#
# You run a robot factory. As robots are created, they roll off the conveyor belt as empty, mindless husks of machinery -- until you first boot them up.
#
# The first time you boot them up, a random name is randomly generated, and assigned to itself by the robot.
#
# Names typically take the format of things like "BX777" or "SD234".
#
# For instance:
#
# robot1 = Robot.new
# puts robot1.name
# => "BX777"
# robot2 = Robot.new
# puts robot2.name
# => "SD234"
# puts robot2.name
# => "SD234"
# Every once in a while we need to reset a robot to its factory settings, which means that their name gets wiped. The next time you ask, it gives a new name.
#
# if I say:
# robot3 = Robot.new
# puts robot3.name
# => "RF629"
# robot3.reset
# puts robot3.name
# => "ZC532"
require 'pry'

class Robot
  attr_reader :instruction_count

  def initialize
    @name = make_name
    @instruction_count = 0

    @created_at = Time.now.to_i
    @reset_at = Time.now.to_i
  end

  def make_name
    l = ('A'..'Z').to_a.sample(2)
    n = ('000'..'999').to_a.sample(1)
    name_pool = l.concat(n).join
  end

  def name
    @instruction_count += 1
    @name
  end

  def reset
    @instruction_count += 1
    @name = make_name
    @reset_at = Time.now.to_i
  end

  def timers
  puts "#{Time.now.to_i - @reset_at} seconds since last boot, #{Time.now.to_i - @created_at} seconds since creation."
  end


end

puts 'Robot1:'

robot1 = Robot.new
puts robot1.name

puts 'Robot2:'

robot2 = Robot.new
puts robot2.name
puts robot2.name

puts 'Robot3:'
robot3 = Robot.new
puts robot3.name
puts robot3.name
robot3.reset
sleep 3
puts robot3.name
puts robot3.name
sleep 3
puts robot3.instruction_count
puts robot3.timers
