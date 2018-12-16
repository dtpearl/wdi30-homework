// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.

function maxOfTwoNumbers(a,b){
 if(a>b){
   return a;
 } else {
   return b;
 }

}
console.log(maxOfTwoNumbers(5,7));
console.log(maxOfTwoNumbers(9,10));

// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
function maxOfThree(x,y,z){
 if(x>y){
   return x;
 } else if (x>z){
     return x;
   }
   else {
   return z;
 }
}
console.log(maxOfTwoNumbers(5,7));
console.log(maxOfThree(9,10,6));
console.log(maxOfThree(19,10,6));

// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
function char(str,) 
{
 var letter_Count = 0;
 for (var i = 0; i < str.length; i++)
 {
    if (str.charAt(i) == a || str.charAt(i) === e || str.charAt(i) === i || str.charAt(i)===o || str.charAt(i)===u)
      {
      return true;
      }
  }
}

console.log(char('farwa', 'o'));
