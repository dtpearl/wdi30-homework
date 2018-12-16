/*

------
PART 1
------

Write a function called squareNumber that will take one argument (a number), square that number, and return the result.
It should also log a string like "The result of squaring the number 3 is 9."

*/

const sqrNum = function (num) {
  const result1 = num ** 2;
  console.log(`The result of squaring number ${ num } is ${ result1 }`);
};

sqrNum(3);

/*

Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result.
It should also log a string like "Half of 5 is 2.5.".

*/

const halfNum = function (num) {
  const result2 = num / 2;
  console.log(`Half of ${ num } is ${ result2 }.`);
};

halfNum(5);

/*

Write a function called percentOf that will take two numbers, figure out what percent the first number
represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

*/

const percentOf = function (percentNum, wholeNum) {
  result3 = (percentNum / wholeNum) * 100;
  console.log(`${ percentNum } is ${ result3 }% of ${ wholeNum }.`);
};

percentOf(34, 50);

/*

Write a function called areaOfCircle that will take one argument (the radius),
calculate the area based on that, and return the result. It should also log a string like
"The area for a circle with radius 2 is 12.566370614359172."

*/

const areaOfCircle = function (radius) {
  result4 = Math.PI * radius ** 2;
  console.log(`The area for a circle with radius ${ radius } is ${ result4.toFixed(2) }`);
};

areaOfCircle(4);

/*

------
PART 2
------

Write a function that will take one argument (a number) and perform the following operations,
using the functions you wrote earlier1:

Take half of the number and store the result.
Square the result of #1 and store that result.
Calculate the area of a circle with the result of #2 as the radius.
Calculate what percentage that area is of the squared result (#3).

*/
console.log("-----------------------");

/*
-------------
FIRST ATTEMPT
-------------
*/

// const bigFunction = function (number) {
//   const result1 = number / 2;
//   console.log(`Half of ${ number } is ${ result1 }.`);
//   const result2 = result1 ** 2;
//   console.log(`The square of ${ result1 } is ${ result2 }.`);
//   const result3 = Math.PI * result2 ** 2;
//   console.log(`The area of circle radius ${ result2 } is ${ result3.toFixed(2) }.`);
//   const result4 = result3.toFixed(2) / result2 * 100;
//   console.log(`The percentage of the area ${ result3.toFixed(2) } over the square result ${ result2 } is ${ result4 }%`);
// };
//
// bigFunction(4);


/*
--------------
SECOND ATTEMPT
--------------
*/


// const metaFunction = function (metaNum) {
//   const halfNum = function (num1) {
//     const num2 = num1 / 2;
//     console.log(`half of ${ num1 } is ${ num2 }.`);
//       const squareNum = function (num2) {
//         const num3 = num2 ** 2;
//         console.log(`Square of ${ num2 } is ${ num3 }`);
//           const areaNum = function (num4) {
//             const num5 = Math.PI * num4 ** 2;
//             console.log(`Area of circle with radius ${ num4 } is ${ num5 }`);
//               const percentNum = function (num5) {
//                 const finalNum = num5 / num3 * 100;
//                 console.log(`Percentage of ${ num5 } over ${ num3 } is ${ finalNum }%.`);
//               };
//           };
//       };
//   };
// };
//
// metaFunction(4(num1));


/*
-------------
THIRD ATTEMPT
-------------
*/

const metaFunction = function (number) {
  const hlf = halfNum(number);
  const sqr =
}





metaFunction(4);
