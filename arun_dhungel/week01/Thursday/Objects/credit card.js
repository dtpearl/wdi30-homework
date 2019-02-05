/*
You're starting your own credit card business. You've come up
with a new way to validate credit cards with a simple function called
validateCreditCard that returns true or false.

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

validateCreditCard('9999-9999-8888-0000'); // Returns: true
Hint: Remove the dashed from the input string before checking if the input credit
card number is valid.

Bonus: Return an object indicating whether the credit card is valid, and if not,
what the error is

{ valid: true, number: 'a923-3211-9c01-1112' }
{ valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
Double Bonus: Make your credit card scheme even more advanced! What are the rules,
and what are some numbers that pass or fail? Ideas: check expiration date!
Check out the Luhn Algorithm for inspiration.
*/
function validateCreditCard(creditCardNum) {

    // The credit card number must be 16 digits in length
    if (creditCardNum.length !== 16) {
        return false;
    }

    // All of the digits must be numbers
    for (let i = 0; i < creditCardNum.length; i++) {
        // store the current digit
        let currentNumber = creditCardNum[i];

        // turn the digit from a string to an integer (if the digit is in fact a digit and not another char)
        currentNumber = Number.parseInt(currentNumber);

        // check that the digit is a number
        if (!Number.isInteger(currentNumber)) {
            return false;
        }
    }

    // The credit card number must be composed of at least two different digits (i.e. all of the digits cannot be the same)
    let obj = {};
    for (let i = 0; i < creditCardNum.length; i++) {
        obj[creditCardNum[i]] = true;
    }
    if (Object.keys(obj).length < 2) {
        return false;
    }

    // The final digit of the credit card number must be even
    if (creditCardNum[creditCardNum.length - 1] % 2 !== 0) {
        return false;
    }

    // The sum of all the digits must be greater than 16
    let sum = 0;
    for (let i = 0; i < creditCardNum.length; i++) {
        sum += Number(creditCardNum[i]);
    }
    if (sum <= 16) {
        return false;
    }

    return true;
};

/**** tests *****/
console.log(validateCreditCard('9999777788880000')); //true
console.log(validateCreditCard('6666666666661666')); //true
console.log(validateCreditCard('a92332119c011112')); //false
console.log(validateCreditCard('4444444444444444')); //false
console.log(validateCreditCard('1211111111111112')); //true