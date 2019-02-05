// $('#text').randomizeText({
//
//   text: "Lorem ipsum",
//   refreshRate: 50,
//   timePerLetter: 120,
//   randomTime: 50,
//   randomLetters: [],
//
// });
// -----------------
$(document).get
$("words").text().split(/[ , . ; "'\n\-+']);
const $body = $('body');
const random = function (max){
    return Math.floor(Math.random() * max);
}
  const putWord = function (){
      const randomIndex = random (words.length);
      const text = words[randomIndex];
      const $div = $('<div class="word">').html(text);
      $div.appendTo($body);
      $div.css({
        top: random(window.innerHeight) + 'px',
        left: random(window.innerWidth) + 'px',
        fontSize" (40 + random(80)) + 'px'
      })
  }
setInterval(putWord, 50);
// fadein method
// fadout method
