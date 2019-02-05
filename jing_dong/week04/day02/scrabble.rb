=begin
Scrabble Score
Write a program that, given a word, computes the scrabble score for that word.

scrabble("cabbage")
# => 14
Your program should be in a file named scrabble.rb. You should be able to
compute the score for any word entered by the user.

Letter Values
Letter                           Value
A, E, I, O, U, L, N, R, S, T       1
D, G                               2
B, C, M, P                         3
F, H, V, W, Y                      4
K                                  5
J, X                               8
Q, Z                               10
Extensions
You can play a :double or a :triple letter.
You can play a :double or a :triple word.
=end

require 'pry'

def scrabble word
  letter_value = {
    'A' => 1,
    'E' => 1,
    'I' => 1,
    'O' => 1,
    'U' => 1,
    'L' => 1,
    'N' => 1,
    'R' => 1,
    'S' => 1,
    'D' => 2,
    'G' => 2,
    'B' => 3,
    'C' => 3,
    'M' => 3,
    'P' => 3,
    'F' => 4,
    'H' => 4,
    'V' => 4,
    'W' => 4,
    'Y' => 4,
    'K' => 5,
    'J' => 8,
    'X' => 8,
    'Q' => 10,
    'Z' => 10
  }
  score = 0

  word.upcase.split("").each do |letter|
    letter_value.each do |key, value|
      score += value  if key.include?(letter)
    end
  end
    score
end

print "Enter your word: "
input = gets.chomp

output = scrabble input
puts "your word #{input}'s score is #{output}"
# puts scrabble "cabbage"
# puts scrabble "word"
