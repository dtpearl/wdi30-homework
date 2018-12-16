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

// Setup examples.

const card1 = "9999-9999-8888-0000";
const card2 = "6666-6666-6666-1666";
const card3 = "a923-3211-9c01-1112";
const card4 = "4444-4444-4444-4444";
const card5 = "1111-1111-1111-1110";
const card6 = "6666-6666-6666-6661";

// function validateCreditCard.
const validateCreditCard = function (str) {
  const number = str.replace(/-/g, "");
  const obj = {valid: false, number: str}
//check for invaild characters.
  if (number.search(/\D/) === 0) {
    obj.error = "invaild_characters";
    return obj;
  }
//check for only one type of number.
  let a = number[0];
  for (i = 0; i < number.length; i++) {
    if (a !== number[i]) {
      a = number[i];
      break;
    }
  }
  if (a === number[0]) {
    obj.error = "only_one_type_of_number";
    return obj;
  }
//check for sum less than 16
  const add = function (str) {
    let sum = 0;
    let splitStr = str.split("");
    for (i = 0; i < splitStr.length; i++) {
      sum += parseInt(splitStr[i]);
    }
    return sum;
  }
  if (add(number) < 16) {
    obj.error = "sum_of_number_less_than_16";
    return obj;
  }
//check for odd final number
  const finalNumber = parseInt(number[15]);
  if (finalNumber % 2 !== 0) {
    obj.error = "odd_final_number";
    return obj;
  }
// if the card is valid
  obj.valid = true;
  return obj;
}

console.log(validateCreditCard(card1));
console.log(validateCreditCard(card2));
console.log(validateCreditCard(card3));
console.log(validateCreditCard(card4));
console.log(validateCreditCard(card5));
console.log(validateCreditCard(card6));
console.log("\n\n\n");

// DOUBLE BONUS!!!!!!!!!!!!
const dateChecker = function (str) {
// check if the user has entered month before year
  if (str.indexOf("-") !== 2) {
    console.log("Wrong expiry date format, try again!");
    return;
  }
// check if the user has entered the year as yyyy
  const date = str.replace(/-/g, "");
  if (date.length !== 6) {
    console.log ("Wrong expiry date format, try again!");
    return;
  }
// check if the card has expired
  const month = parseInt(date.substring(0,2));
  const year = parseInt(date.substring(2));
  if (year > (new Date()).getFullYear()) {
    console.log("Great, your card is not expired.");
    return;
  } else if (year === (new Date()).getFullYear()) {
    if (month >= (new Date()).getMonth() + 1) {
      console.log("Great, your card is not expired.");
      return;
    } else {
      console.log("Your card has already expired.");
      return;
    }
  } else {
    console.log("Your card has already expired.");
  }
}


const date1 = "12-2018";
const date2 = "11-2022";
const date3 = "01-2018";
const date4 = "12-1998";
const date5 = "12-20";
const date6 = "2019-12";
