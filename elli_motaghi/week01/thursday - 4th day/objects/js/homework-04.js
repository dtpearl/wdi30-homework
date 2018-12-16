// you're starting your own credit card business. You've come up with a new way to validate
// credit cards with a simple function called validateCreditCard that returns true or false.

// Here are the rules for a valid number:

// Number must be 16 digits, all of them must be numbers
// You must have at least two different digits represented (all of the digits cannot be the same)
// The final digit must be even
// The sum of all the digits must be greater than 16
// The following credit card numbers are valid:

// 9999-9999-8888-0000
// 6666-6666-6666-1666
// The following credit card numbers are invalid:

// a923-3211-9c01-1112 invalid characters
// 4444-4444-4444-4444 only one type of number
// 1111-1111-1111-1110 sum less than 16
// 6666-6666-6666-6661 odd final number

// for remove (-) between numbers
function validateCreditCard(creditCardNumber) {
    let pureNum = creditCardNumber.replace(/-/g, '');

    // 1- the number of digits must be 16.
    if (pureNum.length !== 16) {
        return { Valid: false, number: creditCardNumber, error: 'wrong-numberOfDigit' };
    }
    // 2- all of them must be numbers.
    if (isNaN(pureNum)) {
        return { Valid: false, number: creditCardNumber, error: 'wrong-allNumber' };
    }
    // 3- There must be at least two different digits.
    let obj = {};
    for (let i = 0; i < pureNum.length; i++) {
        obj[pureNum[i]] = true;
    }
    if (Object.keys(obj).length < 2) {
        return { Valid: false, number: creditCardNumber, error: 'wrong-differentNumber' };
    }
    // 4- the last digit must be even.
    if (pureNum[pureNum.length - 1] % 2 != 0) {
        return { Valid: false, number: creditCardNumber, error: 'wrong-finalDigitEven' };
    }
    // 5- The sum of all the digits must be greater than 16.
    let sum = pureNum.split('').reduce((a, b) => a + b, 0);
    if (sum <= 16) {
        return { Valid: false, number: creditCardNumber, error: 'wrong-sumNum' };
    }
    
    return { Valid: true, number: creditCardNumber }
};

console.log(validateCreditCard('0070-0000-0000-0000'));

