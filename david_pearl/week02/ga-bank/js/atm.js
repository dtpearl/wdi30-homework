

let $checkingBalance = 0;
let $savingsBalance = 0;


// Checks available funds in both accounts is greater than any withdrawl amount.
const checkAvailableFunds = function (checkAgainst) {
  let totalBalance = $checkingBalance + $savingsBalance;

  if (totalBalance >= checkAgainst) {
    return true;
  } else {
    return false;
  }

};

const checkForZeroBalance = function () {
  if ($checkingBalance === 0) {
    $('#checking').addClass('zero');
  } else {
    $('#checking').removeClass('zero');
  }
  if ($savingsBalance === 0) {
    $('#savings').addClass('zero');
  } else {
    $('#savings').removeClass('zero');
  }
};

// Will make a deposit into either Checking or Savings
const deposit = function (depAmount, acc) {
  let amount = parseInt(depAmount);

  if ( acc === 'checking' ) {
    $checkingBalance += amount;
    console.log("Deposit into checking");
    $('#checking-balance').html(`$${$checkingBalance}`);
  } else if ( acc === 'savings'){
    $savingsBalance += amount;
    console.log("Deposit into savings");
    $('#savings-balance').html(`$${$savingsBalance}`);
  }
  // checkForZeroBalance();
};

// Will make a withdrawl from either Checking or Savings.
const withdrawl = function (withdrawAmount, acc) {
  let wAmount = parseInt(withdrawAmount);
  let overdraft = 0;

  // Before a withdrawl is made, checks if there are available funds for the withdrawl.
  // Withdrawl amount is checked against the total funds available.
  if (checkAvailableFunds(wAmount)) {

    // Checks the account intending to withdraw funds. (Checking / Savings)
    if ( acc === 'checking' ) {

      // Checks if there will be an overdraft on the Checking account.
      if ( wAmount > $checkingBalance ) {

        overdraft = Math.abs($checkingBalance - wAmount);

        $checkingBalance = 0;

        console.log("Withdrawl from checking");
        console.log(`Checking overdraft: $${overdraft}`);

        $('#checking-balance').html(`$${$checkingBalance}`);
        withdrawl(overdraft, 'savings');

        // If there are sufficient funds for the withdrawl, execute the withdrawl.
      } else {
        $checkingBalance -= wAmount;
        console.log("Withdrawl from checking");
        $('#checking-balance').html(`$${$checkingBalance}`);
      }

      // Checks the account intending to withdraw funds. (Checking / Savings)
    } else if ( acc === 'savings'){

        // Checks if there will be an overdraft on the Savings account.
        if (wAmount > $savingsBalance) {
          overdraft = Math.abs($savingsBalance - wAmount);
          console.log(`Savings overdraft: $${overdraft}`);
          $savingsBalance = 0;
          console.log("Withdrawl from savings");
          $('#savings-balance').html(`$${$savingsBalance}`);
          withdrawl(overdraft, 'checking');

          // If there are sufficient funds for the withdrawl, execute the withdrawl.
        } else {
          $savingsBalance -= wAmount;
          console.log("Withdrawl from savings");
          $('#savings-balance').html(`$${$savingsBalance}`);
        }
    }
  }
  checkForZeroBalance();
};

// Set up deposit button clicks for Checking & Savings - Call deposit function, passing in amount and account.
$( '#checking-deposit' )
        .on( 'click', function (event) {
          deposit( $( '#checking-amount' ).val(), 'checking' );
        });

$( '#savings-deposit' )
        .on( 'click', function (event) {
          deposit( $( '#savings-amount' ).val(), 'savings' );
        });


// Set up Withdraw button clicks for Checking & Savings - Call withdrawl function, passing in amount and account.
$( '#checking-withdraw' )
        .on( 'click', function (event) {
          withdrawl( $( '#checking-amount' ).val(), 'checking' );
        });

$( '#savings-withdraw' )
        .on( 'click', function (event) {
          withdrawl( $( '#savings-amount' ).val(), 'savings' );
        });
