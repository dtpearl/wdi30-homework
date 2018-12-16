// The Calculator
// Part 1

//Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
  function squareNumber (number) {
   const square = number * number;
   return square;
}
console.log(squareNumber(10));

// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
function halfNumber (number) {
 const result = number / 2;
 return result;
}
console.log(halfNumber(5));

// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
function percentOf (num1, num2) {
 const result = (num1 / num2) * 100;
 return result;
}
console.log(percentOf(5,10));

// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
function areaOfCircle (num1) {
 const result = (num1 * num1) * 3.14159;
 return result.toFixed(2);
}
console.log(areaOfCircle(6));

// Part 2
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
function calc (n) {
var i=n;
 let res1 = halfNumber(i);
 let res2 = squareNumber(res1);
 let res3 = areaOfCircle(res2);
 let res4 = percentOf(res3, res1);
 console.log(`The half of ${i} is ${res1}, its square is ${res2} and area of circle of the diameter is ${res3}. The percentage of the squared number is ${res4}`);
 }
 calc(6);
