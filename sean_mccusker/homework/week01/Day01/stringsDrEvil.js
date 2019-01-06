/*
Strings

These exercises will test your knowledge of string functions, conditionals,
and arrays. For many of them, you will want to consult the JavaScript strings
reference to find useful string methods to call.

DrEvil

Create a function called DrEvil. It should take a single argument, an amount,
and return ' dollars', except it will add '(pinky)' at the end if the amount
is 1 million.

For example:

  DrEvil(10): 10 dollars
  DrEvil(1000000): 1000000 dollars (pinky)

  */
console.log('Is there anybody out there?');

const drEvil = function (amount) {
  if (amount == 1000000) {
    console.log(amount + ' dollars (pinky)');
  }
  else {
    console.log(amount + ' dollars');
  }
}

drEvil(10);
drEvil(1000000);
