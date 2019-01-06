/*

MixUp

Create a function called mixUp. It should take in two strings, and return the
concatenation of the two strings (separated by a space) slicing out and swapping
the first 2 characters of each. You can assume that the strings are at least 2
characters long. For example:

  mixUp('mix', 'pod'): 'pox mid'
  mixUp('dog', 'dinner'): 'dig donner'

Look up the JavaScript string reference to find methods which may be useful!

*/

console.log('Is there anybody out there?');

const mixUp = function (a, b) {
  console.log(b.slice(0, 2) + a.slice(2) + " " + a.slice(0, 2) + b.slice(2));
}

mixUp('mix', 'pod');
mixUp('dog', 'dinner');
