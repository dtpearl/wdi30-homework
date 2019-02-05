def count_nucleotides ()
  print "Enter the nucleotide string: "
  dna = gets.chomp.upcase
  count = {
    "A" => 0,
    "C" => 0,
    "G" => 0,
    "T" => 0,
    "Not" => ""
  }

  count["A"] = dna.scan(/A/).count
  count["C"] = dna.scan(/C/).count
  count["G"] = dna.scan(/G/).count
  count["T"] = dna.scan(/T/).count
  count["Not"] += dna.delete("A").delete("C").delete("G").delete("T")

  puts "A: #{count["A"]}"
  puts "C: #{count["C"]}"
  puts "G: #{count["G"]}"
  puts "T: #{count["T"]}"
  puts "These are not DNA nucleotides: #{count["Not"]}" if count["Not"].size != 0
end

count_nucleotides
