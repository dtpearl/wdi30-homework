// Arrays!
// Log out the answers to all of the following questions!
//
// Here is some data that you can work with.
//
var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
var bumpyArr = ["hello", "maytag", [[[["sigmonster"]], "swizzle"]]];
var uncompactedArr = [ "hello", false, NaN, undefined, "quantom bogo-sort" ];
//
var arrToTransform = [[ "age", "location" ], [ NaN, undefined ]];

// Create an array of every five numbers between 30 and 101


// Turn bumpyArr into one flat array (no nested arrays)
const flattenMe = _(bumpyArr).flatten();
console.log(flattenMe);
console.clear();

// Remove all of the falsey elements in the uncompactedArr
// const convertToBool = _.filter(uncompactedArr, function (item) {
//   return item != false;
// })
// console.log(convertToBool);

const findTruthy = _.reject(uncompactedArr, function (item) {
  return (item === item) === false;
});

console.log(findTruthy);

// Find all of the unique elements in the following arrays: [ 1, 25, 100 ], [ 1, 14, 25 ] and [24, Infinity, -0];
const uniqueness = _.uniq([ 1, 25, 100 ], [1, 14, 25]);
console.log(uniqueness);

// Find the index of the first element in numbers that is over 7 and is even



// Turn arrToTransform into an object that looks like this - { age: NaN, location: undefined }
