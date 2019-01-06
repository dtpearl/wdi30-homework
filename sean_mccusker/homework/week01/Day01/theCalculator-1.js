console.log('Is there anybody out there?');

/*

The Calculator
Part 1

Write a function called squareNumber that will take one argument (a number),
square that number, and return the result. It should also log a string like
"The result of squaring the number 3 is 9."

Write a function called halfNumber that will take one argument (a number),
divide it by 2, and return the result. It should also log a string
like "Half of 5 is 2.5.".

Write a function called percentOf that will take two numbers, figure out
what percent the first number represents of the second number, and return
the result. It should also log a string like "2 is 50% of 4."

Write a function called areaOfCircle that will take one argument (the radius),
calculate the area based on that, and return the result. It should also log a
string like "The area for a circle with radius 2 is 12.566370614359172."

Bonus: Round the result so there are only two digits after the decimal.

*/


const squareNumber = function (number) {
  const squared = number * number;
  console.log(`The result of squaring the number ${ number } is ${ squared }`);
}
squareNumber(3);

const halfNumber = function (number) {
  const half = number / 2;
  console.log(`Half of ${ number } is ${ half }.`);
}
halfNumber(5);

const percentOf = function (num1, num2) {
  const percentage = (num1 / num2 * 100);
  console.log(`${ num1 } is ${ percentage } % of ${ num2 }.`);
}
percentOf(2, 4);

const areaOfCircle = function (radius) {
  const area = Math.PI * radius * radius; // area is pi * r^2;
  console.log(`The area for a circle with a radius 2 is ${ area }`);
}

areaOfCircle(2);

constPi = 3.14;
const areaOfCircleRound = function (radius) {
  const area = constPi * radius * radius; // area is pi * r^2;
  console.log(`The area for a circle with a radius 2 is ${ area }`);
}

areaOfCircleRound(2);
