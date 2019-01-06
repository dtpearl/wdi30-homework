
const randomPosition = function (div) {
  $(div).css({position: "absolute", top: Math.random() * $(window).height(), left: Math.random() * $(window).width()})
}

const randomWord = function () {
  const random = $("#text-container").text().split(/[ ,.:""\n\-]+/)[Math.floor(Math.random() * $("#text-container").text().split(/[ ,.:""\n\-]+/).length)];
  const $div = $("<div class='word'></div>").html(random);
  $("body").append($div);
  randomPosition($div);
  $div.fadeIn(1000).fadeOut(2000);
}

$(document).ready(function () {
  setInterval(randomWord, 100);
})
