/*
document.getElementById('nickname').innerHTML = "Tom";
document.getElementById('favorites').innerHTML = "Michael Jackson,Ham Burger";
document.getElementById('hometown').innerHTML = "Bahama";

const li = document.getElementsByTagName('li');

for(let licnt=0; licnt<=li.length-1; licnt++)
{
  //li[licnt].style.color = "#FF0000";
  li[licnt].className = "redcolor";
  //li[licnt].addClass("redcolor");
}

const imgel = document.createElement('img');
imgel.src = "http://fillmurray.com/400/300";

document.body.appendChild(imgel);
*/

/*const makeMadLib = function(){
  const li = document.getElementsByTagName('li');


  document.getElementById('story').innerHTML = document.getElementById('person').value + ' ' + document.getElementById('adjective').value + ' ' + document.getElementById('noun').value;
};
document.getElementById('lib-button').addEventListener('click',makeMadLib);
*/

const makeMadLib = function(){
  console.log($('#person').val());
  $('#story').html($('#person').val() + ' ' + $('#adjective').val() + ' ' + $('#noun').val());
};
makeMadLib();

$('#lib-button').on('click',makeMadLib);
