# subway = Hash.new()
require 'pry'
$subway = {
                    "N" => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
                    "L" => ["8th", "6th", "Union Square", "3rd", "1st"],
                    "6" => ["Grand Central", "33rd", "28th", "23rd", "Union Square","Astor Place"]
                  }
# subway.merge()
# subway.merge()
# subway = ({:6 => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]})
$intersect = "Union Square"
$stops = 0
$line1StrIndex = 0
$line1DestIndex = 0
$line2StrIndex = 0
$line2DestIndex = 0
result = ''
def traverseFwd(line1StrIndex,line1DestIndex,arrLine)
  # for(let i = line1StrIndex; i <= line1DestIndex ; i++)
  # {
  #   result += `${arrLine[i]}\n`;
  #   stops++;
  # }
  i = line1StrIndex
  while(i <= line1DestIndex)
    puts "#{arrLine[i]}"
    $stops += 1
    i += 1
  end
end
def traverseRvs(line1StrIndex,line1DestIndex,arrline)
  # for(let i = line1StrIndex; i >= line1DestIndex ; i--)
  # {
  #   result += `${arrline[i]}\n`;
  #   stops++;
  # }
  i = line1StrIndex
  while i >= line1DestIndex
    puts "#{arrline[i]}"
    $stops += 1
    i -= 1
  end
end
def getRouteOneDetails(line1)
  if $line1StrIndex > $line1DestIndex
    #reverse
    traverseRvs($line1StrIndex-1,$line1DestIndex,$subway[line1])
  else
    #normal
    traverseFwd($line1StrIndex+1,$line1DestIndex,$subway[line1])
  end
end
def getRouteTwoDetails(line2)
  puts "Change at #{$intersect}"
  puts "Your journey continues through the following stops in #{line2} line:"
  if $line2StrIndex > $line2DestIndex
    #reverse
    traverseRvs($line2StrIndex-1,$line2DestIndex,$subway[line2])
  else
    #normal
    traverseFwd($line2StrIndex+1,$line2DestIndex,$subway[line2])
  end
end

def getLine(line1,route1,line2,route2)

  $line1StrIndex = $subway[line1].index(route1)
  $line1DestIndex = $subway[line1].index($intersect)
  $line2StrIndex = $subway[line2].index($intersect)
  $line2DestIndex = $subway[line2].index(route2)
  if line1 == line2
    $line1DestIndex = $line2DestIndex;
  end
  puts "You must travel through the following stops on the #{line1} line:"

  getRouteOneDetails(line1);

  if line1 != line2
    getRouteTwoDetails(line2);
  end
  puts "Total #{$stops} stops in all."
end

def valLines(line)
  # binding.pry
  if $subway[line] == nil
    puts "Line #{line} does not exist."
  else
    return true;
  end
end
def valRoutes(line,route)
  if $subway[line].index(route) == nil
    puts "The route #{route} does not exist is Line #{line}."
  else
    return true;
  end
end

def callfunctionSubway
  print("Please Enter your boarding line: ")
  strLine = gets.chomp.upcase
  valresult = valLines(strLine)
  if valresult == true
    print("Please Enter your boarding point: ")
    strpoint = gets.chomp.capitalize
    valresult = valRoutes(strLine,strpoint)
    if valresult == true
      print("Please Enter your destination line: ")
      destLine = gets.chomp.upcase
      valresult = valLines(destLine)
      if valresult == true
        print("Please Enter your destination point: ")
        destpoint = gets.chomp.capitalize
        valresult = valRoutes(destLine,destpoint)
          if valresult == true
            getLine(strLine,strpoint,destLine,destpoint)
          end
      end
          #console.log(`${getLine(String(StrLine),String(Strpoint),String(DestLine),String(Destpoint))}`);
    end
    end
  end
 # binding.pry
puts $subway

callfunctionSubway
