# Point Mutations
# A mutation is simply a mistake that occurs during the creation or copying of a
# nucleic acid, in particular DNA. Because nucleic acids are vital to cellular
# functions, mutations tend to cause a ripple effect throughout the cell. Although
# mutations are technically mistakes, a very rare mutation may equip the cell with
# a beneficial attribute. In fact, the macro effects of evolution are attributable
# by the accumulated result of beneficial microscopic mutations over many generations.
#
# The simplest and most common type of nucleic acid mutation is a point mutation,
# which replaces one base with another at a single nucleotide.
#
# By counting the number of differences between two homologous DNA strands taken
# from different genomes with a common ancestor, we get a measure of the minimum
# number of point mutations that could have occurred on the evolutionary path
# between the two strands.
#
# This is called the 'Hamming distance'
#
# GAGCCTACTAACGGGAT
# CATCGTAATGACGGCCT
# ^ ^ ^  ^ ^    ^^
# The Hamming distance between these two DNA strands is 7.
#
# Write a program that can calculate the Hamming difference between two DNA strands.
#
# Source
# The Calculating Point Mutations problem at Rosalind

# Linna's solution

def point_mutations(string1, string2)
  difference = 0

  string1.chars.each_with_index do |letter, index|
  if letter != string2[index]
    difference += 1
  end
end

puts "The hamming disctance between #{string1} and #{ string2} is #{difference}"
end

point_mutations("GAGCCTACTAACGGGAT", "CATCGTAATGACGGCCT")














class DNA
  def initialize(sequence)
    @sequence = sequence
  end

  def hamming_distance(new_sequence)
    result = 0
    minimum_length(@sequence, new_sequence).times do |i|
      result += 1 unless nucleotide_matches?(i, new_sequence)
    end
    result
  end

  private

  def minimum_length(s1, s2)
    [s1.length, s2.length].min
  end

  def nucleotide_matches?(i, new_sequence)
    @sequence[i] == new_sequence[i]
  end
end
