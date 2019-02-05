require 'pry'
def count_nucleotides input
  bases = {
    "A" => 0,
    "C" => 0,
    "T" => 0,
    "G" => 0,

  }
  dna[]
  input.upcase.chars.each do |letter|
    is_nuecleotode = false
    bases.each do |key, value|
      if letter == key
        bases[key] += 1
        is_nuecleotode = true
      end
    end
    if is_nuecleotode = false
      dna.push "#{letter} is not a nucleotide."
    end
    if bases.key? letter
      bases[key] += 1
    else
      dna.push "#{letter} is not a nucleotide."
    end

    puts bases
    puts dna
end
count_nucleotides "AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGCS"
def getDNA(dna)
d = dna.split("")
nuecleotide = ["A","C","T","G"]
# puts d
# $count = d.select{|word| d.count(word) > 1}
$count = d.group_by(&:itself).transform_values(&:count)
fil = $count.each{|word1|
  nuecleotide.each{|nue|
     return word1 != nue
    }
  }
  puts fil
end

getDNA("AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGCS")
# binding.pry
puts $count
