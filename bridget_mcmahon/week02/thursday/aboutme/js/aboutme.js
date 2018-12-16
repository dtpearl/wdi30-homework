/*

Create a new Javascript file and link to it with a script tag at the bottom.
(In JS) Change the body tag's style so it has a font-family of "Arial, sans-serif".
(In JS) Replace each of the spans (nickname, favorites, hometown) with your own information.
Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red.
Create a new img element and set its src attribute to a picture of you. Append that element to the page.

*/

// change font
$('body').css({'font-family': 'Arial, sans-serif'});

// replace each of the spans with information
$('#nickname').html("Mossy");
$('#favorites').html("Hamish & Andy, Friends (TV Show), Border Collies")
$('#hometown').html("Brisbane");

// make all lis red
$('li').css({color: 'red'});

// add image
$('body').append($('<img src="https://media.licdn.com/dms/image/C5103AQHYQ3EybbHXeg/profile-displayphoto-shrink_200_200/0?e=1550102400&v=beta&t=tmTSeF8inAeAwD0ObuPJUv5bRyvAH5grK6LxLLu-AFU">'))
