/*
Write a function called squareNumber that will take one argument (a number), square that number, and return the result.
It should also log a string like "The result of squaring the number 3 is 9."
*/
function squareNumber(number){
  const result = Math.pow(number,2);
  console.log(`The result of squaring the number ${number} is ${result}`);
  return result;
}
const square = squareNumber(3);
