/*
Array and Functions Bonus Material
Bonus
Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
Write a function findLongestWord that takes an array of words and returns the length of the longest one.
Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i.
*/


// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them.

const maxOfTwoNumbers = function(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
};

console.log(maxOfTwoNumbers(20, 10));
console.log(maxOfTwoNumbers(14, 19));

// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.


const maxOfThree = function(a, b, c) {
  if (a > b && a > c) {
  return a;
  } else if (b > a && b > c) {
  return b;
  } else {
  return c;
  }
}

console.log(maxOfThree(1, 2, 3));
console.log(maxOfThree(6, 5, 4));
console.log(maxOfThree(8, 9, 7));



//Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

const vowelOrNot = function (string) {
  if (string[0] === 'a' || string[0] === 'e' || string[0] === 'i' || string[0] === 'o' || string[0] === 'u') {
  return 'true';
  // } else if (string[0] === 'e') {
  // return 'true';
  // } else if (string[0] === 'i') {
  // return 'true';
  // } else if (string[0] === 'o') {
  // return 'true';
  // } else if (string[0] === 'u') {
  // return 'true';
  } else {
  return 'false';
  }
}

console.log(vowelOrNot('a'));
console.log(vowelOrNot('frog'));
console.log(vowelOrNot('u'));
console.log(vowelOrNot('v'));
console.log(vowelOrNot(1));
console.log(vowelOrNot('octopus'));


// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers.
//For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.


const sumArray = [1, 2, 3, 4].reduce((a, b) => a + b, 0);
console.log(sumArray);

const multiplyArray = [1, 2, 3, 4].reduce((a, b) => a * b);
console.log(multiplyArray);
