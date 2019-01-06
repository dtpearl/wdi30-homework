//URL = https://gist.github.com/wofockham/dacf2da17c743afb2b17

// Square stuff
const rectangleA = {
  length: 4,
  width: 4
};

const isSquare = function (a,b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}

const area = function (a,b) {
  return (a*b);
}

const perimeter = function (a,b) {
  return (a+a+b+b);
}

//Triangle stuff
const isEquilateral = function (a,b,c) {
  if (a === b && b === c) {
    return true;
  } else {
    return false;
  }
}

const isIsosceles = function (a,b,c) {
  if (a===b || a===c || b===case) {
    return true;
  } else {
    return false;
  }
}

const area = function (a,b,c) {
  //do this later
}

const isObtuse = function (a,b,c) {
  //do this later
}



// CASH REGISTER STUFF
const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

const cashRegister = function (shoppingCart) {
  var total = 0;
  Object.values(shoppingCart).forEach(function(value) {
    const price = parseFloat(value);
    total = total + price;
  });
  console.log(`Your total is $${total}`);
}

//CREDIT CARD STUFF
const validateCreditCard = function (creditCard) {

  // Split string into array of numbers
  var creditCardArray = creditCard.split('').map(Number);

  // Filter for Integers
  creditCardArray = creditCardArray.filter(cardNumber => Number.isInteger(cardNumber));

  // Check for 16 numbers
  if (creditCardArray.length !== 16) { return "Credit card invalid - Must be 16 digits"; }

  // Check for sum of at least 16
  if (creditCardArray.reduce((a, b) => a + b, 0) < 16) { return "Credit card invalid - Sum of digits must be greater than 16"; }

  // Must have at least two different digits represented
  const allValuesAreSame = creditCardArray => creditCardArray.every( n => n === creditCardArray[0] )
  if (allValuesAreSame(creditCardArray)) { return 'Credit card invalid - Must be at least 2 different Int' }

  // Check for last digit to be even
  const lastDigit = creditCardArray.slice(-1);
  if (lastDigit[0] %= 2) { return 'Credit card invalid - Last number must be even'}

  return "Credit card is valid"
}

// BANK STUFF
const bank = [{

  bankAccounts : [
    {
    accountHolder: "Jim",
    accountBalance: 1.00
    },
    {
    accountHolder: "Jam",
    accountBalance: 2.00
    },
    {
    accountHolder: "Jin",
    accountBalance: 3.00
    }
  ];

  var bankTotal = 0;
  for (var i = 0; i < bankAccounts.length; i++) {
    bankTotal = bankTotal + bankAccounts[i].accountBalance;
  }
  console.log(bankTotal);

  const addAccount = function(account) {
    bankAccounts.push(account);
  }
}];

var newAccount = {  accountHolder: "Nate", accountBalance: 5.00};
