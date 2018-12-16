const subway = {
  "N": ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
  "L": ["8th", "6th", "Union Square", "3rd", "1st"],
  "6": ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
};







const lToR = function (sub, startStation, finishStation) {
  let line = subway[sub];
  const stops = [];
  for (let i = line.indexOf(startStation) + 1; i < line.indexOf(finishStation) + 1; i++) {
    stops.push(line[i]);
  }
  return stops;
};

const rtoL = function (sub, startStation, finishStation) {
  let line = subway[sub].reverse();
  const stops = [];
  for (let i = line.indexOf(startStation) + 1; i < line.indexOf(finishStation) + 1; i++) {
    stops.push(line[i]);
  }
  return stops;
};
