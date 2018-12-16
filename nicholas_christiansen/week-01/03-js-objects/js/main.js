console.log('JS-HOMEWORK-OBJECTS -----');

// Geometry Function Lab
console.log('----- Geometry Function Lab -----');

// Part 1, Rectangle
console.log('---------- Part 1, Rectangle -----');

/**
 * Given the following a rectangle object like the one below, write
 * the following functions:
 * - isSquare - Returns whether the rectangle is a square or not
 * - area - Returns the area of the rectangle
 * - perimeter - Returns the perimeter of the rectangle
 */

const isSquare = function(obj) {
  // true if dimensions equal
  return obj.length === obj.width;
}

const areaRectangle = function(obj) {
  // area = width x length
  return obj.length*obj.width;
}

const perimeter = function(obj) {
  // perimeter = 2 x (length + width)
  return 2 * (obj.length+obj.width);
}

const rectangleA = {
  length: 4,
  width: 4
};

console.log(`Is it a square? ${ isSquare(rectangleA) }`);
console.log(`What's the area of this rectangel? ${ areaRectangle(rectangleA) }`);
console.log(`What's the perimter of this rectangle? ${ perimeter(rectangleA) }`);


// Part 2, Triangle
console.log('---------- Part 2, Triangle -----');

/**
 * Given the following a triangle object like the one below, write the
 * following functions:
 * - isEquilateral - Returns whether the triangle is equilateral or not
 * - isIsosceles - Returns whether the triangle is isosceles or not
 * - area - Returns the area of the Triangle
 * - isObtuse - Returns whether the triangle is obtuse or not
 */

 const isTriangle = function(obj) {
   // Array of all sides
   const sidesAll = [obj.sideA, obj.sideB, obj.sideC]
   // Get max side length
   const sideMax = Math.max.apply(null, sidesAll)
   // Array of remaining sides
   const sidesOther = sidesAll.filter(s => s!= sideMax);
   // Is the max side length greater than the sum of the other two side lengths
   if (sideMax > sidesOther.reduce((a, b) => a + b, 0)) {
     return false
   } else {
     return true
   }

 }

const isEquilateral = function(obj) {
  // Check if all sides are equal
  return (
    isTriangle(obj)
    && obj.sideA === obj.sideB
    && obj.sideA === obj.sideC
    && obj.sideB === obj.sideC
  );
}

const isIsosceles = function(obj) {
  // Check if all sides are equal
  return (
    isTriangle(obj)
    && (
      obj.sideA === obj.sideB
      || obj.sideA === obj.sideC
      || obj.sideB === obj.sideC
    )
  );
}


// Herons formula
const areaTriangle = function(obj) {
  // Check if triangle
  if (isTriangle(obj)) {
    // Semi-perimeter calculation
    const S = (obj.sideA + obj.sideB + obj.sideC) / 2;
    // Herron's formula
    const area = Math.sqrt(S * (S - obj.sideA) * (S - obj.sideB) * (S - obj.sideC) );
    // output
    return area;
  } else {
    // else output
    return 'not triangle'
  }
}

const lawOfCosines = function(a ,b, c) {
  // "angle" version of the Law of Cosines
  return  Math.acos((a**2 + b**2 - c**2) / (2*a*b)) ;
}

const isObtuse = function(obj) {
  // Test all angles of triangle to check if and greater than 90 degrees
  if (
    isTriangle(obj)
    || lawOfCosines(obj.sideA, obj.sideB, obj.sideC) > Math.PI/2
    || lawOfCosines(obj.sideB, obj.sideC, obj.sideA) > Math.PI/2
    || lawOfCosines(obj.sideC, obj.sideA, obj.sideB) > Math.PI/2
  ) {
    return true
  } else {
    return false
  }
}

const triangleA = {
  sideA: 11.6,
  sideB: 7.4,
  sideC: 15.2
};

console.log(`Is triangle? ${ isTriangle(triangleA) }`);
console.log(`Is this an equilateral triangle? ${ isEquilateral(triangleA) }`);
console.log(`Is this an isosceles triangle? ${ isIsosceles(triangleA) }`);
console.log(`What's the area of the triangle? ${ areaTriangle(triangleA) }`);
console.log(`Is this an obtuse triangle? ${ isObtuse(triangleA) }`);


// The Cash Register
console.log('----- The Cash Register -----');

/**
 * Write a function called cashRegister that takes a shopping cart
 * object. The object contains item names and prices (itemName:
 * itemPrice). The function should return the total price of the
 * shopping cart.
 */

const cashRegister = function(obj) {
  // Create array of object keys
  const keys = Object.keys(obj);
  // Initialise total output
  let total = 0;
  // Loop though each key in object, convert to float and add to total
  for (let i = 0; i < keys.length; i++) {
    total += parseFloat(obj[keys[i]]);
  }

  return total;
}

const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

console.log(cashRegister(cartForParty));


// Credit Card Validation
console.log('----- Credit Card Validation -----');

/**
 * You're starting your own credit card business. You've come up with a new way
 * to validate credit cards with a simple function called validateCreditCard
 * that returns true or false.

 * Here are the rules for a valid number:
 * - Number must be 16 digits, all of them must be numbers
 * - You must have at least two different digits represented (all of the digits cannot be the same)
 * - The final digit must be even
 * - The
 */

const validateCreditCard = function(number) {
  // Initialise objects
  let obj = { number }

  // create array of digits in 'Number'
  const array = number.match(/\d+/g).join('').split('');
  // Initialse sum
  let sum = 0;
  // Convert string digits to integers and calculate sum of all numbers
  for (var i = 0; i < array.length; i++) {
    array[i] = parseInt(array[i]);
    sum += array[i];
  }

  // Must be 16 numbers
  if ( array.length !== 16 ) {
    obj.valid = false;
    obj.error = 'wrong length';
  // Must at least 2 unique numbers
  } else if ([...new Set(array)].length < 2) {
    obj.valid = false;
    obj.error = 'unique number count';
  // Final digit must be even
  } else if (array.pop() % 2 !== 0) {
    obj.valid = false;
    obj.error = 'even final digit';
  // Sum of all the digits must be greater than 16
} else if (sum < 16) {
    obj.valid = false;
    obj.error = 'digit sum';
  } else {
    obj.valid = true;
  }
  return obj;
 }

creditCards = [
  '9999-9999-8888-0000',
  '9999-9999-8888-0000',
  'a923-3211-9c01-1112',
  '4444-4444-4444-4444',
  '1111-1111-1111-1110',
  '6666-6666-6666-6661',
  '7992-7398-713'
]

for (var i = 0; i < creditCards.length; i++) {
  console.log(creditCards[i])
  console.log(validateCreditCard(creditCards[i]));
}

console.log('---------- Luhn Algorithm -----');

const checkLuhn = function(number) {

  // create array of digits in 'Number'
  const array = number.match(/\d+/g).join('').split('');

  // Convert string digits to integers and calculate sum of all numbers
  for (var i = 0; i < array.length; i++) {
    array[i] = parseInt(array[i]);
  }

  // Remove 'x' digit from array
  const x = array.pop();

  // Initialise sum
  let sum  = 0;

  // Loop through all values in array
  for (var i = 0; i < array.length; i++) {

    // Initialise digit
    let digit = array[i];

    // check index of digit is even
    if (i % 2 !== 0) { digit *= 2; }

    // if digit is greater than 9, subtract 9
    if (digit > 9) { digit -= 9; }

    // sum of all digits
    sum += digit;

  }

  // multiply sum by 9
  sum *= 9

  // check if modulus equals to x, and return boolean
  return sum % 10 === x;
}

for (var i = 0; i < creditCards.length; i++) {
  console.log(creditCards[i])
  console.log(checkLuhn(creditCards[i]));
}


// Credit Card Validation
console.log('----- JavaScript Bank -----');

/**
 * In this homework, you'll create a basic bank in Javascript. The bank has
 * many accounts and the following capabilities that you need to write.

 ** Bank
 * There is only one bank. This bank has an array of accounts. The bank needs
 * a method that will return the total sum of money in the accounts. It also
 * needs an addAccount method that will enroll a new account at the bank and
 * add it to the array of accounts. There is no need to create additional
 * functions of the bank to delete accounts, etc.

 * The bank has many accounts. Accounts should be objects that all share a set
 * of common functionality.

 ** Accounts
 * Accounts have a current balance and owner's name. You should be able to
 * deposit or withdraw from an account to change the balance.

 * There is no need to write a user interface. Make sure functions return
 * values -- you may also have your functions console.log() values to help
 * you see your code working.

 * You should write a basic story through a series of JavaScript commands
 * that shows that the methods do indeed work as expected: add some accounts,
 * show the total balance, make some deposits and withdrawals, show the new
 * total balance.
 */
let bank = {
  // No user accounts yet
  accounts: [],

  sumAccount: function() {
    // Initialise total
    let sum = 0;
    // Iterate through all accounts
    for (let i = 0; i < this.accounts.length; i++) {
      // sum all balances
      sum += this.accounts[i].balance;
    }

    return sum;
  },

  // Add new account
  addAccount: function(name, balance) {
    // Create new object for new account
    const obj = {
      name,
      balance
    }
    // Append to accounts
    this.accounts.push(obj);
  },

  // Deposit amount into account using name
  depositAccount: function(name, amount) {
    // find index of account holder
    const index = bank.accounts.findIndex( s => s.name == name );
    // depoist into account holders balance
    bank.accounts[index].balance += amount
  },

  // Withdraw amount from account using name
  withdrawAccount: function(name, amount) {
    // find index of account holder
    const index = bank.accounts.findIndex( s => s.name == name );
    // withdraw account holders balance
    bank.accounts[index].balance += amount
  }

}

// Sum account total
console.log(`Bank: $${ bank.sumAccount() }`);

// Add accounts
bank.addAccount('user1', 1);
console.log(bank.accounts[bank.accounts.length-1]);

bank.addAccount('user2', 10);
console.log(bank.accounts[bank.accounts.length-1]);

bank.addAccount('user3', 100);
console.log(bank.accounts[bank.accounts.length-1]);

// Sum account total
console.log(`Bank: $${ bank.sumAccount() }`);

// Deposit into account
console.log('User1 deposited $20 ');
bank.depositAccount('user1', 20);
console.log(bank.accounts[bank.accounts.findIndex( s => s.name == "user1" )]);

// Withdraw from account
console.log('User3 withdrew $50 ');
bank.withdrawAccount('user3', 50);
console.log(bank.accounts[bank.accounts.findIndex( s => s.name == "user3" )]);

// Sum account total
console.log(`Bank: $${ bank.sumAccount() }`);
