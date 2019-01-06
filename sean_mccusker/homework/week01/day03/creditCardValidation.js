/*

Credit Card Validation

You're starting your own credit card business. You've come up with a new way to
validate credit cards with a simple function called validateCreditCard that
returns true or false.

Here are the rules for a valid number:

Number must be 16 digits, all of them must be numbers
You must have at least two different digits represented
(all of the digits cannot be the same)
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
Hint: Remove the dashed from the input string before checking if the input
credit card number is valid.

Bonus: Return an object indicating whether the credit card is valid, and if not,
what the error is

{ valid: true, number: 'a923-3211-9c01-1112' }
{ valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
Double Bonus: Make your credit card scheme even more advanced! What are the
rules, and what are some numbers that pass or fail? Ideas: check expiration date!
Check out the Luhn Algorithm for inspiration.

*/

//console.log(`Is there anybody out there?`);

function validateCreditCard(creditCardNum) {


  if(creditCardNum.length !== 16) { // Has to be exactly 16 digits
    return false;
  }


  for (var i = 0; i < creditCardNum.length; i++) { // There cannot be non-numeric characters

    var currentNumber = creditCardNum[i]; // Stores the current credit card number


    currentNumber = Number.parseInt(currentNumber); // Turns the number from a "string" to an integer


    if (!Number.isInteger(currentNumber)) { // Verifies that the character is an integer
      return false;
    }
  }


  var obj = {};
  for (var i = 0; i < creditCardNum.length; i++) { // The credit card number must have at least two different integers.
    obj[creditCardNum[i]] = true;
  }
  if (Object.keys(obj).length < 2){
    return false;
  }


  if (creditCardNum[creditCardNum.length - 1] % 2 !== 0) { // The final character has to be an even integer.
    return false;
  }


  var sum = 0;
  for (var i = 0; i < creditCardNum.length; i++) { // The sum of all the digits must be > 16.
    sum += Number(creditCardNum[i]);
  }
  if (sum <= 16) {
    return false;
  }

  return true;
};


console.log(validateCreditCard('9999999988880000'));
console.log(`9999999988880000 validates as ${ validateCreditCard('9999999988880000') } because the credit card number has 16 digits, sum of credit card number is > 16 and the number ends in an even number.`);
console.log(`\n`);
console.log(validateCreditCard('6666666666661666'));
console.log(`6666666666661666 validates as ${ validateCreditCard('6666666666661666') } because the credit card number has 16 digits, sum of credit card number is > 16 and the number ends in an even number.`);
console.log(`\n`);
console.log(validateCreditCard('a92332119c011112'));
console.log(`a92332119c011112 validates as ${ validateCreditCard('a92332119c011112') } because it has invalid character types.`);
console.log(`\n`);
console.log(validateCreditCard('1111111111111110'));
console.log(`1111111111111110 validates as ${ validateCreditCard('1111111111111110') } because the sum of credit card number is <= 16.`);
console.log(`\n`);
console.log(validateCreditCard('1111111111111111'));
console.log(`1111111111111111 validates as ${ validateCreditCard('1111111111111111') } because the sum of credit card number is <= 16.`);
console.log(`\n`);
console.log(validateCreditCard('6666666666666661'));
console.log(`6666666666666661 validates as ${ validateCreditCard('6666666666666661') } because the last number is odd.`);
