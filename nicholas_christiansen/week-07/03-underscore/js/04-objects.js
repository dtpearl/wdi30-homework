
// Log out the answers to all of the following questions!
//
// Here is some data that you can work with.

var objectToMap = {
  start:  100,
  middle: 853,
  end:    912
}

// Multiply each value in objectToMap by a random number and return an object
// with the changed values

const mappedObject = _.mapObject(objectToMap, function(val, key) {
  return val*Math.random();
});

console.log(mappedObject);


// Get an array version of objectToMap that looks like this - [["start", 100],
// ["middle", 853], ["end", 912]]

const paired = _.pairs(objectToMap);

console.log(paired);


// Flip objectToMap around so that it looks like this - { "100" : "start",
// "853" : "middle", "912" : "end" }

const inverted = _.invert(objectToMap);

console.log(inverted);

// Remove the "start" key from objectToMap in two different ways

const ommited = _.omit(objectToMap, 'start');

console.log(ommited);

const picked = _.pick(objectToMap, 'middle', 'end');

console.log(picked);
