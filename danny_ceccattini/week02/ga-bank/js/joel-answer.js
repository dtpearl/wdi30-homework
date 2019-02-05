const checkForZero = function *( {
  // add zero class for checking if necessary
  // add zero for savings
})

$(document).ready(function () {

  $('#checking-deposit').on('click', function () {
    // fetch the amount
    const amount = +$('#checking-amount').val() // + sign will automatically convert the string to a number
    // add to the balance.
    const currentBalance = +$('#checking-balance').text().slice(1); // slices the $ sign.
    const newBalance = currentBalance + amount;
    // update the screen
    $('#checking-balance').text('$' + newBalance);
  });

  $('#checking-withdrawal').on('click', fucntion () {
    // fetch the amount
    const amount = +$('#checking-amount').val();
    // fetch the current balance.
    const currentBalance = +$('#checking-balance').text().slice(1); // slices the $ sign.
    const otherBalance = +$('#savings-balance').text().slice(1);
    const totalBalance = currentBalance + otherBalance;
    // substract amount from balance.
    const newBalance = currentBalance - amount;
    // update the screen

    if (newBalance >= 0) {
      $('#checking-balance').text('$' + newBalance);
    } else if (amount <= totalBalance) {
      // set this account to 0
      $('#checking-balance').text('$0');
      // substract the remainder from the other account
      $('#savings-balance').text('$' + (otherBalance + newBalance));
    }
  });

  $('#savings-deposit').on('click', function () {
    // fetch the amount
    const amount = +$('#savings-amount').val() // + sign will automatically convert the string to a number
    // add to the balance.
    const currentBalance = +$('#savings-balance').text().slice(1); // slices the $ sign.
    const newBalance = currentBalance + amount;
    // update the screen
    $('#savings-balance').text('$' + newBalance);
  });




});
