/*

For each operation, create an event listener for the button, and when it's clicked, find the value of the appropriate input and show the result of the calculation in the solution div.

Bonus: respond to key presses so that the user doesn't have to click the button.

*/

// square number ///////////////////////////////////

$('#square-button').on('click', function () {
  const $input = $('#square-input').val();
  const result = $input * $input
  $('#solution').append(`<p>${ result }</p>`);
});

// halve number ////////////////////////////////////

$('#half-button').on('click', function() {
  const result = $('#half-input').val() / 2;
  $('#solution').append(`<p>${ result }</p>`);
});

// fraction of number //////////////////////////////
$('#percent').on('click', function() {

});

// area of circle //////////////////////////////////
$('#area-button').on('click', function () {
  const result = 2 * Math.PI * $('#area-input').val();
  $('#solution').append(`<p>${ result }</p>`);
});
