/*
const calcsquare = function(){

  document.getElementById('solution').innerHTML += `\n` + parseFloat(document.getElementById('square-input').value) * parseFloat(document.getElementById('square-input').value);
};
const calchalf = function(){

  document.getElementById('solution').innerHTML += `\n` + parseFloat(document.getElementById('half-input').value) / 2;
};
const calcpercent = function(){

  document.getElementById('solution').innerHTML += `\n` + parseFloat(document.getElementById('percent1-input').value) / parseFloat(document.getElementById('percent2-input').value) * 100 + "%";
};
const calcarea = function(){

  document.getElementById('solution').innerHTML += `\n` + Math.PI * parseFloat(document.getElementById('area-input').value) * parseFloat(document.getElementById('area-input').value);
};
document.getElementById('square-button').addEventListener('click',calcsquare);
document.getElementById('half-button').addEventListener('click',calchalf);
document.getElementById('percent-button').addEventListener('click',calcpercent);
document.getElementById('area-button').addEventListener('click',calcarea);
*/

$('#square-button').on('click', function(){
  $('#solution').html(Math.pow($('#square-input').val(),2));
});

$('#half-button').on('click', function(){
  $('#solution').html($('#half-input').val()/2);
});

$('#percent-button').on('click', function(){
  $('#solution').html($('#percent1-input').val() * 100 /$('#percent2-input').val());
});

$('#area-button').on('click', function(){
  $('#solution').html(Math.PI * $('#area-input').val() * $('#area-input').val());
});
