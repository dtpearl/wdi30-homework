/*You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.

Here are the rules for a valid number:

Number must be 16 digits, all of them must be numbers
You must have at least two different digits represented (all of the digits cannot be the same)
The final digit must be even
The sum of all the digits must be greater than 16
The following credit card numbers are valid:

9999-9999-8888-0000
6666-6666-6666-1666
The following credit card numbers are invalid:

a923-3211-9c01-1112 invalid characters
4444-4444-4444-4444 only one type of number
1111-1111-1111-1110 sum less than 16
6666-6666-6666-6661 odd final number
Example

validateCreditCard('9999-9999-8888-0000'); // Returns: true
Hint: Remove the dashed from the input string before checking if the input credit card number is valid.

Bonus: Return an object indicating whether the credit card is valid, and if not, what the error is

{ valid: true, number: 'a923-3211-9c01-1112' }
{ valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
Double Bonus: Make your credit card scheme even more advanced! What are the rules, and what are some numbers that pass or fail? Ideas: check expiration date! Check out the Luhn Algorithm for inspiration.*/
resArr=[]
const card = [
'9999-9999-8888-0000',
'6666-6666-6666-1666',
'a923-3211-9c01-1112',
'4444-4444-4444-4444',
'1111-1111-1111-1110',
'6666-6666-6666-6661'
];

for (var i = 0; i < card.length; i++) {
  let val = true;
  let res={};
  let mistake="";
  let cardClear = card[i].replace(/-/g,"");
  console.log(cardClear);
  if (cardClear.length!=16) {
    val=false;
    mistake+="wrong_length";
  }
  if ((cardClear[cardClear.length-1])%2!=0) {
  val=false;
  mistake+="final digit_odd";
}
let sum=0;
  first=cardClear[0];
  equal=true;
  for (var j = 0; j < cardClear.length; j++) {
  if (isNaN(cardClear.charAt(j))) {
    val=false;
    mistake+="Number is not a digits. ";
  }
  if (cardClear[j]!=first) equal=false;
  try{
    sum+=Number(cardClear[j]);
  }
  catch(ex){
    //val=false;
  }
  // console.log(sum);
}
if (equal) {
  val=false;
  mistake+="Digits are the same. ";
}
//console.log(sum);
if (sum<=16) {
  val=false;
  mistake+="Sum of all the digits_less than 16. ";
}
// let sum=0;
// let cardClear=Number(cardClear);

// sum+=cardClear[i];
// console.log(sum);
console.log(val);
res.valid=val;
res.number=card[i];
if (mistake)res.error=mistake;
resArr.push(res);
}
console.log(resArr);
// console.log(val);
