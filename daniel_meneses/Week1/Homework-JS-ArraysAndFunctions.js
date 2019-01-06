/*
Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
*/

const greaterNum = function (a,b) {
  if (a > b) {
    console.log(`The greater number of ${a} and ${b} is ${a}.`);
  } else if (b > a) {
    console.log(`The greater number of ${a} and ${b} is ${b}.`);
  } else {
    console.log(`The numbers are equal.`);
  }
}

/*
Define a function maxOfThree that takes three numbers as arguments and returns the largest of them
*/

const maxOfThree = function (a,b,c) {
  if (a > b && a > c) {
    return a;
  } else if  (b > a && b > c) {
    return b;
  } else if  (c > a && c > b) {
    return c;
  }
}

const isVowel = function(letter) {
  if (letter.length > 1) { return 'Not a single character'}
  const vowelArray = ['a','e','i','o','u'];
  return vowelArray.includes(letter);
}

const sumArray = function (arrayOfNumbers) {
  var sum = 0
  for (var i = 0; i < arrayOfNumbers.length ; i++ ) {
    sum = sum + arrayOfNumbers[i];
  }
  return sum;
}

const multiplyArray = function (arrayOfNumbers) {
  var sum = 1
  for (var i = 0; i < arrayOfNumbers.length ; i++ ) {
    sum = sum * arrayOfNumbers[i];
  }
  return sum;
}


const globalArray1 = ['F','O','X'];
const globalArray2 = ['','',''];

const guessLetter = function (guess) {
  if (guess.length != 1) { return 'Please guess a letter'}
  if (globalArray1.includes(guess)) {
    const indexNum = globalArray1.findIndex(globalArray1 => globalArray1 === guess);
    globalArray2[indexNum] = guess;
  }
  if (globalArray2[0] == 'F' && globalArray2[1] == 'O' && globalArray2[2] == 'X') {
    console.log('You solved it');
  }
}
