// Text Soup
// Using HTML, CSS and JS + jQuery, create a web page which prints a random word from a large sample of text, in a random position on the page, every 100 milliseconds.
//
// Hints:
// Grab some plain text (20-50 paragraphs should do) from one the top 100 novels in the public domain at Project Gutenberg; paste the text into a hidden <div> element in your HTML file, and use jQuery to get the contents of the div.
// Bonus:
// Fade the text in to make it appear, and then fade it out to disappear, to stop the page getting too dense with texty text.
// Try random colours, random font sizes, rotation, whatever floats your boat.

const words = "In phrases such as these we hear the echoes of a controversy now a generation old; a controversy dating back to the “free theatres” of the 1890 period in Paris, Berlin and London, the first performances [4]of Ibsen’s “Ghosts,” and the early plays of Hauptmann and Strindberg. Then the issues between Realist and Philistine were sharply defined; the very terms were mutually exclusive. To be modern, to be “free,” was to be an Ibsenite, an apostle of moral indignation, an author or playgoer burning to lay bare social hypocrisies and shams; not merely pour épater le bourgeois, but in order to assert the Great Truths of Actual Life, so recently discovered by the stage. It mattered little that Ibsenites owed their existence to their misunderstanding of Ibsen. He had supplied them with an essential war cry. The old domination of insincere sentiment and false romance in the theatre was indefensible and insupportable. All the enthusiasm of dramatic reformers was perforce directed to the advance of the new realistic movement. Hence arose a battle of epithets between the two camps, with “antiquated,” “conventional,” “sentimental,” “romantic” on the one hand, and “vulgar,” “dreary,” “indecent,” “noisome” on the other."

var wordsArr = words.split(' ')



// var myVar = setInterval(myTimer, 1000);
//
// function myTimer() {
//   const randomWord = wordsArr[Math.floor(Math.random() * wordsArr.length)]
//   console.log(randomWord)
//   const top = Math.floor(Math.random() * wordsArr.length)
//   const left= Math.floor(Math.random() * wordsArr.length)
//
//   $('.text').css({top: top, left: left}).html(randomWord)
//   var $div = $('.text').clone();
//   $('body').html($div);


$(document).ready(function(){
  const controller = {
    fadeInSpeed: 1000,
    fadeOutSpeed: 2000,
    fontSizeRange: 80,
    timerInterval: 100,
    textColor: '32df1d',
    addWord: '',
    clearWords: function() {
    $('.word').remove();
    }
  }
  let timer = 0;
  let counter = 0;
  const gui = new dat.GUI();

  gui.add(controller, 'fadeInSpeed', 1, 2000);
  gui.add(controller, 'fadeOutSpeed', 1, 3000);
  gui.add(controller, 'fontSizeRange', 1, 300);
  const timerController = gui.add(controller, 'timerInterval' 1, 1000)
gui.add(controller, 'clearWords')
  const timerController.onFinishChange(function(value){
    clearInterval(timer);
    timer = setInterval(putWord, value);
  })

  gui.addColor(controller, 'textColor')
  gui.add(controller, 'addWord')
  $('#words').text().split(/[ ,.;"\n\-]+/);
  const $body = $('body');
  const random = function(max){
    return Math.floor(Math.random() * max);
  }
  const putWord = function(){
    const randomIndex = random(wordsArr.length);
    const text = wordsArr[randomIndex];
    const $div = $('<div class="word">').html(text)
    $div.css({top: random(window.innerHeight),
      left: random(window.innerWidth) + 'px',
      fontSize: (40 + random(controller.fontSizeRange) + 'px'),
      color: controller.textColor,
      transform: `rotate(${random(360)}deg)`
  })
    $div.appendTo($body);
  }
  setInterval(putWord,10);
  // $div.fadeIn(controller.fadeInSpeed).fadeOut(controller.fadeOutSpeed, function(){
  //   $(this).remove();)
  // }
})
;



//GUIパラメータの準備
// var sampleText = function() {
//   this.message = "dat.guiのサンプル";
//   this.color = "#ff0000";
//   this.fontSize = 24;
//   this.border = false;
//   this.fontFamily = "sans-serif";
// };
//
// //GUI表示
// window.onload = function() {
//   text = new sampleTex t();
//   setValue();
//   var gui = new dat.GUI();
//   gui.add(text, 'message').onChange(setValue);
//   gui.addColor(text, 'color').onChange(setValue);
//   gui.add(text, 'fontSize', 6, 48).onChange(setValue);
//   gui.add(text, 'border').onChange(setValue);
//   gui.add(text, 'fontFamily',["sans-serif", "serif", "cursive", "ＭＳ 明朝", "monospace"]).onChange(setValue);
// };
//
// //設定更新処理
// function setValue() {
//   data.innerHTML = text.message;
//   data.style.color = text.color;
//   data.style.fontSize = text.fontSize+"px";
//   data.style.fontFamily = text.fontFamily;
//   if(text.border) {
//     data.style.border = "solid 1px black";
//     data.style.padding = "10px";
//   }
//   else {
//     data.style.border = "none";
//     data.style.padding = "0px";
//   }
// }

  // var FizzyText = function() {
  //   this.message = 'dat.gui';
  //   this.speed = 0.8;
  //   this.displayOutline = false;
  //   this.explode = function() { ... };
  //   // Define render logic ...
  // };
  //
  // window.onload = function() {
  //   var text = new FizzyText();
  //   var gui = new dat.GUI();
  //   gui.add(text, 'message');
  //   gui.add(text, 'speed', -5, 5);
  //   gui.add(text, 'displayOutline');
  //   gui.add(text, 'explode');
  // };






// const moveText = function () {
//
//   console.log(randomWord)
// }
//
// $('#text').setInterval(function() {
//  alert('test');
// }, 10000);
