const bank = {
  checkings: 0,
  savings: 0,
                    //10,   "checkings"
  deposit: function(amount, account) {
    this[account] += amount // this[account] = this[account] + amount
    console.log(`your balance for your ${ account } account is $${ this[account] }.`);
  },

  withdraw: function(amount, account) {
    if (amount > (this[account] + bank.savings)) {
      return 'You do not sufficient funds!';
    } else if (amount === this[account]) {
      this[account] = 0;
      return `Please be advised that your ${ account } is now empty. We will commence overdrafting from your savings account.`;
    } else if (amount > this[account] && amount < bank.savings) {
      let overdraft = amount - this[account];
      this[account] = 0;
      bank.savings -= overdraft;
      return `Warning: Your ${ account } account is now empty. An overdraft of $${ overdraft } was made from your savings account.`;
    } else if (amount < this[account]) {
      this[account] -= amount
      return `your balance for ${ account } is ${ this[account] }`;
    }
  },
};


const zeroRedCheckings = function () {
  if (bank.checkings === 0) {
    return $("#checking-balance").addClass("zero");
  } else {
    return $("#checking-balance").removeClass("zero")
  }
};

const zeroRedSavings = function () {
  if (bank.savings === 0) {
    return $("#savings-balance").addClass("zero");
  } else {
    return $("#savings-balance").removeClass("zero");
  }
};



$(document).ready(function () {

  $('#checking-deposit').on('click', function () {
    const amount = Number($('#checking-amount').val());
    bank.deposit(amount, "checkings");
    $('#checking-balance').text(`$${bank.checkings}`);
    zeroRedCheckings();
  });

  $('#checking-withdraw').on('click', function() {
    const amount = Number($('#checking-amount').val());
    bank.withdraw(amount, "checkings");
    $('#savings-balance').text(`$${bank.savings}`);
    $('#checking-balance').text(`$${bank.checkings}`);
    zeroRedCheckings();
  });

  $('#savings-deposit').on('click', function() {
    const amount = Number($('#savings-amount').val());
    bank.deposit(amount, "savings");
    $('#savings-balance').text(`$${bank.savings}`);
    zeroRedSavings();
  });

  $('#savings-withdraw').on('click', function() {
    const amount = Number($('#savings-amount').val());
    bank.withdraw(amount, "savings");
    $("#savings-balance").text(`$${bank.savings}`);
    zeroRedSavings();
  });

});
