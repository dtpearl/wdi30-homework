# Scrabble Score
# Write a program that, given a word, computes the scrabble score for that word.

#word score variable
$COUNT = 0

#Takes user input
"Enter Word: "; input = gets.chomp.upcase

#data for possible letters and their values
LETTERS = {
1  => /A|E|I|O|U|L|N|R|S|T/,
2  => /D|G/,
3  => /B|C|M|P/,
4  => /H|V|W|Y/,
5  => /K/,
8  => /J|X/,
10 => /Q|Z/
}

#check if each letter of the word matches with the letters in the hash, if it does add the value to count
input.each_char { |c| LETTERS.each { |key, value| if c.match? value then $COUNT += 1 end} };

#print count
puts "Word score is #{$COUNT}"
