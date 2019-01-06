const account = {
  checking : 0,
  savings : 0,
};

// // Turn RED
// const turnRed = function (balance) {
//   if (balance === 0)
// }


// Checking Deposit.............................................
const checkingDeposit = function () {
  const oldBalance = parseInt($("#checking-balance").text().slice(1));
  const deposit = parseInt($("#checking-amount").val());
  if (isNaN(deposit)) {
    return;
  };
  const newBalance = oldBalance + deposit;
  account.checking = newBalance;
  $("#checking-balance").html(`$${ newBalance }`);
  if (newBalance > 0) {
    $("#checking-balance").removeClass("zero");
  };
  return;
}

//  Savings Deposit.............................................

const savingsDeposit = function () {
  const oldBalance = parseInt($("#savings-balance").text().slice(1));
  const deposit = parseInt($("#savings-amount").val());
  if (isNaN(deposit)) {
    return;
  };
  const newBalance = oldBalance + deposit;
  account.savings = newBalance;
  $("#savings-balance").html(`$${ newBalance }`);
  if (newBalance > 0) {
    $("#savings-balance").removeClass("zero");
  };
  return;
}

// Checking Withdraw.............................................

const checkingWithdraw = function () {
  const oldBalance = parseInt($("#checking-balance").text().slice(1));
  const savingsBalance = parseInt($("#savings-balance").text().slice(1));
  const totalBalance = oldBalance + savingsBalance;
  const withdraw = parseInt($("#checking-amount").val());
  if (isNaN(withdraw)) {
    return;
  };
  if ( withdraw > totalBalance ) {
    return;
  };
  if ( withdraw <= totalBalance && withdraw <= oldBalance ) {
    const newBalance = oldBalance - withdraw;
    account.checking = newBalance;
    $("#checking-balance").html(`$${ newBalance }`);
    if (newBalance === 0) {
      $("#checking-balance").addClass("zero");
    };
    return;
  };
  if ( withdraw <= totalBalance && withdraw > oldBalance ) {
    const savingsNewBalance = totalBalance - withdraw;
    account.checking = 0;
    account.savings = savingsNewBalance;
    $("#checking-balance").addClass("zero");
    $("#checking-balance").html(`$0`);
    $("#savings-balance").html(`$ ${ savingsNewBalance }`);
    if (savingsNewBalance === 0) {
      $("#savings-balance").addClass("zero");
    };
  }
}

// Savings Withdraw.............................................

const savingsWithdraw = function () {
  const oldBalance = parseInt($("#savings-balance").text().slice(1));
  const checkingBalance = parseInt($("#checking-balance").text().slice(1));
  const totalBalance = oldBalance + checkingBalance;
  const withdraw = parseInt($("#savings-amount").val());
  if (isNaN(withdraw)) {
    return;
  };
  if ( withdraw > totalBalance ) {
    return;
  };
  if ( withdraw <= totalBalance && withdraw <= oldBalance ) {
    const newBalance = oldBalance - withdraw;
    account.savings = newBalance;
    $("#savings-balance").html(`$${ newBalance }`);
    if (newBalance === 0) {
      $("#savings-balance").addClass("zero");
    };
    return;
  };
  if ( withdraw <= totalBalance && withdraw > oldBalance ) {
    const checkingNewBalance = totalBalance - withdraw;
    account.savings = 0;
    account.checking = checkingNewBalance;
    $("#savings-balance").addClass("zero");
    $("#savings-balance").html(`$0`);
    $("#checking-balance").html(`$ ${ checkingNewBalance }`);
    if (checkingNewBalance === 0) {
      $("#checking-balance").addClass("zero");
    };
  }
}



// DOCUMENT READY.............................................
$(document).ready(function () {
  $("#checking-deposit").on("click", checkingDeposit);
  $("#savings-deposit").on("click", savingsDeposit);
  $("#checking-withdraw").on("click", checkingWithdraw);
  $("#savings-withdraw").on("click", savingsWithdraw);
});
