

// document.body.style.fontFamily = "Arial, sans-serif";
//
// const nickname = document.getElementById('nickname');
// nickname.innerHTML = 'The Blade';
//
// document.getElementById('favorites').innerHTML = 'Groucho, Harpo, Chico';
// document.getElementById('hometown').innerHTML = 'Sydney';
//
// const listItems = document.getElementsByTagName('li');
// for (let i = 0; i < listItems.length; i++) {
//   listItems[i].className = 'listitem';
// }
//
// // Create a new img element and set its src attribute to a picture of you. Append that element to the page.
// const myStupidHead = document.createElement('img'); // Detached DOM node
// myStupidHead.src = "http://fillmurray.com/700/450";
// document.body.appendChild(myStupidHead);

// Create a new Javascript file and link to it with a script tag at the bottom.
// (In JS) Change the body tag's style so it has a font-family of "Arial, sans-serif".
// (In JS) Replace each of the spans (nickname, favorites, hometown) with your own information.
// Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red.
// Create a new img element and set its src attribute to a picture of you. Append that element to the page.

$('body').css('font-Family', 'Arial', 'sans-serif');
$('#nickname').html('helenovs');
$('#favorites').html('travels');
$('#hometown').html('Sydney');


const link = $('li');
for (var i = 0; i < link.length; i++) {
  let $link= $ (link[i]);
  $link.addClass('listitem');
  $link.css("color", "red");
}



$('body').append($('<img>').attr('src', 'http://fillmurray.com/700/450'));
