/*

You're starting your own credit card business.
You've come up with a new way to validate credit cards with a
simple function called validateCreditCard that returns true or false.

Here are the rules for a valid number:

Number must be 16 digits, all of them must be numbers
You must have at least two different digits represented (all of the digits cannot be the same)
The final digit must be even
The sum of all the digits must be greater than 16

Hint: Remove the dashes from the input string before checking if
the input credit card number is valid.

Bonus: Return an object indicating whether the credit card is valid,
and if not, what the error is.

*/

const validateCreditCard = function(cardNumber) {
  // take dashes out of cardNumber
  const cleanCardNo = cardNumber.replace(/-/g, '');
  let returnMessage = {
    valid: true,
    number: cardNumber,
  }

  let errorMessages = []

  const returnError = function(errorMessage) {
    returnMessage.valid = false;
    errorMessages.push(errorMessage);
    returnMessage.error = errorMessages.join("; ");
  }

  // check if 16 digits
  if (cleanCardNo.length < 16) {
    returnError("Not enough digits");
  }

  // check if two different digits
  const firstDigit = cleanCardNo[0];
  //create regex expression
  var re = new RegExp(firstDigit,"g");
  if (cleanCardNo.match(re).length === 16){
    returnError("Must have two different digits");
  }

  // check if all characters are numbers
  for (let i = cleanCardNo.length - 1; i >= 0; i--) {
    const checkCharCode = cleanCardNo.charCodeAt(i);
    if (checkCharCode < 48 || checkCharCode > 57) {
      returnError("Must only contain numbers");
    }
  }

  // check if final digit is even
  if (cleanCardNo[15] % 2 !== 0) {
    returnError("Final digit must be even");;
  }

  // check if sum of digits is greater than 16
  let sumOfDigits = 0;
  for (let j = 0; j < 16; j++) {
    sumOfDigits += Number(cleanCardNo[j]);
  }
  if (sumOfDigits < 16) {
    returnError("Sum of digits must be greater than 16");
  }

  // return object with return message
  return returnMessage
};

console.log(validateCreditCard("1111-1111-1111-1122"));
