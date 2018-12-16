/*
JavaScript Bank
In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.

Bank
There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.

The bank has many accounts. Accounts should be objects that all share a set of common functionality.

Accounts
Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.

There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.

You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.

Tips
Don't overthink this. Shorter code is probably the answer.

Bonus
Ensure that the accounts cannot have negative values.
Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.

*/

const bank = {
  accounts: [],
  total_sum: function () {
    let sum = 0;
    for (let i = 0; i < this.accounts.length; i++) {
      sum += this.accounts[i].balance;
    }
    return sum;
  },
  addAccount: function (account) {
    this.accounts.push(account);
  },
  transfer: function (account1, account2, amount) {
    if(account1.balance < amount) {
      console.log("Balance is not enough");
    }

    account1.balance -= amount;
    account2.balance += amount;

  }
};

class Account {
  constructor (name) {
    this.name = name;
    this.balance = 0;
  }

  deposit (amount) {
    this.balance += amount;
  }

  withdraw (amount) {
    if (amount > this.balance) {
      console.log("Balance is not enough!");
      return false;
    }
    else {
      this.balance -= amount;
    }
  }
}

let acc1 = new Account("user1");
let acc2 = new Account("user2");
let acc3 = new Account("user3");
//acc4 is not added to bank
let acc4 = new Account("user4");

acc1.deposit(100);
acc2.deposit(200);

bank.addAccount(acc1);
bank.addAccount(acc2);

acc3.deposit(300);
console.log("total sum:" + bank.total_sum());

bank.addAccount(acc3);
console.log("total sum:" + bank.total_sum());

acc4.deposit(400);
console.log("total sum:" + bank.total_sum());

bank.transfer(acc1, acc2, 20);
console.log("total sum:" + bank.total_sum());
console.log("acc1 " + acc1.balance + " acc2 " + acc2.balance);

bank.transfer(acc1, acc4, 20);
console.log("total sum:" + bank.total_sum());
console.log("acc1 " + acc1.balance + " acc4 " + acc4.balance);
