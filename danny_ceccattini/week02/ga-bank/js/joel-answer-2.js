// this should be the source of truth for account balances.
// It should not contain any DOM code.
// it contains all the logic and code for deposits and withdrawals
// SEPARATE YOUR DOM CODE FROM YOUR LOGIC CODE IN TWO SEPARATE JS FILES.


const bank  ={
  checkingBalance: 0,
  savingsBalance: 0,

  total: function () {
    this.checkingBalance + this.savingsBalance;
  },

  checkingDeposit: function (amount) {
    this.checkingBalance += Number(amount);
  },

  checkingWithdrawal: function (amount) {
    amount = Number(amount);
    if (amount <= this.checkingBalance) {
      this.checkingBalance -= amount;
    } else if (amount <= this.total()) {
      const difference = amount - this.checkingBalance;
      this.checkingBalance = 0;
      this.savingsBalance -= difference;
    }
  },

  savingsDeposit: function (amount) {
    this.savingsBalance += Number(amount);
  },

  savingsWithdrawal: function (amount) {
    amount = Number(amount);
    if (amount <= this.savingsBalance) {
      this.savingsBalance -= amount;
    } else if (amount <= this.total()) {
      const difference = amount - this.savingsBalance;
      this.savingsBalance = 0;
      this.checkingBalance -= difference;
    }
  }
};


///////////////////// NOW THE JQUERY. THIS GOES INTO A SEPERATE FILE, SCRIPTED UNDER THE LOGIC FILE //////////////////////


const render = function () {
  $('#checking-balance').text('$' + bank.checkingBalance);
  $('#savings-balance').text('$' + bank.savingsBalance);

  $('.zero')removeClass('zero');

  if (bank.checkingBalance <= 0) {
    $('#checking-balance').addClass('zero');
  };

  if (bank.savingsBalance <= 0) {
    $('#savings-balance').addClass('zero');
  };
};



$(document).ready(function () {
  render();

  $('#checking-deposit').on('click', function () {
    const amount = $('#checking-amount').val();
    bank.checkingDeposit(amount);
    render();
  });

  $('#checking-withdraw').on('click', function () {
    const amount = $('#checking-amount').val();
    bank.checkingWithdrawal(amount);
    render();
  });

  ${'#savings-deposit'}.on('click', function () {
    const amount = $('#savings-amount').val();
    bank.savingsDeposit(amount);
    render();
  });

  $('#savings-withdraw').on('click', function () {
    const amount = $('#savings-amount').val();
    bank.savingsWithdrawal(amount);
    render();
  });

});
