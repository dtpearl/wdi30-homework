console.log("COPY FOR JOHN\n------------\n\n\n\n");

/*

The program takes the line and stop that a user is getting on at and the line and
stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:

planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.

// console.log() shows output similar to this:
// "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// "Change at Union Square."
// "Your journey continues through the following stops: 23rd, 28th, 33rd."
// "7 stops in total."

There are 3 subway lines:
The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.

All 3 subway lines intersect at Union Square, but there are no other intersection points.
(For example, this means the 28th stop on the N line is different than the 28th street
stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)

Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.

*/


const intersection = 'Union Square';

const nySubWay = {
  n: ['Times Square', '34th', '28th', '23rd', intersection, '8th'],
  l: ['8th', '6th', intersection, '3rd', '1st'],
  six: ['Grand Central', '33rd', '28th', '23rd', intersection, 'Astor Place'],
};

const n = nySubWay.n;
const l = nySubWay.l;
const six = nySubWay.six;

const noChange = function (lineA, hopOn, hopOff) {
  let stopA = lineA.indexOf( hopOn ) + 1;
  let stopB = lineA.indexOf( hopOff ) + 1;
  let tripStops = lineA.slice( stopA, stopB );
  let newArray = [];
  for (let i = 0; i < tripStops.length; i++) {
    newArray.push( tripStops[ i ] );
  };
  let numberOfStops = newArray.length;
  console.log(`You must travel through the following stops: ${ newArray.join(", ") }.`);
  console.log(`${ numberOfStops } stops in total.`)
};

const changeLine = function (lineA, hopOn, lineB, hopOff) {
  let stopA = lineA.indexOf( hopOn ) + 1;
  let stopB = lineB.indexOf( hopOff ) + 1;
  let tripStopsA = lineA.slice( stopA, lineA.indexOf( intersection ) + 1 );
  let tripStopsB = lineB.slice( lineB.indexOf( intersection ), stopB );
  let newArrayA = [];
  let newArrayB = [];
  for (let i = 0; i < tripStopsA.length; i++) {
    newArrayA.push( tripStopsA[ i ] );
  };
  for (let i = 0; i < tripStopsB.length; i++) {
    newArrayB.push( tripStopsB[ i ] );
  }
  let newArrayC = newArrayB.slice( 1 );
  const numberOfStops = newArrayA.length + newArrayB.length - 1;
  console.log(`You must travel through the following stops: ${ newArrayA.join(", ") }`);
  console.log(`Change at Union Square and continue through the following stops: ${ newArrayC.join(", ") }.`);
  console.log(`${ numberOfStops } stops in total.`);
};

const tripPlanner = function ( lineA, hopOn, lineB, hopOff ) {
    if ( lineA !== lineB ) {
    return changeLine (lineA, hopOn, lineB, hopOff);
  } if ( lineA.indexOf( hopOn ) > lineA.indexOf( hopOff ) ) {
    return noChange( lineA.reverse(), honOn, hopOff );
  } if (lineA.indexOf( hopOn ) > lineA.indexOf( intersection ) && lineB.indexOf( intersection ) > lineB.indexOf( hopOff )) {
    return (lineA.reverse(), hopOn, lineB.reverse(), hopOff);
  } if (lineB.indexOf( hopOff ) < lineB.indexOf( intersection )) {
    return changeLine( lineA, hopOn, lineB.reverse(), hopOff );
  } else {
    return noChange(lineA, hopOn, hopOff);
  }
};

// tripPlanner(n, 'Times Square', l, '1st');
tripPlanner(n, 'Times Square', six, 'Grand Central');
