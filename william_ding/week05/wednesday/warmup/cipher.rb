def cipher
  print "Enter a word: "
  word = gets.chomp.downcase

  print "Do you want to encode or decode? (E/D)"
  action = gets.chomp.upcase

  if action == "E"
    output = []
    word.each_char do |chr|
      index = ("a".."z").to_a.index(chr)
      output.push(("a".."z").to_a.reverse[index])
    end

  elsif action == "D"
    output = []
    word.each_char do |chr|
      index = ("a".."z").to_a.reverse.index(chr)
      output.push(("a".."z").to_a[index])
    end
  end


  puts output.join()
end

cipher
