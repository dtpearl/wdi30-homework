console.log("88888888");

// lets make a simple hangman-like game, I say like, because it can be extended very much
// to bel like the original

const randomWordArr = ['pizza', 'beer', 'cheese', 'peach' ];

// here we choose a random word form the array above
const randomWord = randomWordArr [Math.floor (Math.random() * randomWordArr.length)];

// some globals
const s;
const count = 0;
// empty array to store the guesses
const answerArray = [];

// here we fill the answer array with under scores
// the number of underscores matches the letters in the randomly choosen word
const startUp = function () {
  for ( let i = 0; i < randomWord.length; i++) {
    answerArray [i] = "_";
  }
  // put them in a string
  s = answerArray.join (" ");
  document.getElementById("answer").innerHTML = s;
}

const Letter = function () {
  // here we get the letter that the user typed in the box
  const letter = document.getElementById("letter").value;

  // make sure we have a guess (ore checks can be made here, only letters erc.)
  if (letter.length > 0) {
    for (let i = 0; i < randomWord.length; i++) {
      // now if the randomword contains a letter that the user type in
      if (randomWord[i] === letter) {
        // assign it to
        answerArray [i] = letter;
      }
    }
    // here is how many times it takes to guesses
    count++;
    document.getElementById('counter').innerHTML = "No of clicks: " + count;
    document.getElementById('answer').innerHTML = answerArray.join(" ");
  }
  //
  if (count > 5) {
    document.getElementById("start").innerHTML = "Come on - you should have guessed it by now";
  }
}
