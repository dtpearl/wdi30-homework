require 'pry'

def random_letter()
  (rand(26) + (rand(2) == 0 ? 65 : 97) ).chr.upcase
end

class Robot
  attr_accessor :name, :instruction_count

  def initialize
    @instruction_count = 0
    @creation_time = Time.now.to_i
    @name = random_letter + random_letter + ("000".."999").to_a.sample(1).join()
  end

  def name
    @instruction_count += 1
    @name
  end

   def reset
     @instruction_count += 1
     @reboot_time = Time.now.to_i
     @name = random_letter + random_letter + ("000".."999").to_a.sample(1).join()
   end

   def timers
     now = Time.now.to_i
     elapsed_creation = now - @creation_time
     elapsed_reboot = now - @reboot_time
     puts "#{elapsed_reboot} seconds since last boot, #{elapsed_creation} seconds since creation."
   end
end

# binding.pry
