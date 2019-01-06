// const body = document.getElementsByTagName("body")[0];
// body.style.fontFamily = "Arial, sans-serif";

// const nikename = document.querySelector("#nickname");
// const favorites = document.querySelector("#favorites");
// const hometown = document.querySelector("#hometown");
//
// nickname.innerHTML = "Tuan Tuan";
// favorites.innerHTML = "Cat treats";
// hometown.innerHTML = "Brisbane";

// const lists = document.querySelectorAll("ul > li");
// for (let i = 0; i < lists.length; i++) {
//   lists[i].className += "listitem";
// }

// const picture = document.createElement("img");
// picture.src = "http://placekitten.com/40/40";
// console.log(picture);
// document.body.appendChild(picture);

$("body").css({"font-family" : "Arial, sans-serif"});

$("#nickname").html("Tuan Tuan");
$("#favorites").html("Cat treats");
$("#hometown").html("Brisbane");

$("ul li").addClass("listitem");
$(`<img src="http://placekitten.com/40/40">`).appendTo($("body"));
