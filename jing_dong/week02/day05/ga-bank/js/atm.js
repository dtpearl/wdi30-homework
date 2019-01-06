console.log("wawa");



// const checkingDeposit = function ( a ) {
//   let depositForChecking = 0 ;
//   let fundDepositForChecking = depositForChecking + a ;
//   console.log(`the balance in checking is ${fundDepositForChecking}`);
// };
//
//
// const checkingWithdraw = function ( a ) {
//   let withdrawForChecking = a ;
//   let fundWithdrawForChecking = 0 - a ;
//   console.log(`the balance in checking is ${fundWithdrawForChecking}`);
// }
//
//
// const savingsDeposit = function ( a ) {
//   let depositForSving = 0 ;
//   let fundDepositForSavings = depositForSving + a ;
//   console.log(`the balance in savings is ${fundDepositForSavings}`);
// };
//
// const savingsWithdraw = function ( a ) {
//   let withdrawForSavings = a ;
//   let fundWithdrawForSavings = 0 - a ;
//   console.log(`the balance in savings is ${fundWithdrawForSavings}`);
// };
//
// $(document).ready(function () {
//   $('#checking-amount').on('keyup',function() {
//     let amount = $('#checking-balance').val();
//     $()
//   })
// });

const balance = {
  savings: 0,
  checking: 0
}

const updateScreen = function() { //function to update screen with amount. Using html() method to set the contents of all elements with class of 'checking-balance' and 'savings-balance' with the property values from balance object

  $('#checking-balance').html( balance.checking);
  $('#savings-balance').html( balance.savings);
  colourChange();
}

//when update screen is run, the below will check whether the conditions are true and add/remove the CSS class
const colourChange = function() {
  if (balance.savings === 0) {
    $('#savings-balance').addClass('zero');
  } else {
    $('#savings-balance').removeClass('zero');
  }

  if (balance.checking === 0) {
    $('#checking-balance').addClass('zero');
  } else {
    $('#checking-balance').removeClass('zero');
  }
};

//deposit function passes the amount & account arguments based on user input
const deposit = function(amount, account) {
  balance[account] += parseInt(amount); //the parseInt will need to convert the amount of the displayed in the account into a number
  updateScreen(); //run updatescreen function to display new balance after deposit
};

//Withdraw function & overdraft protection rules
const withdraw = function(amount, account) {

if (amount <= balance[account]) { //normal withdrawal when amount is < savings or checking account
    balance[account] -= parseInt(amount); //x = x - y parseInt can also be +
  } else if (amount <= balance.checking + balance.savings) { //overdraft kicks in when amount < total balance in both accs
    const overdraftAmt = balance[account] - parseInt(amount); //amount to be overdraft
    balance[account] = 0 //let the overdrawn account = 0
    if (balance.checking === 0) { //two scenarios here - if balance.checking account is 0 then take the overdraft amount defined above from the balance.savings account and vice versa for the other account
      balance.savings += overdraftAmt;
    } else if (balance.savings === 0){
      balance.checking += overdraftAmt;
    }
  } else {
    alert("insufficient funds"); //display alert if amount > balance[account] OR > total balance
  }
    updateScreen(); //update screen with values calculated from above function
};

$(document).ready(function() { //start of document ready containing jquery functions, make sure the DOM is ready

  updateScreen(); //first run update screen to apply everything above

$('#checking-deposit').on('click', function() { //when user clicks on deposit button
    const num = $('#checking-amount').val() //grab value from html with #checking-amount class / find the amount deposited and add the amount to the balance and update the screen
    deposit (num, "checking"); //run deposit function for amount calculated above
});

$('#checking-withdraw').on('click', function() {
  const num = $('#checking-amount').val()
  withdraw (num, "checking");
});

$('#savings-deposit').on('click', function() {
  const num = $('#savings-amount').val()
  deposit (num, "savings");
});

$('#savings-withdraw').on('click', function() {
  const num = $('#savings-amount').val()
  withdraw (num, "savings");
});

});
