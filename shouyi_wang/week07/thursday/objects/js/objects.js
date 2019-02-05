/*
Log out the answers to all of the following questions!

Here is some data that you can work with.

var objectToMap = {
  start:  100,
  middle: 853,
  end:    912
}
Multiply each value in objectToMap by a random number and return an object with the changed values
Get an array version of objectToMap that looks like this - [["start", 100], ["middle", 853], ["end", 912]]
Flip objectToMap around so that it looks like this - { "100" : "start", "853" : "middle", "912" : "end" }
Remove the "start" key from objectToMap in two different ways
*/

var objectToMap = {
  start:  100,
  middle: 853,
  end:    912
}

//Multiply each value in objectToMap by a random number and return an object with the changed values

var obj = _.mapObject(objectToMap, function(value, key) {
  return value * Math.random();
});

console.log(obj);

//Get an array version of objectToMap that looks like this - [["start", 100], ["middle", 853], ["end", 912]]

var pair = _.pairs(objectToMap);
console.log(pair);

//Flip objectToMap around so that it looks like this - { "100" : "start", "853" : "middle", "912" : "end" }
var invert = _.invert(objectToMap);
console.log(invert);

//Remove the "start" key from objectToMap in two different ways
console.log(_.omit(objectToMap, 'start'));
console.log(_.pick(objectToMap, 'middle', 'end'));
