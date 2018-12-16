
/* MTA
 *
 * The program takes the line and stop that a user is getting on at and the line
 * and stop that user is getting off at and prints the journey and the total
 * number of stops for the trip in the console.
 *
 * There are 3 subway lines:
 * - The N line has the following stops: Times Square, 34th, 28th, 23rd,
 *   Union Square, and 8th
 * - The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
 * - The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd,
 *   Union Square, and Astor Place.
 * - All 3 subway lines intersect at Union Square, but there are no other
 *   intersection points. (For example, this means the 28th stop on the N line
 *   is different than the 28th street stop on the 6 line, so you'll have to
 *   differentiate this when you name your stops in the arrays.)
 * - Tell the user the number of stops AND the stops IN ORDER that they will
 *   pass through or change at.
 */

const subway = {
  N: {
    "Times Square": ["N"],
    "34th St": ["N"],
    "28th St": ["N"],
    "23rd St": ["N"],
    "Union Square": ["N", "L", "6"],
    "8th St": ["N"]
  },
  L: {
    "8th Ave": ["L"],
    "6th Ave": ["L"],
    "Union Square": ["N", "L", "6"],
    "3rd Ave": ["L"],
    "1st Ave": ["L"]
  },
  6: {
    "Grand Central": ["6"],
    "33rd St": ["6"],
    "28th St": ["6"],
    "23rd St": ["6"],
    "Union Square": ["N", "L", "6"],
    "Astor Place": ["6"]
  }
};


const trip = {
  stops: [],
  lines: [],
  journey: function() {
    // Output number of stops
    console.log(`Stops: ${ this.stops.length }`);
    for (var i = 0; i < this.stops.length; i++) {
      // journey is commencing
      if (i==0) {
        console.log(`Start: ${ this.stops[i] }, Line ${ this.lines[i] }`);
      // tranfer
      } else if (this.lines[i] == 'transfer') {
        console.log(`Transfer: ${ this.stops[i] }, from Line ${ this.lines[i+1] } to Line ${ this.lines[i-1] }`);
      // journey is ending
    } else if (i === this.stops.length -1) {
        console.log(`Journey complete: ${ this.stops[i] }, Line ${ this.lines[i-1] }`);
      // passing through stop
      } else {
        console.log(`pass through: ${ this.stops[i] }, Line ${ this.lines[i] }`)
      }
    }
  }
}

// input of stop array and required stops. Outputs array in order of start to finish
const stopsDirection = function (stops, stopA, stopB) {
  // Get index stop on its subway line
  const stopAIndex = stops.indexOf(stopA);
  const stopBIndex = stops.indexOf(stopB);

  // index comparision to check if need to reverse array
  if (stopAIndex < stopBIndex) {
    stops = stops.slice(stopAIndex, stopBIndex + 1);
  } else {
    stops = stops.slice(stopBIndex, stopAIndex + 1).reverse();
  }
  return stops
}

// Control function to main inputs
const tripPlanner = function(lineA, stopA, lineB, stopB) {

  // Get array of start subway line
  const stopsA = Object.keys(subway[lineA]);

  // Get array of end subway line
  const stopsB = Object.keys(subway[lineB]);

  // Declare variables to be used in if block
  let nStops, arrLines;


  // - Can add check if station is on same line

  // Check of same line
  if (lineA === lineB) {

    // return function to get array of stop in correct order from start to finish
    trip.stops = stopsDirection(stopsA, stopA, stopB);

    // create array of line which will be travelled
    trip.lines = Array(trip.stops.length).fill(lineA);

  } else {

    // Run though line and get array of possible stops with connection stops to
    // required line
    let connStops = []
    for (let key in subway[lineA]) {
      // Check if required line connects at each station and add to array if so
      if (subway[lineA][key].includes(lineB)) {
        connStops.push(key);
      }
    }

    // From here only a two part trip is allowed
    const connStop = connStops[0]

    // Get stops from start to connection
    arrStopsA = stopsDirection(stopsA, stopA, connStop);

    // Create array and fill with line travelled
    arrLinesA = Array(arrStopsA.length).fill(lineA);

    // Add "transfer" to the end of the array
    arrLinesA[arrLinesA.length-1] = "transfer";

    // Get stops from connection to end of trip
    arrStopsB = stopsDirection(stopsB, connStop, stopB);

    // Create array and fill with line travelled
    arrLinesB = Array(arrStopsB.length).fill(lineB);

    // Add stops and lines arrays to trip object
    trip.stops = arrStopsA.concat(arrStopsB);
    trip.lines = arrLinesA.concat(arrLinesB);

    // Run trip function to output journey
    changeIndex = trip.stops.indexOf(connStop);

  }

  // Outputs trip journey
  trip.journey();

}

// Test cases
tripPlanner("N", "Times Square", "N", "Union Square");
console.log('-----------------------------');
tripPlanner("N", "Union Square", "N", "Times Square");
console.log('-----------------------------');
tripPlanner("N", "Times Square", "6", "Grand Central");
console.log('-----------------------------');
tripPlanner("6", "Grand Central", "N", "Times Square");
console.log('-----------------------------');
tripPlanner("L", "8th Ave", "6", "Grand Central");
console.log('-----------------------------');
tripPlanner("6", "Grand Central", "L", "8th Ave");
console.log('-----------------------------');
tripPlanner("L", "8th Ave", "N", "Times Square");
console.log('-----------------------------');
tripPlanner("N", "Times Square", "L", "8th Ave");
