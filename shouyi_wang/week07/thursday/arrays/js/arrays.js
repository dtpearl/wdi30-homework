/*
Log out the answers to all of the following questions!

Here is some data that you can work with.

var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
var bumpyArr = ["hello", "maytag", [[[["sigmonster"]], "swizzle"]]];
var uncompactedArr = [ "hello", false, NaN, undefined, "quantom bogo-sort" ];

var arrToTransform = [[ "age", "location" ], [ NaN, undefined ]];
Create an array of every five numbers between 30 and 101
Turn bumpyArr into one flat array (no nested arrays)
Remove all of the falsey elements in the uncompactedArr
Find all of the unique elements in the following arrays - [ 1, 25, 100 ], [ 1, 14, 25 ] and 24, Infinity, -0
Find the index of the first element in numbers that is over 7 and is even
Turn arrToTransform into an object that looks like this - { age: NaN, location: undefined }
*/
var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
var bumpyArr = ["hello", "maytag", [[[["sigmonster"]], "swizzle"]]];
var uncompactedArr = [ "hello", false, NaN, undefined, "quantom bogo-sort" ];

var arrToTransform = [[ "age", "location" ], [ NaN, undefined ]];

//Create an array of every five numbers between 30 and 101
let range5 = _.range(30, 101, 5);
console.log(range5);

//Turn bumpyArr into one flat array (no nested arrays)
let flattenArr = _.flatten(bumpyArr);
console.log(flattenArr);

//Remove all of the falsey elements in the uncompactedArr
let withoutFalsey = _.without(uncompactedArr, false, NaN, undefined);
console.log(withoutFalsey);

//Find all of the unique elements in the following arrays - [ 1, 25, 100 ], [ 1, 14, 25 ] and 24, Infinity, -0

console.log(_.uniq([ 1, 25, 100 ]));
console.log(_.uniq([ 1, 14, 25 ]));
console.log(_.uniq([ 24, Infinity, -0 ]));


//Find the index of the first element in numbers that is over 7 and is even
let first = _.findIndex(numbers, function(num) {
  return num > 7 && num % 2 === 0;
});

console.log("First index is: ", first);

//Turn arrToTransform into an object that looks like this - { age: NaN, location: undefined }

let obj = _.object(arrToTransform[0], arrToTransform[1]);
console.log(obj);
