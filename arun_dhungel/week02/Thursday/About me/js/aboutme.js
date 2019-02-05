$('body').css("font-family", "Arial, Sans-Serif")

$('#nickname').html("Andy");


$('#favorites').html("Groucho, Harpo, Chico");
$('#hometown').html("Sydney");

const listItems = $('li');
for (let i = 0; i < listItems.length; i++) {
    $(listItems[i]).addClass("listitem");
}

// Create a new img element and set its src attribute to a picture of you. Append that element to the page.
const myStupidHead = $('img'); // Detached DOM node
myStupidHead.src = "http://fillmurray.com/700/450";
$('body').append("myStupidHead");