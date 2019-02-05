const render = function (){
  $('#checking-balance').text('$' + bank.checkingBalance);
  $('#savings-balance').text('$' + bank.savingsBalance);
  $('.zero').removeClass('zero');

  if (bank.checkingBalance <= 0){
    $('#checking-balance').addClass('zero');
  }
  if (bank.savingsBalance <= 0){
    $('#savings-balance').addClass('zero');
    }
  }


$(document).ready(function(){
  render()

  $('#checking-deposit').on('click', function (){
    const amount = $('#checking-amount').val();
    bank.checkingDeposit(amount);
    console.log(bank)
    render()
  });
$('#checking-withdrawal').on('click', function(){
  const amount = $('#checking-amount').val();
  bank.checkingWithdraw(amount);
  console.log(bank);
  render()
});
$('#savings-deposit').on('click', function (){
  const amount = $('#savings-amount').val();
  bank.savingsDeposit(amount);
  console.log(bank)
  render()
});
$('#savings-withdrawal').on('click', function(){
  const amount = $('#savings-amount').val();
  bank.savingsWithdraw(amount);
  console.log(bank)
  render()
})
})
