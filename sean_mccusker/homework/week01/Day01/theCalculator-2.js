/*

The Calculator

Part 2
Write a function that will take one argument (a number) and perform the
following operations, using the functions you wrote earlier1:

Take half of the number and store the result.
Square the result of #1 and store that result.
Calculate the area of a circle with the result of #2 as the radius.
Calculate what percentage that area is of the squared result (#3).

*/

console.log('Is there anybody out there?');

const halfNumber = function (number) {
  const half = number / 2;
  console.log(`Half of ${ number } is ${ half }.`);
  return half;
}
halfNumber(5);

const percentOf = function (num1, num2) {
  const percentage = (num1 / num2 * 100);
  console.log(`${ num1 } is ${ percentage } % of ${ num2 }.`);
  return percentage;
}
percentOf(2, 4);

const squareNumber = function (number) {
  const squared = number * number;
  console.log(`The result of squaring the number ${ number } is ${ squared }`);
  return squared;
}
squareNumber(3);

const areaOfCircle = function (radius) {
  const area = Math.PI * radius * radius; // area is pi * r^2;
  console.log(`The area for a circle with a radius 2 is ${ area }`);
  return area;
}
areaOfCircle(2);

const whatIsGoingOn = function (num) {
    let half    = halfNumber(num);
    let squared = squareNumber(half);
    let area    = areaOfCircle(squared);
    let result  = percentOf(squared, area);
}

whatIsGoingOn(25);
