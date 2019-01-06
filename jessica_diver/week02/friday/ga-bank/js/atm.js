// first feature will be to add and entered number to the amountin that bank account.
// record the value of the input of #checking-amount.
// add that to the number that's inside the checking-balance div.


$(document).ready(function(){

// find the value being entered in the input
let $checkingamount = Number($('#checking-amount').val());
let $checkingbalance = Number($('#checking-balance').html().substring(1));
//if deposit is clicked, add that value entered to the value in the balance.

//checking deposit
$('#checking-deposit').on('click', function (){
  const newBalance = Number($('#checking-balance').html().substring(1)) + Number($('#checking-amount').val());
  $('#checking-balance').html(`$ ${ newBalance }`);
  if (newBalance > 0) {
    $('#checking-balance').removeClass('zero');
    if (newBalance === 0) {
      $('#checking-balance').addClass('zero');
    }
  }
});

//checking withdraw
$('#checking-withdraw').on('click', function() {
  const newBalance = Number($('#checking-balance').html().substring(1)) - $('#checking-amount').val();
  if (newBalance < 0 ) {
    alert('You have insufficient funds');
  } else {
  $('#checking-balance').html(`$${ newBalance }`);
}
if (newBalance > 0) {
  $('#checking-balance').removeClass('zero');
  if (newBalance <= 0) {
    $('#checking-balance').addClass('zero');
  }
}
});

//savings Deposit
$('#savings-deposit').on('click', function (){
  const newBalance = Number($('#savings-balance').html().substring(1)) + Number($('#savings-amount').val());
  $('#savings-balance').html(`$ ${ newBalance }`);
  if (newBalance > 0) {
    $('#savings-balance').removeClass('zero');
    if (newBalance === 0) {
      $('#savings-balance').addClass('zero');
    }
  }
});

//savings withdraw
$('#savings-withdraw').on('click', function() {
  const newBalance = Number($('#savings-balance').html().substring(1)) - $('#savings-amount').val();
  if (newBalance < 0 ) {
    alert('You have insufficient funds');
  } else {
  $('#savings-balance').html(`$${ newBalance }`);
}
if (newBalance > 0) {
  $('#savings-balance').removeClass('zero');
  if (newBalance <= 0) {
    $('#savings-balance').addClass('zero');
  }
}


});

});

// object includes
// deposit money
// withdraw money
// jquery to link the object with functions to the css/html/DOM
