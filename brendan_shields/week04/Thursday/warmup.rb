# DNA is represented by an alphabet of the following symbols: 'A', 'C', 'G', and 'T'.
#
# Each symbol represents a nucleotide, which is a fancy name for the particular molecules that happen to make up a large part of DNA.
#
# Write a program in ruby that will tell you how many times each nucleotide occurs in a string (i.e. how many times 'A', 'C', 'G' and 'T' appear in a given string).
#
# It should also tell you if a character in the string is not a valid nucleotide (i.e. NOT 'A', 'C', 'G', and 'T').
#
# Example:
#

input = "AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGCQQQQ"

NUCLEOTIDES = {
  "A" => [/A/,0],
  "C" => [/C/,0],
  "G" => [/G/,0],
  "T" => [/T/,0]
}
count = 0
@output = []

input.each_char{|c| NUCLEOTIDES.each {|key, value| if c.match? value[0] then value[1] += 1; @output.push(c); count = 1 end}};

puts "A: #{NUCLEOTIDES['A'][1]} Nucleotides"
puts "C: #{NUCLEOTIDES['C'][1]} Nucleotides"
puts "G: #{NUCLEOTIDES['G'][1]} Nucleotides"
puts "T: #{NUCLEOTIDES['T'][1]} Nucleotides"
