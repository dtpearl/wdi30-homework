/*

Create a new Javascript file and link to it with a script tag at the bottom.

Add an event listener to the button so that it calls a makeMadLib function when clicked.

In the makeMadLib function, retrieve the current values of the form input elements, make a story from them, and output that in the story div (like "Pamela really likes pink cucumbers.")

*/

$('h1').funText(400, 'candy');

const makeMadLib = function() {
  const noun = $('#noun').val();
  const adj = $('#adjective').val();
  const person = $('#person').val();

  $('#story').html(`${ person } really likes ${ adj } ${ noun }`);
};

$('#lib-button').on('click', makeMadLib);
