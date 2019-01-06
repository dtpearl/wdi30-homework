$(document).ready(function(){

var checkingBalance = 0;
var savingsBalance = 0;

$("input[value='Deposit']").on('click', function () {
  const account = $(this).parent().attr('id');
  var amount = $(`#${account}-amount`).val();
  amount = verifyInputAndMakeInt(amount);
  if (!amount) { alert('Please provide a valid number')
    return;
  }
  $(`#${account}-balance`).text(deposit(amount, account));
  noFundsWarning();
})

$("input[value='Withdraw']").on('click', function () {
  const totalBalance = savingsBalance + checkingBalance;
  const account = $(this).parent().attr('id');
  var amount = $(`#${account}-amount`).val();
  amount = verifyInputAndMakeInt(amount);
  if (!amount) { alert('Please provide a valid number')
    return;
  }
  var accountBalance = '';
  var otherAccount = '';
  if (account == 'savings') {
    accountBalance = savingsBalance
    otherAccount = 'checking';
  } else {
    accountBalance = checkingBalance
    otherAccount = 'savings';
  }
  if (amount <= accountBalance) {
    $(`#${account}-balance`).text(withdraw(amount, account));
  } else if (amount <= totalBalance) {
    overdraftAmount = amount - accountBalance;
    $(`#${account}-balance`).text(withdraw(accountBalance, account));
    $(`#${otherAccount}-balance`).text(withdraw(overdraftAmount, otherAccount));
  } else {
    alert('Insufficient Funds')
    return
  }
  noFundsWarning();
})

const deposit = function (amount, account){
  if (account=='checking') {
    checkingBalance = checkingBalance + amount;
    return roundNumDown(checkingBalance);
  } else {
    savingsBalance = savingsBalance + amount
    return roundNumDown(savingsBalance);
  }
}

const withdraw = function (amount, account) {
  if (account=='checking') {
    checkingBalance = checkingBalance - amount;
    return roundNumDown(checkingBalance);
  } else {
    savingsBalance = savingsBalance - amount;
    return roundNumDown(savingsBalance);
  }
}

const roundNumDown = function (num) {
    return (Math.round(num * 100) / 100).toFixed(2);
}

// Stack overflow : https://stackoverflow.com/questions/17369098/simplest-way-of-getting-the-number-of-decimals-in-a-number-in-javascript
const countDecimals = function (value) {
    if(Math.floor(value) === value) return 0;
    return value.toString().split(".")[1].length || 0;
}

const verifyInputAndMakeInt = function (amount) {
  amount = parseFloat(amount);
  if (Number.isNaN(amount) || amount < 0 || countDecimals(amount) > 2) {
    console.log('Please provide a valid number.')
    return;
  }
  return amount;
}

const noFundsWarning = function () {
  const checking = $(`#checking-balance`).text();
  const savings = $(`#savings-balance`).text();
  if (checking == 0.00) {
    $(`#checking-balance`).css('background-color', 'red');
  } else {
    $(`#checking-balance`).css('background-color', 'grey');
  }
  if (savings == 0.00) {
    $(`#savings-balance`).css('background-color', 'red');
  } else {
    $(`#savings-balance`).css('background-color', 'grey');
  }
}

});
