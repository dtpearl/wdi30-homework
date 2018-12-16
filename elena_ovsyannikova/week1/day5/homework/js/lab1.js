const lab = {
"l": ['8th', '6th', 'Union Square', '3rd', '1st'],
"n": ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
"6": ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
};
// let firstLine = prompt('Please enter your line', 100);
// console.log(l[0]);

// let indexOf8thLineL=lab.l.indexOf("8th");
// let indexOf6thLineL=lab.l.indexOf("6th");
// let indexOfUnionSquareLineL=lab.l.indexOf("Union Square");
// let indexOf3rdLineL=lab.l.indexOf("3rd");
// let indexOf1stLineL=lab.l.indexOf("1st");

const firstWay = function (firstLine, firstStop) {
  let trip=[];
  const indexOfUnionSquare =lab[firstLine].indexOf("Union Square");
  const indexFirstStation =lab[firstLine].indexOf(firstStop);
  // console.log(indexOfUnionSquare);
  // console.log(indexFirstStation);
  let amountOfStopfirst=-1;
  if (indexOfUnionSquare>indexFirstStation) {
    amountOfStopfirst=indexOfUnionSquare-indexFirstStation;
    for (var i = 0; i <= amountOfStopfirst; i++) {
      trip.push(lab[firstLine][i]);
    }
  } else{
    amountOfStopfirst=indexFirstStation-indexOfUnionSquare;
    for (var i = indexFirstStation; i >= amountOfStopfirst; i--) {
      trip.push(lab[firstLine][i]);
    }
  }
  console.log(`You must travel through the following stops on the ${firstLine} line: ${trip}`);
  return amountOfStopfirst;
  // console.log(lab["firstLine"][lab.l.indexOf("firstStop")]);

}

const lastWay = function (lastLine, lastStop) {
  let trip=[];
  const indexOfUnionSquare =lab[lastLine].indexOf("Union Square");
  const indexLastStation =lab[lastLine].indexOf(lastStop);
  // console.log(indexOfUnionSquare);
  // console.log(indexFirstStation);
  let amountOfStopsecond=-1;
  if (indexOfUnionSquare>indexLastStation) {
    amountOfStopsecond=indexOfUnionSquare-indexLastStation;
    for (var i = indexOfUnionSquare+1; i >= indexLastStation; i--) {
      trip.push(lab[lastLine][i]);
    }
  } else{
    amountOfStopsecond=indexLastStation-indexOfUnionSquare;
    for (var i = indexOfUnionSquare+1; i <= indexLastStation; i++) {
      trip.push(lab[lastLine][i]);
    }
  }
  console.log(`You must travel through the following stops on the ${lastLine} line: ${trip}`);
  return amountOfStopsecond;
}

const planTrip=function(firstLine, firstStop, lastLine, lastStop){
  amountOfStopfirst=firstWay(firstLine, firstStop);
  amountOfStopsecond=lastWay(lastLine, lastStop);
  const amountOfStop=amountOfStopfirst+amountOfStopsecond;
  console.log(amountOfStopfirst);
  console.log(amountOfStopsecond);
  if (firstLine!=lastLine) console.log("Change at Union Square.");
  console.log(`${amountOfStop} stops in total.`);
  return amountOfStop;
}

planTrip("l","8th","l","1st");
planTrip("l","8th","6","Astor Place");

planTrip("n","Times Square","6","Grand Central");

 // return amountOfStop;

// if (indexOf(L[a])> indexOf(L[b]))
