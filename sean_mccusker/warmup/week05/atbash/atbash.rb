# Atbash Cipher
#
# The Atbash cipher is a simple substitution cipher that relies on transposing all
# the letters in the alphabet such that the resulting alphabet is backwards. The
# first letter is replaced with the last letter, the second with the second-last,
# and so on.
#
# An Atbash cipher for the Latin alphabet would be as follows:
#
# Plain:  abcdefghijklmnopqrstuvwxyz
# Cipher: zyxwvutsrqponmlkjihgfedcba
#
# It is a very weak cipher because it only has one possible key, and it is a simple
# monoalphabetic substitution cipher. However, this may not have been an issue in
# the cipher's time.
#
# In Ruby, write a program which seeks a user's input, and encodes/decodes the input.
#
# Examples
#
# Encoding "test" gives "gvhg"
# Decoding "gvhg" gives "test"


# Linna's Solution

class Atbash

  def initialize (input)
    @word = input.downcase
    @alphabet = ("a".."z").to_a
    @reverse = @alphabet.reverse
  end

  def encode
    message = ''

    @word.each_char do |letter|
      index = @alphabet.index(letter)
      cipher_character = @reverse[index]
      message << cipher_character
    end

    message

  end
end

puts "What's your secret word?"
word = gets.chomp

cipher = Atbash.new(word)
puts cipher.encode

# class Atbash
#   # Create an initialize method. This will be called whenever the .new  method is called on the Atbash class.
#   # Since I want to pass in a word to be en/coded when I instantiate a new Atbash object, my initialize method also needs to accept an argument (whatever gets passed in when I call Atbash.new()).
#   def initialize(input)
#     # My initialize method is going to set up all the instance variables I'll need in my encode method.
#     @word = input.downcase
#     # Create a new range of all the characters between "a" to "z" and then convert that to an array.
#     @alphabet = ("a".."z").to_a
#     # Create another array that is just the reverse alphabet array.
#     @reverse = @alphabet.reverse
#   end
#
# def encode
#   message = ""
#   @word.each_char do |letter|
#   index = @alphabet.index(c)
# end
#
# @word.each_char do |letter|
#
#       #find where each letter appears in the normal alphabet
#       index = @alphabet.index(letter)
#
#       #use that index on the reverse alphabet
#       cipher_character = @reverse[index]
#
#       #build out the message adding all of the individual letters together
#       message << cipher_character
#     end #loop
#
#     message
#   end
# end
#
#
# puts "What's your secret word?"
# word = gets.chomp
#
# cipher = Atbash.new(word)
# puts cipher.encode
