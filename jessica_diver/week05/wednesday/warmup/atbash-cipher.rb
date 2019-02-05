class Atbash

  def initialize input
    @word = input.downcase
    @alphabet = ('a'..'z').to_a
    @reverse = @alphabet.reverse
  end

  def encode
    output = ""
    @word.each_char do |letter|
      index = @alphabet.index(letter)
      cipher_character = @reverse[index]
      output << cipher_character
    end
    output
  end

end

puts "What's your secret word?"
word = gets.chomp

cipher = Atbash.new(word)
puts cipher.encode
