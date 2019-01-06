const atm = {

  checkingAccount: 0,
  savingsAccount: 0,
  deposit: function (amount, account) {
     this[account] += amount; // this[account] = this[account] + amount
     return;
  },
  withdraw: function (amount, account){
    let otherAccount = "";
    if (account === "checkingAccount"){
      otherAccount = "savingsAccount";
    } else {
      otherAccount = "checkingAccount";
    }

    if (this[account] + this[otherAccount] - amount < 0){
       alert (`You have insufficient funds`);
       return;

    } else if (this[account] - amount < 0){
      this[otherAccount] = this[otherAccount] + (this[account] - amount); //need to add otherwise double negative.
      this[account] = 0;
      return;
    }
      this[account] = this[account] - amount;
      return
  },
};


// change the colour for zero balance

const $zerobalanceSavings = function (account) {
  if (atm["savingsAccount"] > 0) {
    $('#savings-balance').removeClass('zero');
      return;
  } else if (atm["savingsAccount"] === 0) {
      $('#savings-balance').addClass('zero');
        return;
  }
}

const $zerobalanceChecking = function (account) {
  if (atm["checkingAccount"] > 0) {
    $('#checking-balance').removeClass('zero');
      return;
  } else if (atm["checkingAccount"] === 0) {
      $('#checking-balance').addClass('zero');
        return;
  }
}


//checking deposit

$(document).ready(function(){

$('#checking-deposit').on('click', function () {
  let amount = Number($('#checking-amount').val());
  atm.deposit(amount, "checkingAccount");
  $('#checking-balance').text(`$ ${atm.checkingAccount}`);
  $zerobalanceChecking(atm["checkingAccount"]);

});

//checking withdrawal

$('#checking-withdraw').on('click', function () {
  let amount = Number($('#checking-amount').val());
  atm.withdraw(amount, "checkingAccount");
  $('#savings-balance').text(`$ ${atm.savingsAccount}`)
  $('#checking-balance').text(`$ ${atm.checkingAccount}`);
  $zerobalanceChecking(atm["checkingAccount"]);
  $zerobalanceSavings(atm["savingsAccount"]);
});

//savings Deposit
$('#savings-deposit').on('click', function () {
  let amount = Number($('#savings-amount').val());
  atm.deposit(amount, "savingsAccount");
  $('#savings-balance').text(`$ ${atm.savingsAccount}`);
  $zerobalanceSavings(atm["savingsAccount"]);

});

//savings withdrawal
$('#savings-withdraw').on('click', function () {
  let amount = Number($('#savings-amount').val());
  atm.withdraw(amount, "savingsAccount");
  $('#checking-balance').text(`$ ${atm.checkingAccount}`);
  $('#savings-balance').text(`$ ${atm.savingsAccount}`);
  $zerobalanceChecking(atm["checkingAccount"]);
  $zerobalanceSavings(atm["savingsAccount"]);
});


});
