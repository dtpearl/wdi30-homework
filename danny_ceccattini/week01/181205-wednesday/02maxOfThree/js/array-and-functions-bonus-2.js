/*

Define a function maxOfThree that takes three numbers as arguments
and returns the largest of them.

*/

const maxOfThree = function (num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return num1;
  } else if (num2 > num1 && num2 > num3) {
    return num2;
  } else {
    return num3;
  }
};

console.log(maxOfThree(1, 2, 3));
console.log(maxOfThree(1, 3, 2));
console.log(maxOfThree(3, 2, 1));
console.log(maxOfThree(3, 1, 2));
