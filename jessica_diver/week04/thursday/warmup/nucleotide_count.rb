# Nucleotide Count
#
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
# count_nucleotides "AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC"
# # output:
# A: 20
# C: 12
# G: 17
# T: 21

require 'Rainbow'

def count_nucleotides string
  counts = Hash.new(0)
  string.each_char { |l| counts[l] += 1}
  counts.each { |k, v| puts Rainbow("#{k}: #{v}").orange}
end

count_nucleotides "AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC"
