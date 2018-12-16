// Create a program that models a simple >> subway system.

// The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and >> prints the journey and the >> total number of stops for the trip in the console:

// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.

// // console.log() shows output similar to this:
// // "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."

// There are 3 subway lines:
// The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
// The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.

// All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
// Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.

// Hints:
// Work out how you would do it on paper first! Then start to explain that process in Javascript.
// Get the program to work for a single line before trying to tackle multiple lines.

// Don't worry about prompting the user for input. Hard code some values to get it working. You can use prompt() later to make it more interactive.

// Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// The key to the lab is finding the index positions of each stop. (hint: indexOf())

// Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)


///// naming correctly is bloody important /////////////////////////////////////////////////////////////

const subwaySystem = [

    { lineName: 'N', stops: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'] },
    { lineName: 'L', stops: ['8th', '6th', 'Union Square', '3rd', '1st'] },
    { lineName: '6', stops: ['Grand Central', '33rd', '28th', '23rd', "Union Square", 'Astor Place'] }

];

function findLine(lineName) { 
    for (let i = 0; i < subwaySystem.length; i++) {
        if (subwaySystem[i].lineName === lineName) {
            return subwaySystem[i];
        }
    } // line = subwaySystem[i]
}

function moveForward(line, start, stop, tripStops) {
    for (let i = line.stops.indexOf(start) + 1; i <= line.stops.indexOf(stop); i++) {
        tripStops.push(line.stops[i]);
    }
}

function moveBackward(line, start, stop, tripStops) {
    for (let i = line.stops.indexOf(start) - 1; i >= line.stops.indexOf(stop); i--) {
        tripStops.push(line.stops[i]);
    }
}


function moveOnOneLine(lineName, start, stop) {
    let tripStops = [];
    let totalStops;

    const line = findLine(lineName);
    if (line.stops.indexOf(start) < line.stops.indexOf(stop)) {
        moveForward(line, start, stop, tripStops);
    } else {
        moveBackward(line, start, stop, tripStops);
    }

    totalStops = tripStops.length;
    return { tripStops, totalStops };
}


function playTrip(startLine, startStop, endLine, endStop) {

    let message;

    if (startLine === endLine) {
        const moveOnOneLineResult = moveOnOneLine(startLine, startStop, endLine);
        message = `You must travel through the following stops on the ${startLine} line: ${moveOnOneLineResult.tripStops.join(', ')}. ${moveOnOneLineResult.totalStops} stops in total.`;

    }

    else {
        const moveOnFirstLine = moveOnOneLine(startLine, startStop, 'Union Square');
        const moveOnSecondLine = moveOnOneLine(endLine, 'Union Square', endStop);
        const total = moveOnFirstLine.totalStops + moveOnSecondLine.totalStops;
        message = `You must travel through the following stops on the ${startLine} line: ${moveOnFirstLine.tripStops.join(', ')}. Change at Union Square. Your journey continues through the following stops: ${moveOnSecondLine.tripStops.join(', ')}. ${total} stops in total.`;
    }

    return message;
}


// console.log(playTrip('L', '8th', 'N', 'Times Square'));
// console.log(playTrip('L', '8th', 'N', '34th'));
// console.log(playTrip('6', '33rd', 'L', '6th'));

// console.log(playTrip('N', '34th', '6', 'Astor Place'));
// console.log(playTrip('N', 'Times Square', '6', '33rd'));
//console.log(playTrip('L', '6th', 'L', '1st'));
// console.log(playTrip('N', 'Times Square', 'N', '8th'));
//console.log(playTrip('L', 'Union Square', 'L', '1rd'));
// console.log(playTrip('6', '33rd', '6', 'Astor Place'));
//console.log(playTrip('6', '33rd', '6', 'Union Square'));

// console.log(playTrip('L', '8th', '6', 'Astor Place'));

// console.log(moveOnOneLine('6', 'Grand Central', 'Astor Place'));
// console.log(moveOnOneLine('6', 'Astor Place', 'Grand Central'));
// console.log(moveOnOneLine('6', 'Union Square', '33rd'));
// console.log(moveOnOneLine('6', '33rd', 'Union Square'));

