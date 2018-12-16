// define the train lines and the stops in arrays/objects/both
// count and log each stop
//
// work out what happens when someone gets to union square
// first step: get it working for just one line, then worry about line changes

// N Line only

const lineNStations = ["Times Square", "34th", "28th", "N-23rd", "Union Square", "8th"]; // array for Line N stations
let stops = [];   // empty array to add and print the stops

let planTrip = function(hopOnLine, hopOnStation, hopOffLine, hopOffStation) {

  let hopOnIndex = (lineNStations.indexOf("hopOnStation"));  // define index of hop on station
  let hopOffIndex = (lineNStations.indexOf("hopOffStation")); // define index of hop off statioin

    if (hopOffIndex > hopOnIndex) {    // train is going east
      let nextStop;
      for (nextStop = hopOnIndex; nextStop <= hopOffIndex; nextStop++) {  // make the train go to the next stop
          stops.unshift(lineNStations.indexOf(this));    // add first stop to beginnng of the stops array
}
      for (nextStop = hopOnIndex; nextStop >= hopOffIndex; nextStop--) {   // train is going west, make it go to the next stops
          stops.unshift(lineNStations.indexOf(this)); // add first stop to beginnng of the stops array
      }

}
return (`You must travel through the following stops on the N line: ${ stops }.`)
}








// if lineNStations.indexOf(hopOffStation) > lineNStations.indexOf(hopOnStation)  // decides direction of travel
