/*

Create a new Javascript file and link to it with a script tag at the bottom.
(In JS) Change the body tag's style so it has a font-family of "Arial, sans-serif".
(In JS) Replace each of the spans (nickname, favorites, hometown) with your own information.
Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red.
Create a new img element and set its src attribute to a picture of you. Append that element to the page.
*/
/*

document.body.style.fontFamily = "Arial, sans-serif";
document.querySelector("#nickname").innerHTML = "Wang Cong";
document.querySelector("#favorites").innerHTML = "Youtube";
document.querySelector("#hometown").innerHTML = "Shandong";

let liList = document.querySelectorAll('li');
for(let key in liList) {
  liList[key].className = "listitem";
}

document.querySelector('.listitem').style.color = 'red';

const myHead = document.createElement('img');
myHead.src = "http://fillmurray.com/400/400";
document.body.appendChild(myHead);
*/

$('body').css('fontFamily', 'Arial, sans-serif');

$('#nickname').html('Wang Cong');
$('#favorites').html('Youtube');
$('#hometown').html('Shandong');

//$('.listitem').css('color', 'red');
$('li').addClass('listitem').css('color', 'red');

$('<img>').attr('src', "http://fillmurray.com/400/400").appendTo('body');
