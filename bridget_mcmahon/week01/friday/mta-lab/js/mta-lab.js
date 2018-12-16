/*
Create a program that models a simple subway system.

The program takes the line and stop that a user is getting on at and the line
and stop that user is getting off at and prints the journey and the total
number of stops for the trip in the console.

There are 3 subway lines:
The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.

All 3 subway lines intersect at Union Square, but there are no other intersection
points. (For example, this means the 28th stop on the N line is different than the
28th street stop on the 6 line, so you'll have to differentiate this when you name
your stops in the arrays.)

Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
*/

const subwaySystem = {
  N: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"] ,
  L: ["8th", "6th", "Union Square", "3rd", "1st"],
  6: ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"],
};

const planTrip = function(startLine, startStation, endLine, endStation) {
  // variables for positions on lines travelled
  const startPosition = subwaySystem[startLine].indexOf(startStation);
  const lineOneEnd = subwaySystem[startLine].indexOf("Union Square");
  const lineTwoStart = subwaySystem[endLine].indexOf("Union Square");
  const endPosition = subwaySystem[endLine].indexOf(endStation);

  const lineOneStops = [];
  const lineTwoStops = [];
  let userMessage = "";

  const addStops = function (start, end, stops, line) {
    if ( start < end ) {
      for (let i = start + 1; i <= end; i++) {
        stops.push(subwaySystem[line][i]);
      }
    }
    if ( end < start ) {
      for (let i = start - 1; i >= end; i--) {
        stops.push(subwaySystem[line][i]);
      }
    }
  };

  if ( startLine === endLine && startStation === endStation ) {
    return "You are already at the right station."
  } else if (startPosition === -1 || endPosition === -1) {
    return "Please enter a valid station";
  // if journey is on one line ----------------------------------------
  } else if ( startLine === endLine ) {
    addStops(startPosition, endPosition, lineOneStops, startLine);
    userMessage += `You must travel through the following stops on the ${ startLine } line: ${ lineOneStops.join(', ') } \n`;
  // if you need to change stations -----------------------------------
  } else {
    addStops(startPosition, lineOneEnd, lineOneStops, startLine);
    userMessage += `You must travel through the following stops on the ${ startLine } line: ${ lineOneStops.join(', ') } \nChange stations at Union Square and get on line ${ endLine }\n`;

    // continue journey on new line
    addStops(lineTwoStart, endPosition, lineTwoStops, endLine);
    userMessage += `Your journey continues through the following stops: ${ lineTwoStops.join(', ') }\n`;
  };
  let totalStops = lineOneStops.length + lineTwoStops.length;
  userMessage += `${ totalStops } stops in total.`;
  return userMessage;
};
