console.log("aha");
const network = {
   N: ['Time Square','34th', '28th', '23rd','Union Square', '8th'],
   L: ['8th', '6th', 'Union Square', '3rd', '1st'],
   '6': ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'],
};

const planTrip = function (a, b, c, d) {
  let changeAt;
  let stopsTravelledForOne;
  let stopsTravelledForTwo;
    for (var i = 0; i < network[a].length; i++) {
      for (var x = 0; x < network[c].length; x++){
        if (network[c][x] === network[a][i] &&  network[a][i] === 'Union Square') {
          changeAt = network[c][x];
        }
      }
    }
    const indexOfStopGetOn = network[a].indexOf(b);
    const indexofStopGetOff = network[a].indexOf(changeAt);

    if (indexofStopGetOff > indexOfStopGetOn) {
      stopsTravelledForOne = network[a].slice(indexOfStopGetOn + 1,  indexofStopGetOff + 1);
    } else {
      stopsTravelledForOne = network[a].slice(indexofStopGetOff, indexOfStopGetOn).reverse();
    }

    const indexOfStopGetOnLineTwo = network[c].indexOf(changeAt);
    const indexOfStopGetOffLineTwo = network[c].indexOf(d);

    if (indexOfStopGetOnLineTwo < indexOfStopGetOffLineTwo) {
      stopsTravelledForTwo = network[c].slice(indexOfStopGetOnLineTwo + 1, indexOfStopGetOffLineTwo + 1);
    } else {
      stopsTravelledForTwo = network[c].slice(indexOfStopGetOffLineTwo, indexOfStopGetOnLineTwo).reverse();
    }

    return `You must travel through the following stops on the ${a} line: ${stopsTravelledForOne.join(', ')}
            Change at ${changeAt}
            Your journey continues the following stops: ${stopsTravelledForTwo.join(', ')}.`;
};

//const res = planTrip('N', 'Time Square', '6', '33rd');
const res = planTrip('N', 'Time Square', 'N', '8th');
// const res = planTrip('N', '34th', '6', 'Union Square');
// const res = planTrip('L', '1st', '6', '33rd');

console.log(res);
