/*

Define a function sumArray and a function multiplyArray that sums
and multiplies (respectively) all the numbers in an array of numbers.
For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.

*/

const sumArray = function (array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};

// console.log(sumArray([1, 2, 3, 4]));

// function sum(numbers) {
// 	var total = 0;
// 	for (var i = 0; i < numbers.length; i++) {
// 		total += numbers[i];
// 	}
// 	return total;
// }
// // Print out the total to the console
// console.log(sum([1,2,3,4]));


const multiplyArray = function (array) {
  let sum = 1;
  for (let i = 0; i < array.length; i++) {
    sum = (sum * array[i]);
  };
  return sum;
};

console.log(multiplyArray([1, 2, 3, 4]));
