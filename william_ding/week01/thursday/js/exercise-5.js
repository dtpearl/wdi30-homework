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
// list of accounts.
  account: [
    {name: "Gareth Bale", balance: 4000000},
    {name: "Marcelo Vieira", balance: 5000000},
    {name: "Sergio Ramos", balance: 6000000},
    {name: "Luka Modric", balance: 5000000},
    {name: "Keylor Navas", balance: 4000000},
  ],
// accounNumber function .........................
  accountNumber: function (name) {
    const list = [];
    for (i = 0; i < bank.account.length; i++) {
      list.push(bank.account[i].name);
    }
    const accountNumber = list.indexOf(name);
    return accountNumber;
  },
// totalAmount function ..........................
  totalAmount: function () {
    let sum = 0;
    for (i = 0; i < bank.account.length; i++) {
      sum += bank.account[i].balance;
    }
    console.log(`The total amount in our bank is €${ sum }.`);
  },
// addAccount function ..........................
  addAccount: function (name, amount = 0) {
    const newAccount = {name: name, balance: amount};
    bank.account.push(newAccount);
    console.log(`Congratulations, ${ name }. You have opened a new account with us. Your initial deposit is €${ amount }.`);
  },
// deposit function ..........................
  deposit: function (name, amount) {
    const accountNumber = bank.accountNumber(name);
    bank.account[accountNumber].balance += amount;
    console.log(`Dear ${ name }, thank you for depositting €${ amount } into your account. You now has €${ bank.account[accountNumber].balance } in your account.`)
  },
// withdraw function ........................
  withdraw: function (name, amount) {
    const accountNumber = bank.accountNumber(name);
    if (bank.account[accountNumber].balance < amount) {
      console.log(`Dear ${ name }, thank you for using our service. Unfortunately, you do not have sufficient balance in your account. Your balance is €${ bank.account[accountNumber].balance }.`);
      return;
    } else {
    bank.account[accountNumber].balance -= amount;
    console.log(`Dear ${ name }, thank you for withdrawing €${ amount } from your account. You now has €${ bank.account[accountNumber].balance } in your account.`)
      }
  },
// transfer function .......................
  transfer: function (name1, name2, amount) {
    const accountNumber1 = bank.accountNumber(name1);
    const accountNumber2 = bank.accountNumber(name2);
    if (bank.account[accountNumber1].balance < amount) {
      console.log(`Dear ${ name1 }, thank you for using our service. Unfortunately, you do not have sufficient balance in your account. Your balance is €${ bank.account[accountNumber1].balance }.`);
      return;
    } else {
    bank.account[accountNumber1].balance -= amount;
    bank.account[accountNumber2].balance += amount;
    console.log(`Dear ${ name1 }, thank you for transfer €${ amount } from your account to ${ name2 }. You now has €${ bank.account[accountNumber1].balance } in your account.`)
      }
  }
};
// Show bank insutractions customer
const bankInfoCustomer = function () {
  clear();
  console.log (`
    Welcome to Console Bank of Australia \n\n
    You can:\n
    Open an account using bank.addAccount(your name, deposit amount)\n
    Deposit using bank.deposit(your name, deposit amount)\n
    withdraw using bank.withdraw(your name, deposit amount)\n
    Transfer using bank.transfer(your name, receiver's name, transfer amount)`);
}
// Show bank insutractions employee
const addZero = function (num) {
  let result = num.toString();
  let zero = 4 - result.length;
  for (i = 0; i < zero; i++) {
    result = "0" + result;
  }
  return result;
}
const bankInfoEmployee = function () {
  clear();
  const employeeNubmer = addZero(Math.ceil(Math.random() * 999 + 1));
  console.log (`
    Welcome bank to CBA HQ terminal \n
    Employee Number: ${ employeeNubmer }\n\n
    You can:\n
    List out all accounts using listAllAccount()\n
    Check the total amount in our bank using bank.totalAmount()\n`);
}

const listAllAccount = function () {
  for (i = 0; i < bank.account.length; i++) {
    const acc = bank.account[i];
    console.log (`${ acc.name } has €${acc.balance} in our bank.`);
  }
}
