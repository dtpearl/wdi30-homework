balances = {
  checking: 0,
  savings: 0,
  depositChecking: function() {
    balances.checking += parseInt($('#checking-amount').val());
    $('#checking-balance').text(`$${balances.checking}`)
    if (balances.checking > 0) {
      $('#checking').css('background-color', 'grey')
    }
  },
  withdrawChecking: function() {
    const total = balances.checking + balances.savings;
    let input = parseInt($('#checking-amount').val())
    if (total >= input) {
      if (balances.checking >= input) {
        balances.checking -= input;
        $('#checking-balance').text(`$${balances.checking}`)
      } else if (balances.checking < input) {
        input -= balances.checking;
        balances.checking = 0;
        $('#checking-balance').text(`$${balances.checking}`)
        balances.savings -= input;
        $('#savings-balance').text(`$${balances.savings}`)
      }
    }
    if (balances.checking === 0) {
      $('#checking').css('background-color', 'red')
      if (balances.savings === 0) {
        $('#savings').css('background-color', 'red')
      }
    }
  },
  depositSavings: function() {
    balances.savings += parseInt($('#savings-amount').val());
    $('#savings-balance').text(`$${balances.savings}`)
    if (balances.savings > 0) {
      $('#savings').css('background-color', 'grey')
    }
  },
  withdrawSavings: function() {
    const total = balances.savings + balances.checking;
    let input = parseInt($('#savings-amount').val())
    if (total >= input) {
      if (balances.savings >= input) {
        balances.savings -= input;
        $('#savings-balance').text(`$${balances.savings}`)
      } else if (balances.savings < input) {
        input -= balances.savings;
        balances.savings = 0;
        $('#savings-balance').text(`$${balances.savings}`)
        balances.checking -= input;
        $('#checking-balance').text(`$${balances.checking}`)
      }
    }
    if (balances.savings === 0) {
        $('#savings').css('background-color', 'red')
    if (balances.checking === 0) {
      $('#checking').css('background-color', 'red')
      $('body').append('<img src="http://www.quickmeme.com/img/01/012793efe5d4c5905ac6ee03f1a4f3937bfdb31c58d62779b7f335887fa398d3.jpg">')
      }
    }
  }
}

$('#checking-deposit').on('click', balances.depositChecking);
$('#checking-withdraw').on('click', balances.withdrawChecking);
$('#savings-deposit').on('click', balances.depositSavings);
$('#savings-withdraw').on('click', balances.withdrawSavings);
