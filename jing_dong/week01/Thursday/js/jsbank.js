console.log("66666");
/*In this homework, you'll create a basic bank in Javascript. The bank has many
accounts and the following capabilities that you need to write.

Bank
There is only one bank. This bank has an array of accounts. The bank needs a
method that will return the total sum of money in the accounts. It also needs an
addAccount method that will enroll a new account at the bank and add it to the
array of accounts. There is no need to create additional functions of the bank
to delete accounts, etc.

The bank has many accounts. Accounts should be objects that all share a set of
common functionality.

Accounts
Accounts have a current balance and owner's name. You should be able to deposit
or withdraw from an account to change the balance.

There is no need to write a user interface. Make sure functions return values --
you may also have your functions console.log() values to help you see your code
working.

You should write a basic story through a series of JavaScript commands that shows
that the methods do indeed work as expected: add some accounts, show the total
balance, make some deposits and withdrawals, show the new total balance.

Tips
Don't overthink this. Shorter code is probably the answer.*/


// Criteria
// BANK :
// bank has an array of account
// need method to return total money in accounts
// need addAccount method will enroll new account and add it to the array of Accounts
// bank has many accounts, accounts shoud be objects that share a set of common functionality.

// ACCOUNT :
// accounts have a current balance and owner's names
// have deposit or withdraw function and able to change the balance

// FUNCTION :
// add some account
// show total balance
// deposite and withdraw are able to inter change
// show new total balance

let bank = {
  {
    currentBalance: 1000,
    ownersName: "AA"
  },

  {
    currentBalance: 2000,
    ownersName: "BB"
  },

  {
    currentBalance: 80.25,
    ownersName: "CC"
  }

};

//create a function that goes loops the array and adds all currentBalance together which will equal to total sum of money in the accounts

const totalSum = function(arr) {
  let total = 0; //create variable to store the result from the loop
    for (i = 0; i < arr.length; i++) { // i whole object bank
      total = total + arr[i].currentBalance; //reference property in object i using dot notation
    } return total
};

let newAccount = {
  currentBalance: 5000,
  ownersName: "DD"
}

let addAccount = function(newAccount) {
  bank.push(newAccount);
  return bank;
}

//

const withdrawAccount = function(name, money) {
   let newBalance = bank.currentBalance + money;
   return
}



const depositAccount = function() {name, money}
