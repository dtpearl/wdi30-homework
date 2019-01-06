const squareButton = document.getElementById('square-button');

const squareNumber = function () {
  // retrieve the squareNumber
  // square the squareNumber
  // square the result
const input = parseInt( document.getElementById('square-input').value );
const result = input * input;
document.getElementsByElementId('solution').innerHTML = result;

}

squareButton.addEventListener('click', squareNumber);
