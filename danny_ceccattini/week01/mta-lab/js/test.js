const intersection = 'Union Square';
// const intersectIndex = indexOf('Union Square');

const nySubWay = {
  n: ['Times Square', '34th', '28th', '23rd', intersection, '8th'],
  l: ['8th', '6th', intersection, '3rd', '1st'],
  six: ['Grand Central', '33rd', '28th', '23rd', intersection, 'Astor Place'],
};

const n = nySubWay.n;
const l = nySubWay.l;
const six = nySubWay.six;
//
// console.log(n);
// console.log(l);
// console.log(six);
// console.log(six.reverse());


// const line = lineN;
// const hopOn = 'Times Square';
// const hopOff = '8th';


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

// noChange(six, 'Grand Central', 'Astor Place');

//FRESH COPY FROM MAIN.JS

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

// changeLine(n, 'Times Square', six, 'Astor Place');


const tripPlanner = function ( lineA, hopOn, lineB, hopOff ) {
  if ( lineB === null ) {
    return noChange( lineA, hopOn, hopOff );
  } else if ( lineA !== lineB ) {
    return changeLine (lineA, hopOn, lineB, hopOff);
  } else if ( lineA.indexOf( hopOn ) > lineA.indexOf( hopOff ) ) {
    return noChange( lineA.reverse(), honOn, hopOff);
  } else if (lineB.indexOf(hopOff) < lineB.indexOf(intersection)) {
    return changeLine( lineA, hopOn, lineB.reverse(), hopOff );
  } else if (lineA.indexOf(hopOn) > lineA.indexOf(intersection) && lineB.indexOf(intersection) > lineB.indexOf(hopOff)) {
    return (lineA.reverse(), hopOn, lineB.reverse(), hopOff);
  } else {
    return 'Check inputs';
  }
};

tripPlanner(n, 'Times Square', six, 'Grand Central');
