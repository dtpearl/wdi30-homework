/*

Write a function that takes a character (i.e. a string of length 1)
and returns true if it is a vowel, false otherwise.

*/

const vowelFinder = function (character) {
  if (character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u') {
    return true;
  } else {
    return false;
  }
};



console.log(vowelFinder('a'));
console.log(vowelFinder('b'));
console.log(vowelFinder('e'));
console.log(vowelFinder('f'));
