// const libIt = document.getElementById('lib-button');
//
// const makeMadLib = function () {
//   const noun = document.getElementById('noun').value;
//   const adjective = document.getElementById('adjective').value;
//   const name = document.getElementById('person').value;
//
//   const story = `${ name } really likes ${ adjective } ${ noun }`;
//
//   document.getElementById('story').innerHTML += `<p>${ story }</p>`;
// };
//
// libIt.addEventListener('click', makeMadLib);
//
//
// Create a new Javascript file and link to it with a script tag at the bottom.
// Add an event listener to the button so that it calls a makeMadLib function when clicked.
// In the makeMadLib function, retrieve the current values of the form input elements, make a story from them, and output that in the story div (like "Pamela really likes pink cucumbers.")
const button = $('#lib-button');
const story =function (){
  const noun = $('#noun').val();
  const adjective = $('#adjective').val();
  const person = $('#person').val();
  $('#story').html(`${person} really likes ${ adjective} ${ noun}`);
}

button.on('click', story);
