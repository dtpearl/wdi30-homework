/*
Bank
There is only one bank. This bank has an array of accounts. The bank needs a method that will return the
total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank
and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts,
etc.

The bank has many accounts. Accounts should be objects that all share a set of common functionality.

Accounts
Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to
change the balance.

There is no need to write a user interface. Make sure functions return values -- you may also have your functions
console.log() values to help you see your code working.

You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as
expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.

Tips
Don't overthink this. Shorter code is probably the answer.

Bonus
Ensure that the accounts cannot have negative values.
Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.
*/

const ArrAccounts = [
  {
    OwnerName : "Steve",
    accountNumber : "234344545",
    Type : "Savings",
    balance : "5000.00"
  },
  {
    OwnerName : "Megan",
    accountNumber : "565678788",
    Type : "Savings",
    balance : "15000.00"
  },
  {
    OwnerName : "Peter",
    accountNumber : "343565788",
    Type : "Savings",
    balance : "55000.00"
  },
  {
    OwnerName : "Natasha",
    accountNumber : "458325797",
    Type : "Savings",
    balance : "2000.00"
  }
]
var filterAccounts = ArrAccounts.filter(function(val,accno) {
    return val.accountNumber === accno;
});
const getTotalBalance = function(arr){
  let result = 0;
  for(let cnt=0; cnt <= arr.length-1; cnt++)
  {
    result += parseFloat(arr[cnt].balance);
    //console.log(result);
  }
  //console.log(result.toFixed(2));
  return result.toFixed(2);
};
const addAccount = function(owner,accno,type,balance){
  ArrAccounts.push({
    OwnerName : owner,
    accountNumber : accno,
    Type : type,
    balance : balance
  });
  return ArrAccounts;
}
const withDrawal = function(accno,money){

};
console.log(`The Total balance in the account so far is ${getTotalBalance(ArrAccounts)}$`);
console.log(addAccount('Bindu','34343','Savings','3490'));
withDrawal('458325797','500');
