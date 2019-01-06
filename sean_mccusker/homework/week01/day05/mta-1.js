/*

MTA Lab

Objectives:

Apply your knowledge of Javascript to solve a real world problem.
Get really good at array manipulation.

Activity
Create a program that models a simple subway system.

The program takes the line and stop that a user is getting on at and the line
and stop that user is getting off at and prints the journey and the total number
of stops for the trip in the console:

planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.

console.log() shows output similar to this:
"You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
"Change at Union Square."
"Your journey continues through the following stops: 23rd, 28th, 33rd."
"7 stops in total."

There are 3 subway lines:
The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th

The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st

The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square,
and Astor Place.

All 3 subway lines intersect at Union Square, but there are no other intersection
points. (For example, this means the 28th stop on the N line is different than
the 28th street stop on the 6 line, so you'll have to differentiate this when
you name your stops in the arrays.)

Tell the user the number of stops AND the stops IN ORDER that they will pass
through or change at.

Hints:
Work out how you would do it on paper first! Then start to explain that process
in Javascript.

Get the program to work for a single line before trying to tackle multiple lines.
Don't worry about prompting the user for input. Hard code some values to get it
working. You can use prompt() later to make it more interactive.

Consider diagramming the lines by sketching out the subway lines and their stops
and intersection.

The key to the lab is finding the index positions of each stop. (hint: indexOf())
Make sure the stops that are the same for different lines have different names
(i.e. 23rd on the N and on the 6 need to be differentiated)

*/

// console.log(`Is there anybody out there`);

// lineN = ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'];
// lineL = ['8th', '6th', 'Union Square', '3rd', '1st'];
// line6 = ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'];



const mta = {
  'N': ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
  'L': ['8th', '6th', 'Union Square', '3rd', '1st'],
  '6': ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
}


const planTrip = function( lineOne, stationStart, lineTwo, stationEnd ) {

  // Below validates if the lines exist in the mta system.
  let validLine = [];
  for ( value in mta ){
    validLine.push( value );   // Returns an array of lines
  };
  if (validLine.indexOf( lineOne ) === -1 ){
    return `Fuhgettaboutit, not a valid starting point.`;
  };
  if (validLine.indexOf( lineTwo ) === -1 ){
    return `Fuhgettaboutit, not a valid termination point.`;
  };

  /* Code below checks to see if rider is on the same line for their origin and
  desired destination. As well as, if they are already at their destination. */
  if ( lineOne === lineTwo && stationStart === stationEnd ) {
    return `Hey momo, you are where you want to be!`
  }

// For our traveller that does not need to transfer. Origin and destination is on the same line.
  if (lineOne === lineTwo){
    let getLine = mta[ lineOne ];   // Returns an array of a given line.
    let startIndex = mta[ lineOne ].indexOf( stationStart );
    if ( startIndex === -1 ) {
      return `Fuhgettaboutit, not a valid starting point.`;
    };
    let endIndex = mta[ lineOne ].indexOf( stationEnd );
    if ( endIndex === -1 ) {
      return `Fuhgettaboutit, not a valid termination point.`;
    };
    let stops = startIndex - endIndex;
    let stopNames = [];
    if ( stops < 0 ){  // If trip is moving forward.
      stops = stops * ( -1 );
      stopNames = getLine.slice( startIndex + 1, endIndex + 1 ).join(', ');
    } else {  // The end stops is a negative number.
      stopNames = getLine.slice( endIndex, startIndex ).reverse().join(', ');
    }   // The end stops is a positive number.
    return `Your travels on the ${ lineOne } line, from ${ stationStart } to ${ stationEnd } is through the following stops: ${ stopNames }.  There are ${ stops } stops.`;

  } else {
    // For the portion of the trip that needs to make a transfer at Union Square
    let getLineOne = mta[ lineOne ];  // This returns an array of stops that our traveller encounters on lineOne
    let startIndex = mta[ lineOne ].indexOf( stationStart );
    if (startIndex === -1) {
      return `Fuhgettaboutit, not a valid starting point.`;
    };
    let stopsToUnion = startIndex - mta[ lineOne ].indexOf( 'Union Square' );
    let stopsToUnionArray = [];
    if ( stopsToUnion < 0 ){  // These are negative stops going forward.
      stopsToUnion = stopsToUnion * ( -1) ;
      stopsToUnionArray = getLineOne.slice( startIndex + 1, mta[ lineOne ].indexOf( 'Union Square' ) +1).join(', ');
    } else {    // Positive stops going in reverse.
      stopsToUnionArray = getLineOne.slice( mta[lineOne].indexOf( 'Union Square' ), startIndex).reverse().join(', ');
    }
    // This is the portion of the trip after the ttransfer is made at Union Square
    let getLineTwo = mta[ lineTwo ];  // This is the array of stops our traveller encunters on lineTwo
    let endIndex = mta[ lineTwo ].indexOf( stationEnd );
    if ( endIndex === -1 ) {
      return `Fuhgettaboutit, not a valid termination point.`;
    };
    let stopsFromUnion = mta[ lineTwo ].indexOf( 'Union Square' ) - endIndex;
    let stopsFromUnionArray = [];
    if ( stopsFromUnion < 0 ){  // This is for negative stops, going forward
      stopsFromUnion = stopsFromUnion * ( -1 );
      stopsFromUnionArray = getLineTwo.slice(mta[ lineTwo ].indexOf( 'Union Square' ) +1, endIndex +1).join(', ');
    } else {    // This is for positive stops, going backwards
      stopsFromUnionArray = getLineTwo.slice( endIndex, mta[ lineTwo ].indexOf( 'Union Square' )).reverse().join(', ');
    }

    return `You must travel through the following stops on the ${ lineOne } line: ${ stopsToUnionArray }. Change at Union Square. Your journey continues through the following stops: ${ stopsFromUnionArray }. There are ${ stopsToUnion + stopsFromUnion } stops in total.`;
  }
};

console.log(planTrip('N', 'Times Square', '6', '33rd'));
console.log(planTrip('L', '3rd', '6', 'Central Perk'));
console.log(planTrip('N', 'Times Square', 'N', 'Times Square'));
console.log(planTrip('O', 'Times Square', 'N', 'Times Square'));
console.log(planTrip('6', 'Grand Central', 'L', '1st'));
