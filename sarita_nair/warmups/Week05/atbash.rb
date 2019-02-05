class Atbash
  def initialize(input)
    @word = input.downcase
    @alphabet = ('a'..'z').to_a
    @reverse = ('a'..'z').reverse
  end
  def encode
    message = ''

    @word.each_char do |letter|
      index = @alphabet.index[letter]
      cipher_character = @reverse[index]
      message << cipher_character
    end
    message
  end
end

puts "What your secret word?"
word = gets.chomp

cipher = Atbash.new(word)
puts cipher.encode

# def encoding(word)
# a1 = ("a".."z").to_a.join()
# a2 = a1.reverse.split("")
# wordarr = word.split("")
# # a3 = a2.split("")
# # puts a1
# # puts a2
#
# i = 0
# j = 0
# decode = ""
# a1.chars.each_with_index do |letter, index|
#   if letter == wordarr[j]
#     puts a2[index]
#     j += 1
#
#   end
#   # if i == index
#   #   if wordarr[j] == letter
#   #   puts a2[index]
#   #   j += 1
#   #   end
#   #   # puts "#{letter} = #{a2[index]}"
#   # end
# end
# puts j
# decode
# end
#
# puts encoding("test")
