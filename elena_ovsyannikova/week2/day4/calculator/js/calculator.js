// const squareButton = document.getElementById('square-button');
//
// const squareNumber = function () {
//   const input = parseInt( document.getElementById('square-input').value );
//
//   const result = input * input;
//
//   document.getElementById('solution').innerHTML = result;
// }
//
// squareButton.addEventListener('click', squareNumber);
//
//
// Create a new Javascript file and link to it with a script tag at the bottom.
// For each operation, create an event listener for the button, and when it's clicked, find the value of the appropriate input and show the result of the calculation in the solution div.
// Bonus: respond to key presses so that the user doesn't have to click the button.

const squareButton = $('#square-button');
console.log(squareButton);
const squareNumber = function() {
  const squareInput = parseInt($('#square-input').val());
  console.log(squareInput);
  const result=squareInput*squareInput;
  $('#solution').html(result);
}
squareButton.on('click', squareNumber);
