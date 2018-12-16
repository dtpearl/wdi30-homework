/*

Write a function that will take one argument (a number) and perform the following
operations, using the functions you wrote earlier1:

Take half of the number and store the result.
Square the result of #1 and store that result.
Calculate the area of a circle with the result of #2 as the radius.
Calculate what percentage that area is of the squared result (#3).
*/

const bigboifunction = function (num1) {
  let numHalved = num1 / 2
  console.log(`Half of ${num1} is ${numHalved}.`);
  let numSquared = numHalved * numHalved
  console.log(`The result of squaring the number ${numHalved} is ${numSquared}.`);
  let area = numSquared * numSquared * Math.PI
  console.log(`The area for a circle with radius ${numSquared} is ${area}.`);
  let percentage = area / numSquared * 100
  console.log(`${area} is ${percentage}% of ${numSquared}.`);
}

bigboifunction(3)
