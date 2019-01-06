

  var stations = [];
  var stopsTotal = 0;
  var transferIsRequired = null;

  const trainLines = {
    N: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
    L: ['8th', '6th', 'Union Square', '3rd', '1st'],
    6: ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
  };

  const tripDistance = function(lineName, lineLocs, currentLocation, endLocation) {
    const start = lineLocs.indexOf(currentLocation);
    const end = lineLocs.indexOf(endLocation);
    const distance = end - start;
    if (distance < 0) {
      for (let i=start; i>=start+distance; i--) {
        stations.push(lineLocs[i]);
      }
    } else {
      for (let i=start; i<=start+distance; i++) {
        stations.push(lineLocs[i]);
      }
    }
    return tripDescription(lineName,currentLocation,endLocation);
  }

  const tripDescription = function (startL,startSt,endSt) {
    const output = `\n\Board the ${startL} line at ${startSt} station and `
    var varOutput = `ride through`;
    var exitOrTransfter = '';
    if (transferIsRequired) {
      exitOrTransfter = 'transfer';
    } else {
      exitOrTransfter = 'exit'
    }
    for (let i=1; i < stations.length; i++) {
      if (i ==stations.length-1) {
        varOutput += ` and ${exitOrTransfter} at ${endSt} station. `
      } else {
        varOutput += ` ${trainLines[startL][i]},`
      }
    }
    stopsTotal += stations.length-1
    stations = [];
    return output + varOutput;
  }

  const tripPlanner = function (startLine, startStation, endLine, endStation) {

    // Error occurs if user tries to access non-existing value for trainLines object
    if (!Object.keys(trainLines).includes(startLine))  {
      console.log(`Please enter a valid train line. Line '${startLine}' does not exist.`)
      return;
    } else if (!Object.keys(trainLines).includes(endLine)) {
      console.log(`Please enter a valid train line. Line '${endLine}' does not exist.`)
      return;
    }

    // Let's make sure train line contains station
    if (!trainLines[startLine].includes(startStation)) {
      console.log(`Please enter a valid station. Station '${startStation}' does not exist for line ${startLine}.`)
      return;
    } else if (!trainLines[endLine].includes(endStation)) {
      console.log(`Please enter a valid station. Station '${endStation}' does not exist for line ${endLine}.`)
      return;
    }

    const transferStation = 'Union Square';
    transferIsRequired = (startLine !== endLine);
    var noticePrompt = ''
    if (transferIsRequired) {
      noticePrompt += tripDistance(startLine, trainLines[startLine], startStation, transferStation);
      transferIsRequired = false;
      noticePrompt += tripDistance(endLine, trainLines[endLine], transferStation, endStation);
    } else {
      noticePrompt += tripDistance(startLine, trainLines[startLine], startStation, endStation);
    }
    noticePrompt += "\n\Stops total: " + stopsTotal;
    console.log(noticePrompt)
  }
  tripPlanner('6','Astor Place','N','Times Square')
