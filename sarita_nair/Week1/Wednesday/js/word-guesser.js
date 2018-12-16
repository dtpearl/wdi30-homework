/*
You'll create a simple word guessing game where the user gets infinite tries to guess the word
(like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).

Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current
guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').
Write a function called guessLetter that will:
Take one argument, the guessed letter.
Iterate through the word letters and see if the guessed letter is in there.
If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user
for winning the game.
Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.
*/

const wordArr = ['h','a','n','g','o','v','e','r'];//['h','a','n','g','m','a','n'];
let score = 0;
const UpdateScore = function(arg){
    if(arg === 'add')
      score += 100;
    else
      score -= 100;
};
const guessLetter = function(arrguessLtr)
{
    let logmsg = '';
    let cnt = 0;

    while(cnt <= wordArr.length - 1)
    {
      //for( let cnt = 0 ;cnt <= wordArr.length-1; cnt++)
      //{
          //for(let cntgL = 0; cntgL <= arrguessLtr.length-1; cntgL++)
          //{
          if(arrguessLtr[cnt] !== '')
          {
            if(wordArr[cnt] === arrguessLtr[cnt])
            {
                logmsg = `Great! you found a match.`;
                UpdateScore('add');
            }
            else {

                logmsg = `Sorry, wrong guess please try again.`;
                UpdateScore('sub');
                return logmsg;
            }
          }

              cnt++;
          //}
      //}
    }

    if(arrguessLtr.includes(''))
      logmsg += `\nYou still have more letters to guess.`;
    else
      logmsg = `Congratulations!!! you won the game.\nYour Total score is ${score}.`;
      return logmsg;
};

const callFunctionsguessLetter =  function()
{

//let guess = ['','','','','o','','e','r'];
//let guess = ['','y','','t','','g','t','r'];
//let guess = ['h','r','','d','o','','e','r'];
let guess = ['h','a','n','g','o','v','e','r'];
console.log(`${guessLetter(guess)}`);
};

callFunctionsguessLetter();
