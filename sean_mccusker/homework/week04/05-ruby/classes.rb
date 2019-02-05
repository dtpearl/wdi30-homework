require 'pry'


class Actor
  def award_speech
    "I would like to thank my parents and my agent. We did it baby"
end

  def deny_aligations
    "I deny that and I was drunk and I don't remember"
  end
end


class MarxBrother < Actor # Inherits from
  attr_accessor :name, :instrument, :vice # Macro - writes the getter and setter for you.

  def initialize(n='', i='voice', v='')
    @name = n
    @instrument = i
    @vice = v
  end

  def perform
    "My name is #{ @name } and I play the #{ @instrument }"
  end
end

class Stooge < Actor
  def terrible?
    true
  end
end

# groucho = MarxBrother.new('Groucho', 'guitar', 'vice') # Creates an instance object

binding.pry
