# require 'pry'
$lab = {
"l"=> ['8th', '6th', 'Union Square', '3rd', '1st'],
"n"=> ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
"6"=> ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'],
}
# binding.pry

def firstWay (firstLine, firstStop)
  trip=[];
  indexOfUnionSquare =$lab[firstLine].index("Union Square")
  indexFirstStation =$lab[firstLine].index(firstStop)
  amountOfStopfirst=-1;
  if indexOfUnionSquare>indexFirstStation
    amountOfStopfirst=indexOfUnionSquare-indexFirstStation
    i=0
    while i <= amountOfStopfirst
      trip.push($lab[firstLine][i])
      i+=1
    end
  else
    amountOfStopfirst=indexFirstStation-indexOfUnionSquare;
    i = indexFirstStation
    while i >= amountOfStopfirst
      trip.push($lab[firstLine][i])
      i-=1
    end
  end

  puts "You must travel through the following stops on the #{firstLine} line: #{trip}"
  return amountOfStopfirst
end
def lastWay (lastLine, lastStop)
  trip=[];
  indexOfUnionSquare =$lab[lastLine].index("Union Square")
  indexLastStation =$lab[lastLine].index(lastStop)
  amountOfStopsecond=-1
  if indexOfUnionSquare>indexLastStation
    amountOfStopsecond=indexOfUnionSquare-indexLastStation
    i = indexOfUnionSquare-1
    while i >= indexLastStation
      trip.push($lab[lastLine][i])
      i-=1
    end
   else
    amountOfStopsecond=indexLastStation-indexOfUnionSquare
    i = indexOfUnionSquare+1
    while
      i <= indexLastStation
      trip.push($lab[lastLine][i])
      i+=1
    end
  end
  puts "You must travel through the following stops on the #{lastLine} line: #{trip}"
  return amountOfStopsecond
end

def planTrip (firstLine, firstStop, lastLine, lastStop)
  amountOfStopfirst=firstWay(firstLine, firstStop)
  amountOfStopsecond=lastWay(lastLine, lastStop)
  amountOfStop=amountOfStopfirst+amountOfStopsecond;
  if firstLine!=lastLine
    puts "Change at Union Square."
  end
  puts "#{amountOfStop} stops in total."
  return amountOfStop
end

planTrip("l","8th","l","1st")
planTrip("l","8th","6","Astor Place")

planTrip("n","Times Square","6","Grand Central")
