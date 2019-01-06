

//render amount and color.

const render = function () {
  $('checking-balance').text('$' + bank.checkingBalance);
  $('savings-balance').text('$' + bank.savingsBalance);

  $('zero').removeClass('zero');

  if (bank.checkingBalance <= 0) {
    $('#checking-balance').addClass('zero');
    )
  }

  if (bank.savingsBalance <= 0) {
    $('#savings-balance').addClass('zero');
    )
  }
};


$(document).ready(function(){

//checking deposit

$('#checking-deposit').on('click', function () {
  let amount = Number($('#checking-amount').val());
  bank.checkingDeposit( amount );
  render();
});

//checking withdrawal

$('#checking-withdraw').on('click', function () {
  let amount = Number($('#checking-amount').val());
  bank.checkingWithdraw( amount );
  render();
});

//savings Deposit
$('#savings-deposit').on('click', function () {
  let amount = Number($('#savings-amount').val());
  bank.savingsDeposit( amount );
  render();
});

//savings withdrawal
$('#savings-withdraw').on('click', function () {
  let amount = Number($('#savings-amount').val());
  bank.savingsWithdraw( amount );
  render();
});


});
