console.log('Alright, alright, alright!');

/*

Credit Card Validation
You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.

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
Double Bonus: Make your credit card scheme even more advanced! What are the rules, and what are some numbers that pass or fail? Ideas: check expiration date! Check out the Luhn Algorithm for inspiration.

*/

const validateCreditCard = function (ccNum) {
  const unchangedNum = ccNum;
  const testString = ccNum.replace(/\D/g,'');    // Save number as a string for comparing all digits. Use replace(a,b) to remove all '-' and non-didgets.
  const testNum = Number.parseInt(testString);   // Turn ccNum into a whole number.
  let invalidReason = '';

  //return testString;
  //return testNum;

  // Function to check if the credit card contains at least two different digits.
  const sameDigits = function () {
    let matchCount = 0;
    for (var i = 1; i < testString.length; i++) {
      if (testString[i] === testString[0]){
        matchCount++;
      }
      }

    if (matchCount === (testString.length - 1)) {
      return true;
    } else {
      return false;
    }
  };

  // Function to check sum of digits is greater than 16.
  const checkDigitSum = function () {
    let digitSum = 0;
    for (var i = 0; i < testString.length; i++) {
      digitSum += Number.parseInt(testString[i]);
    }
    if ( digitSum > 16 ) {
      return true;
    } else {
      return false;
    }
  };

  if ( testString.length < 16 ) {
    invalidReason += 'Not a valid credit card. Invalid Characters included.';
    console.log(`${unchangedNum}: ${invalidReason}`);
    return false;
  } else if ( testNum % 2 === 1 ) {
    invalidReason += 'Not a valid credit card. Not an even number.';
    console.log(`${unchangedNum}: ${invalidReason}`);
    return false;
  } else if ( sameDigits() ) {
    invalidReason += 'Not a valid credit card. All digits are the same.';
    console.log(`${unchangedNum}: ${invalidReason}`);
  } else if ( !checkDigitSum() ) {
    invalidReason += 'Not a valid credit card. Digit Sum is less than 16.';
    console.log(`${unchangedNum}: ${invalidReason}`);
  } else {
    console.log(`${unchangedNum} is a valid credit card number.`)
  }

};



validateCreditCard('asd1-3453-3454-4567');
validateCreditCard('4444-4444-4444-4445');
validateCreditCard('2222-2222-2222-2222');
validateCreditCard('1111-1111-1111-1110');
validateCreditCard('1234-3456-4567-2346');
