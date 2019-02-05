var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
var bumpyArr = ["hello", "maytag", [[[["sigmonster"]], "swizzle"]]];
var uncompactedArr = [ "hello", false, NaN, undefined, "quantom bogo-sort" ];

var arrToTransform = [[ "age", "location" ], [ NaN, undefined ]];


// Create an array of every five numbers between 30 and 101
console.log("------------------");
console.log("1. EVERY 5 NUMBERS BETWEEN 30 & 101:");
const skipFive = _.range(30, 101, 5);
console.log(skipFive);
console.log("------------------");

// Turn bumpyArr into one flat array (no nested arrays)
console.log("2. BUMPY ARRAY INTO FLAT ARRAY:");
const flatArray = _(bumpyArr).flatten();
console.log(flatArray);
console.log("------------------");

// Remove all of the falsey elements in the uncompactedArr
console.log("3. REMOVE FALSEY ELEMENTS:");
const compactedArr = _(uncompactedArr).compact();
console.log(compactedArr);
console.log("------------------");

// Find all of the unique elements in the following arrays - [ 1, 25, 100 ], [ 1, 14, 25 ] and 24, Infinity, -0
console.log("4. FIND UNIQUE ELEMENTS:");
let randomArrays = [[ 1, 25, 100 ], [ 1, 14, 25 ], [ 24, "Infinity", -0 ]]
randomArrays = _(randomArrays).flatten();
const unique = _(randomArrays).uniq();
console.log(unique);
console.log("------------------");

// Find the index of the first element in numbers that is over 7 and is even
console.log("5. INDEX OF FIRST ELEMENT OVER 7 THAT IS EVEN:");
const indexOfEven = _(numbers).findIndex(function(num) {
  return num > 7 && num % 2 === 0;
});
console.log(indexOfEven);
console.log("------------------");

// Turn arrToTransform into an object that looks like this - { age: NaN, location: undefined }
console.log("6. ARRAY TO TRANSFORM:");
const transformedArray = _(arrToTransform[0]).object(arrToTransform[1]);
console.log(transformedArray);
console.log("------------------");
