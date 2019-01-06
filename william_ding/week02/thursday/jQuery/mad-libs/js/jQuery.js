// const createStory = function () {
//   const div = document.getElementById('story');
//   const exStory = document.querySelector("#story p");
//   div.removeChild(exStory);
//   const noun = document.getElementById('noun').value;
//   const adjective = document.getElementById('adjective').value;
//   const person = document.getElementById('person').value;
//   let p = document.createElement("p");
//   p.innerHTML = `${person} really likes ${adjective} ${noun}.`;
//   div.appendChild(p);
//   console.log(p);
// }




const createStory = function () {
  $("#story").html("");
  $(`<p>${$("#person").val()} really likes ${$("#adjective").val()} ${$("#noun").val()}.</p>`).appendTo("#story");
}


const libIt = document.querySelector('#lib-button');
libIt.addEventListener("click", createStory);
