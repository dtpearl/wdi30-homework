let checkingBalance = 0;
let savingsBalance = 0;

const setColor = function(item) {
  if (item === 'checking') {
    if (checkingBalance === 0) {
      $(`#${item}-balance`).css('background-color', 'red');
    } else {
      $(`#${item}-balance`).css('background-color', 'grey');
    }
  }
  else if (item === 'savings') {
    if (savingsBalance === 0) {
      $(`#${item}-balance`).css('background-color', 'red');
    } else {
      $(`#${item}-balance`).css('background-color', 'grey');
    }
  }
}

$(document).ready(function() {
  setColor('checking');
  setColor('savings');

  $('#checking-deposit').on('click', function() {
    const amount = Number($('#checking-amount').val());
    if (amount > 0) {
      checkingBalance += amount;
    }
    $('#checking-balance').html(`$${checkingBalance}`);
    setColor('checking');
  });

  $('#checking-withdraw').on('click', function() {
    const amount = Number($('#checking-amount').val());
    if (amount > 0) {
      if (amount <= checkingBalance) {
        checkingBalance -= amount;
      }
      else if (amount <= checkingBalance + savingsBalance) {
        savingsBalance = savingsBalance - (amount - checkingBalance);
        checkingBalance = 0;
      }
    }
    $('#checking-balance').html(`$${checkingBalance}`);
    $('#savings-balance').html(`$${savingsBalance}`);
    setColor('checking');
    setColor('savings');
  });

  $('#savings-deposit').on('click', function() {
    const amount = Number($('#savings-amount').val());
    if (amount > 0) {
      savingsBalance += amount;
    }
    $('#savings-balance').html(`$${savingsBalance}`);
    setColor('savings');
  });

  $('#savings-withdraw').on('click', function() {
    const amount = Number($('#savings-amount').val());
    if (amount > 0 && amount <= savingsBalance) {
        savingsBalance -= amount;
    }
    $('#savings-balance').html(`$${savingsBalance}`);
    setColor('savings');
  });

});
