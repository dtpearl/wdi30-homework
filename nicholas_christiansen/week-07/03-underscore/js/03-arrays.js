// Log out the answers to all of the following questions!

// Here is some data that you can work with.

var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
var bumpyArr = ["hello", "maytag", [[[["sigmonster"]], "swizzle"]]];
var uncompactedArr = [ "hello", false, NaN, undefined, "quantom bogo-sort" ];

var arrToTransform = [[ "age", "location" ], [ NaN, undefined ]];

// Create an array of every five numbers between 30 and 101

let arr = _.range(31, 100);

const chunk = _.chunk(arr, 5);

console.log(chunk);

// Turn bumpyArr into one flat array (no nested arrays)

const flattened = _.flatten(bumpyArr);

console.log(flattened);

// Remove all of the falsey elements in the uncompactedArr

const compacted = _.compact(uncompactedArr);

console.log(compacted);

// Find all of the unique elements in the following arrays - [ 1, 25, 100 ],
// [ 1, 14, 25 ] and 24, Infinity, -0

arr = [[ 1, 25, 100 ], [ 1, 14, 25 ], 24, Infinity, -0];

const uniqed = _.uniq(_.flatten(arr));

console.log(uniqed);

// Find the index of the first element in numbers that is over 7 and is even

const indexed = _.findIndex(numbers, function (num) {
  return num > 7 && num % 2 == 0;
});

console.log(indexed);

// Turn arrToTransform into an object that looks like this - { age: NaN, location: undefined }

const objected = _.object(arrToTransform[0], arrToTransform[1]);

console.log(objected);
