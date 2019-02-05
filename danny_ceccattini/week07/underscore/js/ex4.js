// Log out the answers to all of the following questions!
//
// Here is some data that you can work with.
//
var objectToMap = {
  start:  100,
  middle: 853,
  end:    912
}

// Multiply each value in objectToMap by a random number and return an object with the changed values
const multiplyRandom = _.mapObject(objectToMap, function(value, key) {
  return value * Math.random();
});

console.log(multiplyRandom);
// Get an array version of objectToMap that looks like this - [["start", 100], ["middle", 853], ["end", 912]]
const partners = _.pairs(objectToMap);
console.log(partners);

// Flip objectToMap around so that it looks like this - { "100" : "start", "853" : "middle", "912" : "end" }
const flipMe = _.invert(objectToMap);
console.log(flipMe);

// Remove the "start" key from objectToMap in two different ways
