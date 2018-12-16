// Part 1
// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.

//Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
  function squareNumber (number) {
   const square = number * number;
   return square;
}
//document.write(squareNumber(10));

// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
function halfNumber (number) {
 const result = number / 2;
 return result;
}
//document.write(halfNumber(5));

// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
function percentOf (num1, num2) {
 const result = (num1 / num2) * 100;
 return result;
}
//document.write(percentOf(5,10));

// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
function areaOfCircle (num1) {
 const result = (num1 * num1) * 3.14159;
 return result.toFixed(2);
}
//document.write(areaOfCircle(6));

// Part 2
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
//
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).

function calc (n) {
var i=n;
 const res1 = halfNumber(i);
 //return res1;//2.5

  const res2 = squareNumber(i);
  //return res2;//res2 should be 4
  //
  const res3 = areaOfCircle(res2);
  //return res3;
  //
  // const res4 = percentOf(res3, res2);
  // //return res4;
  document.write("\n Half Number = " + res1);
  document.write("\n Square No. " + res2);
  document.write("\n Area Of Circle " +res3);
}
const last = calc (4);
