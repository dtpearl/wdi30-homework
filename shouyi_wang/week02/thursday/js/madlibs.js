/*
Create a new Javascript file and link to it with a script tag at the bottom.
Add an event listener to the button so that it calls a makeMadLib function when clicked.
In the makeMadLib function, retrieve the current values of the form input elements, make a story from them, and output that in the story div (like "Pamela really likes pink cucumbers.")
*/
/*
const button = document.getElementById("lib-button");
const makeMadLib = function (event) {
  const noun = document.getElementById("noun").value;
  const adj = document.getElementById("adjective").value;
  const person = document.getElementById("person").value;

  const story = document.getElementById("story");

  story.innerHTML = `${person} really likes ${adj} ${noun}.`;
}


button.addEventListener("click", makeMadLib);
*/


$('#lib-button').on('click', () => {
  const noun = $('#noun').val();
  const adj = $('#adjective').val();
  const person = $('#person').val();

  $('#story').html(`${noun} really likes ${adj} ${person}.`);

});
