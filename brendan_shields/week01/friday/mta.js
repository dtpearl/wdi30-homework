////////////////// Different Line Arrays ///////////////////////////////////////

const railNetwork = {
  n: ["time square", "34th", "28th", "23rd", "union square", "8th"],
  l: ["8th", "6th", "union square", "3rd", "1st"],
  6: ["grand central", "33rd", "28th", "23rd", "union square", "astor place"],
}

////////////////// Lower Case ///////////////////////////////////////////////////

const lowerCaseArray = function(line, station) {
  return [line.toLowerCase(), station.toLowerCase()]; //OUTPUT: Returns the array as lower Case
}

////////////////// Array Factory ///////////////////////////////////////////////

const arrayFactory = function(origin, destination) {
  return [origin, destination]; //OUTPUT: Creates an array from the input.
}

////////////////boolean switch/////////////////////////////////////////////////////////

const boolean = function(line1, line2) { // checks if there is multiple or a single line being used;
  if (line1 === line2) {
    return true;
  } else {
    return false;
  }
}

/////////////////line logic ////////////////////////////////////////////////////

const single = function(arr, modifier) {
  const line = railNetwork[arr[0][0]]; //Sets a const equal to railNetwork.line
  const lineToUnion = line.indexOf('union square');
  //Sets a const equal to U SQ

  if (!modifier) { //Checks if there is a single line or double line used.
    if (line.indexOf(arr[0][1]) < line.indexOf(arr[1][1])) { //If the first lines position in the array is < the seconds
      return line.slice(line.indexOf(arr[0][1]), (line.indexOf(arr[1][1]) + 1)); //Return a slice of the line that contains all stops;
    } else { //else return the array reversed so it changes from to to;
      return line.slice(line.indexOf(arr[1][1]), line.indexOf(arr[0][1])).reverse();
    }
  } else { //If the modifier === 1 then
    if (line.indexOf(arr[1]) < lineToUnion) { //return only the slice of the line to the change point U SQ
      return line.slice(line.indexOf(arr[1]), lineToUnion + 1);
    } else {
      return line.slice(lineToUnion, line.indexOf(arr[1]) + 1).reverse(); //If the line is running backwards, reverse the array.
    }
  }
}

///////////////console.log()////////////////////////////////////////////////////

const conLog = function(output, arr) {
  console.log('               _-====-__-======-__-========-_____-============-__')
  console.log('             _(        Welcome to the New York City Metro         _)')
  console.log('          OO(   Your train is about to depart so please be seated.   )_')
  console.log(`         0  (_    Today You will be passing the following ${output.length - 2} stops. _)`)
  console.log('       o0     (_                                                 _)')
  console.log("      o         '=-___-===-_____-========-___________-===-dwb-='")
  console.log('.    o                                    _________')
  console.log('    . ______          ______________  |         |      _____')
  console.log('  _()_||__|| ________ |            |  |_________|   __||___||__')
  console.log(' (BNSF 1995| |      | |            | __Y______00_| |_         _|')
  console.log('/-OO----OO""="OO--OO"="OO--------OO"="OO-------OO"="OO-------OO"=P')
  console.log('#####################################################################')
  console.log('________________________________________________________________________')
  console.log(`| Below are the stops from ${output[0]} to ${output[output.length -1]}`)
  console.log('________________________________________________________________________')
  console.log('|'); // Function to log the input to the console.
  for (let i = 0; i < output.length; i++) {
    console.log(`|  ${output[i]}`);
    console.log('|');
  }
  console.log('________________________________________________________________________')
  console.log('| You have reached your destination, Thank you for choosing MTA.')
  console.log('________________________________________________________________________')
}

///////////////Single Line /////////////////////////////////////////////////////

const singleLine = function(sameLine, arr) { //checks if the same line is being used then initiates the function accordingly
  if (sameLine) {
    const output = single(arr);
    conLog(output, arr);
  } else {
    const output1 = single(arr[0], 1);
    const output2 = single(arr[1], 1);
    output1.push(`Change from line: ${arr[0][0]} to line: ${arr[1][0]}`);
    const output = output1.concat(output2.reverse());
    conLog(output); // outputs to Console.log funtion
  }
}

//////////////// Process User Input ////////////////////////////////////////////

const route = function(line1, start, line2, end) {
  if ((railNetwork[line1].indexOf(start) === -1) || (railNetwork[line2].indexOf(end) === -1)) {
    console.log("Please choose a valid option")
  } else { //Takes the initial input and processes it through the array functions.
    const origin = lowerCaseArray(line1, start);
    const destin = lowerCaseArray(line2, end);
    const arr = [origin, destin]; //combines the output into a single array for origin and destination
    const sameLine = boolean(origin[0], destin[0]);
    singleLine(sameLine, arr);
  }
}

//////////////// Take User Input ///////////////////////////////////////////////
 route('n', '23rd', '6', 'union square')
//  route('l', '8th', '6', '33rd')
//  route('6', 'astor place', 'n', 'time square')
// route('n', '28th', '6', 'grand central')
