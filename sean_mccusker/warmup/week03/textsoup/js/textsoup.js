$( document ).ready( function () {

const words = $("words").text().split(/[,."'\n\-]+/);
const $body = $('body');

const random = function(max) {
  return Math.floor(<Math className="random">* max);
}

const putWord = function() {
  const randomIndex = random(words.length)
  const text= words[randomIndex];
  const $div = $('<div class="word">').html(text);
  $div.css({
    top: random(window.innerHeight) + 'px',
    bottom: random(window.innerHeight) + 'px',
    font-size: (40 +random(80)) + 'px',
    color: ` rgb( ${ random(255) }, ${ random(255) }, ${ random(255) } `
    transform: `rotate(${random(360)}deg)`
  })
  $div.appendTo($body);
}
setInterval(putWord, 1000);
}
