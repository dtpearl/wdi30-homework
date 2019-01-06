/*

Homework: The Word Guesser

You'll create a simple word guessing game where the user gets infinite tries to
guess the word (like Hangman without the hangman, or like Wheel of Fortune
without the wheel and fortune).

Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'),
and one to hold the current guessed letters (e.g. it would start with '_', '_', '_'
and end with 'F', 'O', 'X').

Write a function called guessLetter that will:

Take one argument, the guessed letter.

Iterate through the word letters and see if the guessed letter is in there.

If the guessed letter matches a word letter, changed the guessed letters array
to reflect that.

When it's done iterating, it should log the current guessed letters ('F__') and
congratulate the user if they found a new letter.

It should also figure out if there are any more letters that need to be guessed,
 and if not, it should congratulate the user for winning the game.

Pretend you don't know the word, and call guessLetter multiple times with various
letters to check that your program works.

*/
// console.log('Is there anybody out there?');
//
const theAnswer = ['p', 'y', 't', 'h', 'o', 'n'];
const bestLetterGuess = ['_', '_', '_', '_', '_', '_'];
let numberOfGuesses = 3;
const bestGuess = function (letter) {
  if (numberOfGuesses <= 0 ) {
    console.log(`Oooff, time for the family to plan a funeral.`);
    return
  }
  if (theAnswer.indexOf(letter) === -1) {
    numberOfGuesses--;
    console.log(`That was a bad guess, the letter ${ letter } does not appear in the word. Give it another go.`);
    console.log(`You have ${ numberOfGuesses } incorrect guesses left until you are dead!.`);
  } else {
    console.log(`Well done, you have guessed correctly, the selected letter ${ letter }, is part of the word.`);
  for (i = 0; i < theAnswer.length; i++) {
      if (theAnswer[i] === letter) {
          bestLetterGuess[i] = letter;
      }
    }
  }

  console.log(`This is what you have guessed so far: ${ bestLetterGuess }.`);

  if (bestLetterGuess.indexOf('_') === -1) {
    alert(`WELL DONE, YOU ARE A GENIUS! GRAB A BEER!`);
      }
}
console.log(`Welcome to hangman. The word you need to guess is ${ theAnswer.length } letters long. You are only allowed 3 incorrect guesses. Good luck.`);
//bestGuess('p');
//bestGuess('y');
//bestGuess('t');
// bestGuess('n');
// bestGuess('o');
// bestGuess('h');

//bestGuess('z');
// bestGuess('a');
// bestGuess('r');
// bestGuess('t');

console.log('https://www.youtube.com/watch?v=LQCU36pkH7c');


































// const theAnswer = ['p', 'y', 't', 'h', 'o', 'n'];
// const bestLetterGuess = ['_', '_', '_', '_', '_', '_'];
// let numberOfChances = 8;
//
// const bestGuess = function (letter) {
//   if (numberOfChances <=0) {
//     console.log(`Oooff, time for the family to plan a funeral.`)
//     return;
//   }
//   let goodGuess = false;
//   let moreToGuess = false;
//   for (i = 0; i < theAnswer.length; i++) {
//       if (theAnswer[i] === letter) {
//           bestLetterGuess[i] = letter;
//           goodGuess = true;
//       }
//       if (bestLetterGuess[i] === '_') {
//           moreToGuess = true;
//       }
// }
// if (goodGuess) {
//     console.log('You are a genius, keep going!');
//     console.log(bestLetterGuess.join(''));
//     if (!moreToGuess) {
//         console.log('Grab a beer you have earned it!');
//     }
// } else {
//     console.log('Are you kidding me?!');
//   }
// }
//
//
//
//
// bestGuess('p');
// bestGuess('i');
// bestGuess('y');
// bestGuess('y');
// bestGuess('h');
// bestGuess('o');
// bestGuess('n');
