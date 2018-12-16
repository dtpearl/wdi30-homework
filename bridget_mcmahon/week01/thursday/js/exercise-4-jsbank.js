/*

In this homework, you'll create a basic bank in Javascript.
The bank has many accounts and the following capabilities that you need to write.

Bank
There is only one bank. This bank has an array of accounts.
The bank needs a method that will return the total sum of
money in the accounts. It also needs an addAccount method that
will enroll a new account at the bank and add it to the array of accounts.
There is no need to create additional functions of the bank to delete accounts, etc.

The bank has many accounts. Accounts should be objects that all share a
set of common functionality.

Accounts
Accounts have a current balance and owner's name. You should be able to
deposit or withdraw from an account to change the balance.

There is no need to write a user interface. Make sure functions return values
-- you may also have your functions console.log() values to help you see your code working.

You should write a basic story through a series of JavaScript commands that
shows that the methods do indeed work as expected: add some accounts,
show the total balance, make some deposits and withdrawals, show the new total balance.

*/

const bank = {
  accounts: [
    {
      ownerName: "Alex",
      currentBalance: 23.01
    },
    {
      ownerName: "Bob",
      currentBalance: 108.88
    },
    {
      ownerName: "Jane",
      currentBalance: 56
    },
    {
      ownerName: "Tom",
      currentBalance: 42.58
    },
  ],
  totalSumMoney: function() {
    let total = 0
    for (let i = 0; i < bank.accounts.length; i++) {
      total += bank.accounts[i].currentBalance;
    }
    return total.toFixed(2);
  },
  addAccount: function(name, balance) {
    if (typeof balance === 'number' && balance > 0) {
      bank.accounts.push( {ownerName: name, currentBalance: balance} )
    } else {
      console.log("Balance must be a number");
    }
  },
  deposit: function(name, amount) {
    if (typeof amount !== 'number' && amount > 0) {
      console.log("Please enter a number");
    } else {
      for (let i = 0; i < bank.accounts.length; i++) {
        const currentAccount = bank.accounts[i];
        if (name === currentAccount.ownerName) {
          currentAccount.currentBalance += amount;
          console.log(`${ currentAccount.ownerName }'s account now has $${ currentAccount.currentBalance.toFixed(2) }`)
        }
      }
    }
  },
  withdraw: function(name, amount) {
    if (typeof amount !== 'number' && amount > 0) {
      console.log("Please enter a number")
    } else {
      for (let i = 0; i < bank.accounts.length; i++) {
        const currentAccount = bank.accounts[i];
        if (name === currentAccount.ownerName) {
          currentAccount.currentBalance -= amount;
          console.log(`${ currentAccount.ownerName}'s account now has $${ currentAccount.currentBalance.toFixed(2) }`)
        }
      }
    }
  },
};

// A guy called Todd opens an account at the bank
console.log(bank.addAccount("Todd", 60));

// Todd is a mechanic. Bob pays Todd to do some work on his car
console.log(bank.withdraw("Bob", 20));
console.log(bank.deposit("Todd", 20));

// Another guy called Nick opens an account at the Bank
console.log(bank.addAccount("Nick", 100));

// Nick is a software engineer who hacks into the bank's poorly written & protected code
// and generates himself billions of dollars
console.log(bank.deposit("Nick", 5000000000));

/*

Ensure that the accounts cannot have negative values.
Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.

*/
