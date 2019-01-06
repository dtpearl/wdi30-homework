$(document).ready(function() {

  // checking deposit ///////////////////////////////////
  $('#checking-deposit').on('click', function() {
    const amount = Number($('#checking-balance').html().substring(1)) + Number($('#checking-amount').val());
    $('#checking-balance').removeClass('zero');
    $('#checking-balance').html(`$${ amount }`);
  });

  // checking withdraw //////////////////////////////////
  $('#checking-withdraw').on('click', function() {
    const amount = Number($('#checking-balance').html().substring(1)) - $('#checking-amount').val();

    if (amount < 0) {
      const total = Number($('#checking-balance').html().substring(1)) + Number($('#savings-balance').html().substring(1));
      if (amount < total) {
        $('#checking-balance').html('$0');
        const difference = (Number($('#savings-balance').html().substring(1))) + amount;
        $('#savings-balance').html(`$${ difference }`);
      } else {
        console.log("Insufficient funds");
      }
    } else if (amount === 0) {
      $('#checking-balance').addClass('zero');
      $('#checking-balance').html(`$${ amount }`);
    } else {
      $('#checking-balance').html(`$${ amount }`);
    }

  });

  // savings deposit /////////////////////////////////////
  $('#savings-deposit').on('click', function() {
    const amount = Number($('#savings-balance').html().substring(1)) + Number($('#savings-amount').val());
    $('#savings-balance').removeClass('zero');
    $('#savings-balance').html(`$${ amount }`);
  });

  // savings withdrawal /////////////////////////////////
  $('#savings-withdraw').on('click', function() {
    const amount = Number($('#savings-balance').html().substring(1)) - $('#savings-amount').val();

    if (amount < 0) {
      const total = Number($('#checking-balance').html().substring(1)) + Number($('#savings-balance').html().substring(1));
      if (amount < total) {
        $('#savings-balance').html('$0');
        const difference = (Number($('#checking-balance').html().substring(1))) + amount;
        $('#checking-balance').html(`$${ difference }`);
      } else {
        console.log("Insufficient funds");
      }
    } else if (amount === 0) {
      $('#savings-balance').addClass('zero');
      $('#savings-balance').html(`$${ amount }`);
    } else {
      $('#savings-balance').html(`$${ amount }`);
    }

  });

}); // document ready
