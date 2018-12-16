const intersection = 'Union Square';
// const intersectIndex = indexOf('Union Square');

const subWay = {
  n: ['Times Square', '34th', '28th', '23rd', intersection, '8th'],
  l: ['8th', '6th', intersection, '3rd', '1st'],
  six: ['Grand Central', '33rd', '28th', '23rd', intersection, 'Astor Place'],
};

const n = subWay.n;
const l = subWay.l;
const six = subWay.six;
//
// const reverseLines = function (line, stop) {
//   if (line.indexOf(stop) > line.indexOf(intersection)) {
//     return line.reverse()
//   }
//   else {
//     return "???";
//   }
// };
//
// console.log(reverseLines(l, '1st'));

// const noChange = function (lineA, hopOn, hopOff) {
//   let stopA = lineA.indexOf( hopOn ) + 1;
//   let stopB = lineA.indexOf( hopOff ) + 1;
//   let tripStops = lineA.slice( stopA, stopB );
//   let newArray = [];
//   for (let i = 0; i < tripStops.length; i++) {
//     newArray.push( tripStops[ i ] );
//   };
//   let numberOfStops = newArray.length;
//   console.log(`You must travel through the following stops: ${ newArray.join(", ") }.`);
//   console.log(`${ numberOfStops } stops in total.`)
// };
//
// const travelBack = function (lineA, hopOn, hopOff) {
//   if (lineA.indexOf( hopOn ) > lineA.indexOf( hopOff )) {
//     return noChange(lineA.reverse(), hopOn, hopOff);
//   } else {
//     return "???";
//   }
// };
//
// travelBack(n, '8th', 'Times Square');
//


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

const travelBack = function (lineA, hopOn, lineB, hopOff) {
  if (lineB.indexOf(hopOff) < lineB.indexOf(intersection)) {
    return changeLine(lineA, hopOn, lineB.reverse(), hopOff);
  } else {
    return changeLine( linA, hopOn, lineB, hopOff);
  }
};

travelBack(n, 'Times Square', six, 'Grand Central');
// travelBack(n, 'Times Square', six, 'Astor Place');
