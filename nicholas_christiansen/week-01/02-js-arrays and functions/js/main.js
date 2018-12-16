console.log('HOMEWORK -----');

// Array and Functions Main Material
console.log('----- Array and Functions: Main -----');
/*
1. Define a function maxOfTwoNumbers that takes two numbers as arguments
   and returns the largest of them. Use the if-then-else construct available
   in Javascript. You'll have to remember your pre-work, or do some googling
   to figure this out.
*/

const maxOfTwoNumbers = function(num1, num2) {
  return Math.max(num1, num2);
}

/*
2. Define a function maxOfThree that takes three numbers as arguments and
   returns the largest of them.
*/

const maxOfThree = function(num1, num2, num3) {
  return Math.max(num1, num2, num3);
}

/*
3. Write a function that takes a character (i.e. a string of length 1) and
   returns true if it is a vowel, false otherwise.
*/

const vowelCheck = function(letter) {
  return ['a', 'e', 'i', 'o', 'u'].includes(letter);
}

/*
4. Define a function sumArray and a function multiplyArray that sums and
   multiplies (respectively) all the numbers in an array of numbers. For
   example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4])
   should return 24.
*/

const sumArray = function(array) {
  let result = array[0];
  for (let i = 1; i < array.length; i++) {
    result += array[i];
  }
  return result
}

const multiplyArray = function(array) {
  let result = array[0];
  for (let i = 1; i < array.length; i++) {
    result = result * array[i];
  }
  return result
}

const array_numbers = [1,2,3,4];

console.log(`sumArray: ${ sumArray(array_numbers) }`);
console.log(`multiplyArray: ${ multiplyArray(array_numbers) }`);


// Array and Functions: Bonus
console.log('----- Array and Functions: Bonus -----');

/*
1. Define a function reverseString that computes the reversal of a string.
   For example, reverseString("jag testar") should return the string "ratset gaj".
*/

const reverseString = function(str) {
  str = str.split('')
  let strRev = '';
  for (var i = str.length - 1; i >= 0; i--) {
    strRev += str[i];
  }
  return strRev;
}

console.log(`reverseString: ${ reverseString('jag testar')}`)

/*
2. Write a function findLongestWord that takes an array of words and returns
   the length of the longest one.
*/

const findLongestWord = function(array) {
  let wordLength = [];
  for (var i = 0; i < array.length; i++) {
    wordLength.push(array[i].split('').length);
  }
  const index = wordLength.indexOf(Math.max.apply(null, wordLength));
  return array[index];
}

const array_strings = ["Saab", "Volvo", "BMW"];

console.log(`findLongestWord: ${ findLongestWord(array_strings)}`)

/*
3. Write a function filterLongWords that takes an array of words and an
   number i and returns the array of words that are longer than i.
*/

const filterLongWords = function(array, n) {
  let longWord = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i].split('').length > n) {
      longWord.push(array[i])
    }
  }
  return longWord;
}

for (var i = 0; i < findLongestWord(array_strings).length; i++) {
  console.log(`filterLongWords > ${ i } letters: ${ filterLongWords(array_strings, i)}`);
}

// Homework: The Word Guesser
console.log('----- Homework: The Word Guesser -----');

console.log('---------- Main -----');
/*
You'll create a simple word guessing game where the user gets infinite tries
to guess the word (like Hangman without the hangman, or like Wheel of Fortune
without the wheel and fortune).
- Create two global arrays: one to hold the letters of the word (e.g. 'F',
  'O', 'X'), and one to hold the current guessed letters (e.g. it would start
  with '_', '_', '_' and end with 'F', 'O', 'X').
*/

const lettersToBeGuessed = ('fox').split('');

let lettersGuessed = Array(lettersToBeGuessed.length).fill('_')

console.log(lettersToBeGuessed);
console.log(lettersGuessed);

/*
Write a function called guessLetter that will:
- Take one argument, the guessed letter.
- Iterate through the word letters and see if the guessed letter is in there.
- If the guessed letter matches a word letter, changed the guessed letters
  array to reflect that.
- When it's done iterating, it should log the current guessed letters ('F__')
  and congratulate the user if they found a new letter.
- It should also figure out if there are any more letters that need to be
  guessed, and if not, it should congratulate the user for winning the game.
- Pretend you don't know the word, and call guessLetter multiple times with
  various letters to check that your program works.
*/

const wordGuesser = function(letter) { // Take one argument, the guessed letter.

  if (lettersToBeGuessed.includes(letter)) { // Iterate through the word letters and see if the guessed letter is in there.
    lettersGuessed[lettersToBeGuessed.indexOf(letter)] = letter;
    if (lettersGuessed.includes("_")) {
      return `Congrats you got a "${ letter }" which makes "${ lettersGuessed.join('') }"`;
    } else {
      return `Winner! Winner! Chicken dinner! you got a "${ letter }" which makes "${ lettersGuessed.join('') }"`;
    }
  } else {
    return `Oops! "${ letter }" is not in the word`;
  }
}

console.log(wordGuesser('o'));
console.log(wordGuesser('a'));
console.log(wordGuesser('f'));
console.log(wordGuesser('l'));
console.log(wordGuesser('z'));
console.log(wordGuesser('x'));

// Bonus: Make it more like Wheel of Fortune:
console.log('---------- Bonus: Make it more like Wheel of Fortune: -----');

/*
- Start with a reward amount of $0
- Every time a letter is guessed, generate a random amount and reward
  the user if they found a letter (multiplying the reward if multiple
  letters found), otherwise subtract from their reward.
- When they guess the word, log their final reward amount.
*/

let reward = 0;

lettersGuessed = Array(lettersToBeGuessed.length).fill('_')

const wordGuesser2 = function(letter) { // Take one argument, the guessed letter.
  let reward_random = (Math.floor(Math.random() * 10) + 1)
  if (lettersToBeGuessed.includes(letter)) { // Iterate through the word letters and see if the guessed letter is in there.
    lettersGuessed[lettersToBeGuessed.indexOf(letter)] = letter;
    reward += reward_random
    if (lettersGuessed.includes("_")) {
      return `Congrats you got a "${ letter }" which makes "${ lettersGuessed.join('') } Reward: $${ reward } (+${ reward_random })"`;
    } else {
      return `Winner! Winner! Chicken dinner! you got a "${ letter }" which makes "${ lettersGuessed.join('') } Reward: $${ reward } (+${ reward_random })"`;
    }
  } else {
    reward -= reward_random
    return `Oops! "${ letter }" is not in the word (Reward: $${ reward } (-${ reward_random }))`;
  }
}

console.log(wordGuesser2('o'));
console.log(wordGuesser2('a'));
console.log(wordGuesser2('f'));
console.log(wordGuesser2('l'));
console.log(wordGuesser2('z'));
console.log(wordGuesser2('x'));

// Bonus: Make it more like Wheel of Fortune:
console.log('---------- Bonus: Make it more like Wheel of Fortune: -----');

/*
- Keep track of all the guessed letters (right and wrong) and only let the
  user guess a letter once. If they guess a letter twice, do nothing.
- Keep track of the state of the hangman as a number (starting at 0),
  and subtract or add to that number every time they make a wrong guess.
- Once the number reaches 6 (a reasonable number of body parts for a hangman),
  inform the user that they lost and show a hangman on the log.
*/



lettersGuessed = Array(lettersToBeGuessed.length).fill('_')

const printHangman = function(guessWrongCount) {

  let hangman = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, " ", " ", " ", " "],
    [0, " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", 0, " ", " ", " ", " "],
    [0, " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", 1, " ", " ", " ", " "],
    [0, " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", 1, " ", 1, " ", " ", " "],
    [0, " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", 1, " ", " ", " ", " "],
    [0, " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", 3, 2, 4, " ", " ", " "],
    [0, " ", " ", " ", " ", " ", " ", " ", " ", " ", 3, " ", 2, " ", 4, " ", " "],
    [0, " ", " ", " ", " ", " ", " ", " ", " ", 3, " ", " ", 2, " ", " ", 4, " "],
    [0, " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", 5, " ", 6, " ", " ", " "],
    [0, " ", " ", " ", " ", " ", " ", " ", " ", " ", 5, " ", " ", " ", 6, " ", " "],
    [0, " ", " ", " ", " ", " ", " ", " ", " ", 5, " ", " ", " ", " ", " ", 6, " "],
    [0, " ", " ", " ", " ", " ", " ", " ", 5, " ", " ", " ", " ", " ", " ", " ", 6],
    [0, " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [0, " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [0, " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [0, " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
  ];

  for (var i = 0; i < hangman.length; i++) {
    let array = hangman[i];

    for (let j = 0; j < array.length; j++) {
      if (array[j] > guessWrongCount) {
        array[j] = " ";
      }
    }
    console.log(array.join(''));
  }

}

const wordGuesser3 = function(letter) { // Take one argument, the guessed letter.

  if (lettersToBeGuessed.includes(letter)) { // Iterate through the word letters and see if the guessed letter is in there.
    lettersGuessed[lettersToBeGuessed.indexOf(letter)] = letter;
    if (lettersGuessed.includes("_")) {
      printHangman(wrongCount);
      return `Congrats you got a "${ letter }" which makes "${ lettersGuessed.join('') }"`;
    } else {
      printHangman(wrongCount);
      return `Winner! Winner! Chicken dinner! you got a "${ letter }" which makes "${ lettersGuessed.join('') }"`;
    }
  } else {
    wrongCount += 1;
    printHangman(wrongCount);
    if (wrongCount < 6) {
      return `Oops! "${ letter }" is not in the word`;
    } else {
      return `GAME OVER!!!! "${ letter }" is not in the word`;
    }

  }
}

let wrongCount = -1;

console.log(wordGuesser3('o'));
console.log(wordGuesser3('e'));
console.log(wordGuesser3('m'));
console.log(wordGuesser3('l'));
console.log(wordGuesser3('z'));
console.log(wordGuesser3('v'));
console.log(wordGuesser3('f'));
console.log(wordGuesser3('p'));
console.log(wordGuesser3('q'));
