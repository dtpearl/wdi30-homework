const wordArray = ['F', 'O', 'X'];
const guessedArray = ['_', '_', '_'];
let reward=0;
let hangMan=0;
const tryArray = [];

const guessLetter = function (letter) {
  let msg="";
  let rndValue=Math.round(Math.random()*100);
  let isGuessedWord=true;
  let isGuessedLetter=false;
  let guessedWord="";
  let guessLetterCnt=0;
  if (!tryArray.includes(letter))
    if (hangMan<6) {
      for (var i = 0; i <wordArray.length; i++) {
        // console.log("iterr: "+i);
        if (letter===wordArray[i]) {
          guessedArray[i]=letter;
          msg = `You successfully guessed letter: ${letter}. `;
          isGuessedLetter=true;
          guessLetterCnt++;
        }
        if (guessedArray[i]==='_') {
          isGuessedWord=false;
        }
        guessedWord = guessedWord+guessedArray[i];
      }
      if (isGuessedWord===true) {
        msg=msg+"You successfully guessed word. ";
      }
      if (isGuessedLetter!=true) {
        msg=msg+"Not right, try again. ";
        reward=reward-rndValue;
        hangMan+=1;
      } else {
        reward+=rndValue*guessLetterCnt;
        hangMan-=1;
      }
      msg=msg+`Guessed word: ${guessedWord}. Reward is ${reward}. `;
      if (hangMan===6) msg+=`You lost. `;
    } else {
      msg=`You already lost`;
    }
    tryArray.push(letter);
  return msg;
}

console.log(guessLetter("A"));
console.log(guessLetter("Z"));
console.log(guessLetter("S"));
console.log(guessLetter("O"));
console.log(guessLetter("O"));
console.log(guessLetter("O"));
console.log(guessLetter("O"));
console.log(guessLetter("O"));
console.log(guessLetter("O"));
console.log(guessLetter("J"));
console.log(guessLetter("H"));
console.log(guessLetter("K"));
console.log(guessLetter("B"));
console.log(guessLetter("F"));
console.log(guessLetter("C"));
console.log(guessLetter("X"));
