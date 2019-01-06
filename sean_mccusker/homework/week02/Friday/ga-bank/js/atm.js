// console.log(`Is there anybody out there?`);

$( document ).ready( function () { // Drivers start your engines.
// Creating bank object.
const bankOfGa = {
  checking: 0.00,
  savings: 0.00,

// Total balance function is the combination of funds in the deposit and savings.
  totalBalance: function() {
    return this.checking + this.savings;
  },

// Deposit function has two parameters, 'amount' being deposited and the 'account' it is going into.
  deposit: function( amount, account ) {
    if ( amount > 0 ) { // If amount is > 0 than the account is increased to the amount that is deposited.
      this[ account ] += amount;
      return this[ account ];
    } else { // Else return something else.
      return;
    }
  },

// Withdraw function also has two parameters, 'amount' being withdrawn and the account it is being removed from.
  withdraw: function( amount, account ) {
    if ( amount <= 0 ) { // If amount is less than or equal to  0 than it is withdrawn.
      return;
    }

    // The noOverDraft function removes the amount from the account it is being removed from.
    let noOverDraft = amount - this[ account ];

    // If the amount is less than or equal to the totalBalance between both accounts
    if ( amount <= this.totalBalance () && ( account === "checking" )) { // The checking portion determines if amount is less than or equal to totalBalance and the account is checking...
      if ( amount > this[ account ]) { // If amount us greater than what is in checking currently...
        bankOfGa.savings = bankOfGa.savings - noOverDraft; // Than the balance of savings is equal to savings - what is available in checking.
      }
      this[ account ] = Math.max( 0, ( this[ account ] - amount )); // The Math.max() is a check on the account in question in association of the other account combined have enough money to carry out withdraw request.
    } else if ( amount <= this.totalBalance () && ( account === "savings" )) { // The savings portion determines if amount is less than or equal to totalBalance and the account is savings...
      if ( amount > this[ account ]) { // If amount us greater than what is in savings currently...
        bankOfGa.checking = bankOfGa.checking - noOverDraft; // Than the balance of savings is equal to savings - what is available in checking.
      }
      this[ account ] = Math.max( 0, ( this[ account ] - amount )); // The Math.max() is a check on the account in question in association of the other account combined have enough money to carry out withdraw request.
    } else {
      return;
    }
  },
};


  // When you first visit page the background for the savings and checking will be red because there is no money deposited yet.
  $( '.balance' ).css( 'background-color', 'red' );

  const checkBackgroundColor = function () {
    if ( bankOfGa.checking === 0 ) {
      $( '#checking-balance' ).css( 'background-color', 'red' ); // Sets the checking-balance color of checking account to red if there is no money in account.
    } else if ( bankOfGa.checking > 0 ) {
      $( '#checking-balance' ).css( 'background-color', '#E3E3E3' ) // If there is any value above 0 then the color becomes grey.
    };

    if ( bankOfGa.savings === 0 ) {
      $( '#savings-balance' ).css( 'background-color', 'red' ); // Sets the checking-balance color of savings account to red if no money in account.
    } else if ( bankOfGa.savings > 0 ) {
      $( '#savings-balance' ).css( 'background-color', '#E3E3E3' ); // If there is any value above 0 then the color becomes grey.
    };
  };


  const updateBalance = function () {
    $( '#checking-balance' ).html( `$${bankOfGa.checking.toFixed(2)}` ); // The 'to.fixed(2)' method rounds to 2 decimal places.
    $( '#savings-balance' ).html( `$${bankOfGa.savings.toFixed(2)}` ); // The 'to.fixed(2)' method rounds to 2 decimal places.
  };

  // The below is how money is deposited into checking account
  $( '#checking-deposit' ).on( 'click', function () { // The deposit function is completed on the click of 'Deposit' button on home page on the Checking side.
    bankOfGa.deposit( parseFloat($( '#checking-amount' ).val()), 'checking' ); // Parse float returns a floating point number from value that is passed in.
    $( '#savings-amount' ).val('');
    $( '#checking-amount' ).val('');
    updateBalance ();
    checkBackgroundColor ();
  });

   // The below is how money is withdrawn from checking account
   $( '#checking-withdraw' ).on( 'click', function() { // The withdraw function is completed on click of 'Withdraw' button on home page.
    bankOfGa.withdraw( parseFloat($('#checking-amount').val()), 'checking' ); // Parse float returns a floating point number from value that is passed in.
    $( '#savings-amount' ).val('');
    $( '#checking-amount' ).val('');
    updateBalance ();
    checkBackgroundColor ();
   });

    // The below is how money is deposited to savings account.
  $('#savings-deposit').on('click', function() { // The deposit function is completed on the click of 'Deposit' button on home page on the Savings side.
    bankOfGa.deposit(parseFloat($('#savings-amount').val()), 'savings'); // Parse float returns a floating point number from value that is passed in.
    $('#savings-amount').val('');
    $('#checking-amount').val('');
    updateBalance();
    checkBackgroundColor();
  });

   // The below is how money is withdrawn from savings account.
  $( '#savings-withdraw' ).on( 'click', function () { // The withdraw function is completed on click of 'Withdraw' button on home page.
   bankOfGa.withdraw( parseFloat($('#savings-amount').val ()), 'savings'); // Parse float returns a floating point number from value that is passed in.
   $( '#savings-amount' ).val('');
   $( '#checking-amount' ).val('');
   updateBalance ();
   checkBackgroundColor ();
 });
});
