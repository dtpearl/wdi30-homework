var objectToMap = {
  start:  100,
  middle: 853,
  end:    912
}

// Multiply each value in objectToMap by a random number and return an object with the changed values
console.log("------------------");
console.log("1. MULTIPLE VALUES BY RANDOM NUMBER:");
const newObject = _(objectToMap).mapObject(function(value, key) {
  return value * Math.floor((Math.random() * 100));
});
console.log(newObject);
console.log("------------------");

// Get an array version of objectToMap that looks like this - [["start", 100], ["middle", 853], ["end", 912]]
console.log("2. ARRAY OF OBJECT:");

console.log("------------------");

// Flip objectToMap around so that it looks like this - { "100" : "start", "853" : "middle", "912" : "end" }
console.log("3. FLIP KEYS AND VALUES:");
const invertedObject = _(objectToMap).invert();
console.log(invertedObject);
console.log("------------------");

// Remove the "start" key from objectToMap in two different ways
console.log("4. REMOVE START KEY IN 2 WAYS:");
const removeStart1 = _(objectToMap).omit('start');
console.log(removeStart1);

const removeStart2 = _(objectToMap).pick('middle', 'end');
console.log(removeStart2);
console.log("------------------");
