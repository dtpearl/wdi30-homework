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
*/

const is16Digits = function (cardStrNoDash) {
  if(cardStrNoDash.length !== 16) {
    return false;
  }

  for(let i = 0; i < cardStrNoDash.length; i++) {
    if(cardStrNoDash.charAt(i) < '0' || cardStrNoDash.charAt(i) > '9') {
      return false;
    }
  }

  return true;
}

const isAllTheDigitsSame = function(cardStrNoDash) {
  for(let i = 1; i < cardStrNoDash.length; i++) {
    if(cardStrNoDash[0] !== cardStrNoDash[i]) {
      return false;
    }
  }

  return true;
}

const validateCreditCard = function (cardStr) {
  let valid = false;
  let error;

  let cardStrNoDash = cardStr.replace(/-/g, '');

  if (!is16Digits(cardStrNoDash)) {
    return { valid: false, number: cardStr, error: 'Number must be 16 digits, all of them must be numbers'}
  }

  if(isAllTheDigitsSame(cardStrNoDash)) {
    return { valid: false, number: cardStr, error: 'All of the digits cannot be the same!'}
  }

  if(cardStrNoDash[cardStrNoDash.length - 1] % 2 !== 0) {
    return { valid: false, number: cardStr, error: 'Last digit must be even!'}
  }

  let sum = 0;
  for (let i = 0; i < cardStrNoDash.length; i++) {
    sum += Number(cardStrNoDash[i]);
  }
  if(sum <= 16) {
    return { valid: false, number: cardStr, error: 'The sum of all the digits must be greater than 16'}
  }

  return { valid: true, number: cardStr}
}

console.log(validateCreditCard("a923-3211-9c01-1112"));
console.log(validateCreditCard("4444-4444-4444-4444"));
console.log(validateCreditCard("1111-1111-1111-1110"));
console.log(validateCreditCard("6666-6666-6666-6661"));
console.log(validateCreditCard("6666-6666-6666-1666"));
console.log(validateCreditCard("9999-9999-8888-0000"));
