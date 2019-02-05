const tripPlanner = {

  n:  ['Times Square', '34th','28th', '23rd', intersection, '8th'],
  l: ['8th', '6th', intersection, '3rd', '1st'],
  six: ['Grand Central', '33rd', '28th', '23rd', intersection, 'Astor Place'],

  oneLine: function (lineA, hopOn, hopOff) {
    let from = lineA.indexOf(hopOn);
    let to = lineA.indexOf(hopOff);
    let stops = lineA.slice(from, to);
    
  }
};
