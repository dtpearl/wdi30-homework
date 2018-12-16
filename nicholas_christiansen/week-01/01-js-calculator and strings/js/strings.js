console.log('STRINGS -----');

// Dr Evil
console.log("----- Dr EVIL -----");

/*
Create a function called DrEvil. It should take a single argument,
an amount, and return ' dollars', except it will add '(pinky)' at the end if
the amount is 1 million.
*/

const drEvil = function(amount) {

  text = amount + ' dollars'
  // if amount is equal to 1 million
  if (amount === 1000000) {
    text += ' (pinky)';
  }
  console.log(`${ text }`)
}

drEvil(10);
drEvil(1000000);


// Mix Up
console.log("----- MixUp -----");

/*
Create a function called mixUp. It should take in two strings, and return the
concatenation of the two strings (separated by a space) slicing out and swapping
the first 2 characters of each. You can assume that the strings are at least 2
characters long.
*/

const mixUp = function(str1, str2) {
  console.log(str2.slice(0,2) + str1.slice(2) + " " + str1.slice(0,2) + str2.slice(2));
}

mixUp('mix', 'pod');
mixUp('dog', 'dinner')

// Fix Start
console.log("----- FixStart -----");

/*
Create a function called fixStart. It should take a single argument, a string,
and return a version where all occurences of its first character have been
replaced with '*', except for the first character itself. You can assume that
the string is at least one character long.
*/

const fixStart = function(str) {
  const letterStart = str.slice(0,1);
  const lettersEnd = str.slice(1).replace(new RegExp(letterStart, 'g'), "*");
  const result = letterStart + lettersEnd;
  console.log(result)
}

fixStart('babble');


// Verbing
console.log("----- Verbing -----");

/*
Create a function called verbing. It should take a single argument, a string.
If its length is at least 3, it should add 'ing' to its end, unless it already
ends in 'ing', in which case it should add 'ly' instead. If the string length
is less than 3, it should leave it unchanged.
*/

const verbing = function(str) {
  if (str.length < 3) {
    if (str.substr(str.length - 3) === "ing") {
      str += "ly";
    } else {
      str += "ing";
    }
  }
  console.log(str);
}

verbing('dy');
verbing('swim');
verbing('swiming');


// Not Bad
console.log("----- NotBad -----");

/*
Create a function called notBad that takes a single argument, a string.
- It should find the first appearance of the substring 'not' and 'bad'.
- If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad'
  substring with 'good' and return the result.
- If it doesn't find 'not' and 'bad' in the right sequence (or at all), just
  return the original sentence.
*/

const notBad = function(str) {
  const index_not = str.indexOf("not");
  const index_bad = str.indexOf("bad");

  if (index_not < index_bad && index_not != -1 && index_bad != -1) {
    const slice = str.slice(index_not, index_bad + 3)
    str = str.replace(slice, "good");
  }

  console.log(str)
}


notBad('This dinner is not that bad!') // 'This dinner is good!'
notBad('This dinner is bad that not!')
notBad('This movie is not so bad!') // 'This movie is good!'
notBad('This dinner is bad!') // 'This dinner is bad!'
