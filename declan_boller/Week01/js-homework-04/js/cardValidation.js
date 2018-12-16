/*

Credit Card Validation

You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.

Here are the rules for a valid number:

    Number must be 16 digits, all of them must be numbers
    You must have at least two different digits represented (all of the digits cannot be the same)
    The final digit must be even
    The sum of all the digits must be greater than 16

*/

function validateCreditCard(cardNumber) {
  cardNumber = prompt(`Enter Card number`);
  // Remove Hyphen
  let removeHyphen = cardNumber.replace(/-/g, '');
  let newCardNumber = removeHyphen;
  
  // Assign Variables for Cleaner Function
  // Checks length of string
  let numberLength = newCardNumber.length === 16;

  // Checks last digit is even number
  let evenLastChar = newCardNumber.slice(-1) % 2 === 0;

  // Splits string into individual strings then adds them together
  function checkSum(string) {
    string = string.split('');
    let sum = 0;
    for (let i = 0; i < string.length; i++) {
      sum += parseInt(string[i], 0);
    }
    return sum;
  };
  
  let sumOf = checkSum(newCardNumber) >= 16;
  
  // Checks for repetions of a number between 0-9;
  function hasRepeatedNumbers(str) {
    var patt = (/^([0-9])\1+$/);
    var result = patt.test(str);
    return result;
  }
  
  let error_code;
  
  if(!numberLength){
    error_code = `wrong_length`;
  } if(!evenLastChar){
    error_code = `last_digit_not_even`;
  } if(!sumOf){
    error_code = `code_not_equal_to_16`;
  } if(hasRepeatedNumbers(newCardNumber)){
    error_code = `Requires_two_or_more_different_digits`;
  };

  // Validate Card;
  if (numberLength && evenLastChar && sumOf && !hasRepeatedNumbers(newCardNumber)) {
    alert(`Valid: ${true}, Card Number: ${cardNumber}`);
  } else {
  alert(`Valid: ${false}, Card Number: ${cardNumber}, Error Code: ${error_code}.`);
    };
}

validateCreditCard();

//validateCreditCard('9999-9999-8888-0000'); // Valid Numbers
//validateCreditCard('6666-6666-6666-1666'); // Valid Numbers
//
//console.log(validateCreditCard('4594-a389-855r-9e88')); // Invalid Chars
//console.log(validateCreditCard('4444-4444-4444-4444')) // Repeats Number
//console.log(validateCreditCard('1111-1111-1111-1110'));
//console.log(validateCreditCard('6666-6666-6666-6661'));
