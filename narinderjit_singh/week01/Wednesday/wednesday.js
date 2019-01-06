/* 
You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).

Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').
Write a function called guessLetter that will:
Take one argument, the guessed letter.
Iterate through the word letters and see if the guessed letter is in there.
If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works. */

const checkReplace = function(chr,blank,str){
    let returnStr="";
    let chrPosition = str.indexOf(chr);
    
        for(let j=0;j<str.length;j++){
            if(j==chrPosition){
                returnStr+=chr;
            }
            else{
                returnStr+=blank[j];
            }
        }
    return returnStr;
}



const wordGuess = function(){
    let str=prompt("Enter the string to find = ");
    
    let blank = "";
    strLength=str.length;
    for(let i=0;i<strLength;i++){                   //setting blank spaces
        blank+="*";
    }
    console.log(blank);                             // Printing Blank Spaces
    
    alert(`Guess ${strLength} Characters`);         //Number of characters needed to be enter

    for(let counter=0; counter<strLength;){
        let ch = prompt(`Enter #${counter+1} Character `);
        if(ch.length>1){
          continue;
        }
        else{
            console.clear();
            blank = checkReplace(ch,blank,str);       // Calling for check and replace
            counter++;
            console.log(blank);
        }
    }
    
    if(str===blank){
        alert("Good on you ! ");
    }
    else 
        alert("Sorry, try next time.");
}

wordGuess();   