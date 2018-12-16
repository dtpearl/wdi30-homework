/*
Create a new Javascript file and link to it with a script tag at the bottom.
For each operation, create an event listener for the button, and when it's clicked, find the value of the appropriate input and show the result of the calculation in the solution div.
Bonus: respond to key presses so that the user doesn't have to click the button.
*/

/*
const squareButton = document.getElementById("square-button");

const calculateSquare = function () {
  const input = document.getElementById("square-input").value;

  const solution = input * input;
  document.getElementById("solution").innerHTML = solution;
}

squareButton.addEventListener("click", calculateSquare);
*/

$('#square-button').on('click', () => {
  const value = parseInt($('#square-input').val());
  $('#solution').html(`${value * value}`);
});
