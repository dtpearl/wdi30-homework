/*
Homework: The Word Guesser
You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).

Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').
Write a function called guessLetter that will:
Take one argument, the guessed letter.
Iterate through the word letters and see if the guessed letter is in there.
If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.


Bonus: Make it more like Wheel of Fortune:
Start with a reward amount of $0
Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
When they guess the word, log their final reward amount.
Bonus: Make it like Hangman:
Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.
*/

// check the letter to arrayFox
// if does match, add to arrayGuess and congratulate
// if doesnt match repeat
// when all letters guessed, congratulate for win

let arrayFox = ['F', 'O', 'X']
let arrayGuess = ['_', '_', '_']
let letters = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ']

const guessLetter = function (i) {
  for (let i = 0; i < letters.length; i++) {
    if (i === arrayFox[0]) {
    arrayGuess.splyce(0, 1, arrayFox[0])
    console.log(arrayGuess);
    console.log(`Congratulations you found a new letter: ${arrayFox[0]}`);
    } else if (i === arrayFox[1]) {
    arrayGuess.splyce(1, 1, arrayFox[1])
    console.log(arrayGuess);
    console.log(`Congratulations you found a new letter: ${arrayFox[1]}`);
    } else if (i === arrayFox[2]) {
    arrayGuess.splyce(2, 1, arrayFox[2])
    console.log(arrayGuess);
    console.log(`Congratulations you found a new letter: ${arrayFox[2]}`);
    }
  }
}
