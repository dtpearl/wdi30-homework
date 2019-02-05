
def calchammingdist(strand1,strand2)
  dna1 = strand1.split("")
  dna2 = strand2.split("")
# puts dna1
  # dna1.each do |value|
  #   # is_nuecleotode = false
  #   puts value
  #   # dna2.each do |key1, value1|
  #   #   if letter == key
  #   #     bases[key] += 1
  #   #     is_nuecleotode = true
  #   #   end
  #   # end
  #
  # end
# strand1.chars.each_with_index do |letter, index|
#   if dna1[i] != dna2[index]
#     hammingdist += 1
#   end
# end
  i = 0
  hammingdist = 0
  while(i < dna1.size-1)
    if dna1[i] != dna2[i]
      hammingdist += 1
    end
    i += 1
  end
  hammingdist
end
puts calchammingdist("GAGCCTACTAACGGGAT","CATCGTAATGACGGCCT")
