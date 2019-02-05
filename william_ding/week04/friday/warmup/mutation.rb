def mutations()
  print "Enter first DNA string: "
  dna1 = gets.chomp.upcase
  print "Enter second DNA string: "
  dna2 = gets.chomp.upcase
  distance = 0

  dna1.each_char.with_index do |c, i|
    distance += 1 if dna2[i] != c
  end
  puts "The hamming distance is #{distance}."
end

mutations
