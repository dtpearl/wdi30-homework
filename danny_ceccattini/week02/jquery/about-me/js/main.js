/*

Create a new Javascript file and link to it with a script tag at the bottom. X

(In JS) Change the body tag's style so it has a font-family of "Arial, sans-serif".

(In JS) Replace each of the spans (nickname, favorites, hometown) with your own information.

Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red.

Create a new img element and set its src attribute to a picture of you. Append that element to the page.


*/

$('body').css('font-family', 'Arial, sans-serif');

$('h1').css('font-size', '100px').css('margin', '0 auto').css('padding', '20px');


let $list = $('ul li');

for (let i = 0; i < $list.length; i++) {
  console.log($list[i]);
}

$($list[0]).html('biscuits').addClass('listitem');
$($list[1]).html('chocoloate').addClass('listitem');
$($list[2]).html('trombone').addClass('listitem');

let img = $('<img>')
img.attr('src', 'img/george-daniels.jpg');
$('body').append(img);
