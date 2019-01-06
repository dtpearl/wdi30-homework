/*
Credit Card Validation
You're starting your own credit card business. You've come up with a new way to validate credit cards
with a simple function called validateCreditCard that returns true or false.

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
Double Bonus: Make your credit card scheme even more advanced! What are the rules, and what are some numbers
that pass or fail? Ideas: check expiration date! Check out the Luhn Algorithm for inspiration.
*/

let toType = function(arr){
    return arr.match("/[0-9]/gi")//typeof(arr);
};
/*let toType = function(arg){
    var regexp = "/[A-Z]/gi";
    var arr = arg.match(regexp);
    return arr
};*/

const isStringPresent = function(cardNumber){
    let typeofvarible = '',result='';
    typeofvarible = cardNumber.map(toType);
    result = typeofvarible.includes('string');
    return result;
 };
const isCardNumberSame = function(cardNumber){
  let result = '';
  result = cardNumber.every( (val, i, arr) => val === arr[0] );
  return result;
};
const generateArray = function(cardNumber){
  let ccnumber = (cardNumber.replace(new RegExp("-", "g"),'')).split('');
  return ccnumber;
};

const validateCreditCard = function(cardNumber){
  let result = '';
  if(cardNumber.length < 16)
  {
    result = 'wrong Length';
    return result;
  }
  if(sumArray(cardNumber) < 16)
  {
    result = 'Card Digits Sum not valid.';
    return result;
  }
  if(cardNumber[cardNumber.length-1] % 2 !== 0)
  {
    result = 'Last Digit is unacceptable';
    return result;
  }
  if(isStringPresent(cardNumber)){
    result = 'Only Numbers allowed.';
    return result;
  }
  if(isCardNumberSame)
  {
    result = 'All Digits in the Card cannot be same.';
    return result;
  }
  return true;
};
const processCardnumber = function(cardNumber){
  //processinput
  let creditcardNumber = generateArray(cardNumber);
  //return creditcardNumber;
  //Validation//
  let result = validateCreditCard(creditcardNumber);
  return (result === true) ? `Valid Card# ${cardNumber}.` : `InValid Card# ${cardNumber}. ${result}`;
};

  console.log(`${processCardnumber('8888-8888-8888-8888')}`);
/*
a923-3211-9c01-1112 invalid characters
4444-4444-4444-4444 only one type of number
1111-1111-1111-1110 sum less than 16
6666-6666-6666-6661 odd final number
*/
