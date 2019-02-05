/*
Activity
Create a program that models a simple subway system.

The program takes the line and stop that a user is getting on
at and the line and stop that user is getting off at and prints the journey
and the total number of stops for the trip in the console:

planTrip('N', 'Times Square', '6', '33rd');

// This is only a suggested function
name and signature.

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
(For example, this means the 28th stop on the N line is different than the
  28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
*/
/* var mta = {
    lineN: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    lineL: ["8th", "6th", "Union Square", "3rd", "1st"],
    line6: ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
};

//var planTrip = function(startStation,startLine,endStation,endLine)

//checks if stop and station is valid - to return
var correctStop = function(stopNum, line) {
    if (mta[line].indexOf(stopNum) === -1) {
        return false;
    } else {
        return true;
    }
};


var correctLine = function(line) {
    if (mta[line] === undefined) {
        return false;
    } else {
        return true;
    }
};

// I need a plan trip function.
// Given the array, figure out how to get from one stop to another.

var direction = function(firstStop, lastStop, line) {
        if (mta[line].indexOf(firstStop) <= mta[line].indexOf(lastStop)) {
            return true;
        } else {
            return false;
        }
    }
    //push trip stops to new array to output info
var tripStops = function(firstStop, lastStop, line) {
    var stops = [];

    if (direction(firstStop, lastStop, line) === true) {
        for (var i = mta[line].indexOf(firstStop); i <= mta[line].indexOf(lastStop); i++) {
            stops.push(mta[line][i]);
        }
    } else {
        for (var i = mta[line].indexOf(firstStop); i >= mta[line].indexOf(lastStop); i++) {
            stops.push(mta[line][i]);
        }
    }
    return stops;
}

console.log(tripStops("34th", "28th", "lineN"));
*/
