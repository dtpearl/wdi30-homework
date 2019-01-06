const bank = {
  checkingBalance: 0,
  savingsBalance: 0,
  deposit: function(amount, account) {
    this[account] += amount;
  },

  withdraw: function(amount, account) {
    let otherAccount;
    if (account === "checkingBalance") {
      otherAccount = "savingsBalance";
    } else {
      otherAccount = "checkingBalance";
    };

    if (amount > this.checkingBalance + this.savingsBalance) {
      alert('Insufficient funds');
      return;
    } else if (amount > this[account]) {
      const difference = this[account] - amount;
      this[account] = 0;
      this[otherAccount] += difference; // plus because difference is negative
      return;
    }
    this[account] -= amount;
  },
}; // bank object

const checkZeroChecking = function() {
  if (bank.checkingBalance === 0) {
    $('#checking-balance').addClass('zero');
    return;
  }
  $('#checking-balance').removeClass('zero');
};

const checkZeroSavings = function() {
  if (bank.savingsBalance === 0) {
    $('#savings-balance').addClass('zero');
    return;
  }
  $('#savings-balance').removeClass('zero');
};

$(document).ready(function() {

  // checking deposit /////////////////////////////
  $('#checking-deposit').on('click', function() {
    const amount = Number($('#checking-amount').val());
    bank.deposit(amount, "checkingBalance");
    $('#checking-balance').text(`$${ bank.checkingBalance }`);
    checkZeroChecking();
  });

  // checking withdrawal ///////////////////////////
  $('#checking-withdraw').on('click', function() {
    const amount = Number($('#checking-amount').val());
    bank.withdraw(amount, "checkingBalance");
    $('#savings-balance').text(`$${ bank.savingsBalance }`);
    $('#checking-balance').text(`$${ bank.checkingBalance }`);
    checkZeroChecking();
  });

  // savings deposit ///////////////////////////////
  $('#savings-deposit').on('click', function() {
    const amount = Number($('#savings-amount').val());
    bank.deposit(amount, "savingsBalance");
    $('#savings-balance').text(`$${ bank.savingsBalance }`);
    checkZeroSavings();
  });

  // savings withdrawal ////////////////////////////
  $('#savings-withdraw').on('click', function() {
    const amount = Number($('#savings-amount').val());
    bank.withdraw(amount, 'savingsBalance');
    $('#checking-balance').text(`$${ bank.checkingBalance }`);
    $('#savings-balance').text(`$${ bank.savingsBalance }`);
    checkZeroSavings();
  });

}); // document ready
