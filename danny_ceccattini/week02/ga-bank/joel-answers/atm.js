const render = function () {
  $('#checking-balance').text('$' + bank.checkingBalance);
  $('#savings-balance').text('$' + bank.savingsBalance);

  $('.zero').removeClass('zero');

  if (bank.checkingBalance <= 0) {
    $('#checking-balance').addClass('zero');
  }

  if (bank.savingsBalance <= 0) {
    $('#savings-balance').addClass('zero');
  }
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
    bank.checkingWithdraw(amount);
    render();
  })

  $('#savings-deposit').on('click', function () {
    const amount = $('#savings-amount').val();
    bank.savingsDeposit(amount);
    render();
  });

  $('#savings-withdraw').on('click', function () {
    const amount = $('#savings-amount').val();
    bank.savingsWithdraw(amount);
    render();
  });
});
