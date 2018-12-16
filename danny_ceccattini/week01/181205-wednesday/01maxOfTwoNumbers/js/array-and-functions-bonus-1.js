/*
*/


/*

Define a function maxOfTwoNumbers that takes two numbers as arguments and
returns the largest of them. Use the if-then-else construct available in Javascript.
You'll have to remember your pre-work, or do some googling to figure this out.

*/

const maxOfTwoNumbers = function (num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
};

console.log(maxOfTwoNumbers(1, 2));
console.log(maxOfTwoNumbers(4, 2));
console.log(maxOfTwoNumbers(4, 6));
console.log(maxOfTwoNumbers(8, 6));
console.log(maxOfTwoNumbers(8, 10));
