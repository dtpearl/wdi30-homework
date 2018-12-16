
/*
----------
PSEUDOCODE
----------
- function returns true or false;
- all elements must be digits;
- final digit must be even;
- sum of all digits must be greater than 16;

*/

const creditCards = {
  card1: '1111-2222-3333-4444',
  card2: '111a-2222-3333-5555',
};

//// Extract values from the object.
let creditCardStringArray = Object.values( creditCards );
// console.log(creditCardStringArray);


//// replace(/-/g, "") Removes hyphen from string. Ask Joel to explain syntax.
const noHyphenInCardNumber = creditCardStringArray[0].replace(/-/g, "");

//// +( str ) turns string into float.
const floatedCardNumber = +(noHyphenInCardNumber);

//// splits card number into individual floats within an array.
const splitCardNumber = function (creditCardNumber) {
  let digitArray = [];
  stringedNumber = creditCardNumber.toString();
  for (let i = 0; i < stringedNumber.length; i++) {
    digitArray.push(+stringedNumber.charAt(i));
  };
  return digitArray;
};

const cardNumberArray = splitCardNumber(floatedCardNumber);

//// LENGTH OF CARD NUMBER
console.log(cardNumberArray.length);

//// SUM OF CARD'S INDVIDUAL DIGITS
const sumDigitArray = function (array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  };
  return sum;
};

console.log(sumDigitArray(cardNumberArray));





const validateCreditCard = function (cardNum) {

};

console.log(creditCards.card1);
const noHyphenInCard = creditCards.card1.replace(/-/g, "");
