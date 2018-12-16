/*

Define a function reverseString that computes the reversal of a string.
For example, reverseString("jag testar") should return the string "ratset gaj".

*/

const reverseString = function (string) {
  return string.split('').reverse().join('');
};

console.log(reverseString('apple'));


/*

--------------
FUNCTION NOTES
--------------

Arrays have a method called reverse( ). The tutorial is hinting at using this.

To convert a string into an array of characters (in reality they're just single
character strings), you can use the method split( ) with an empty string as the delimiter.

In order to convert the array back into a string, you can use the method join( ) again,
with an empty string as the argument.

Using these concepts, you'll find a common solution to reversing a string.

*/
