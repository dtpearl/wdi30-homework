$(document).ready(function(){

  let timer = null;
  let counter = 0;

  const controller = {
    fadeInSpeed: 1000,
    fadeOutSpeed: 1000,
    fontSizeRange: 80,
    timerInterval: 100,
    textColor: '#32df1d',
    addWord: '',
    clearWords: function(){
      $('.word').remove();
    }
  }

  const gui = new dat.GUI();

  gui.add(controller, 'fadeInSpeed', 1, 5000); // Min and max
  gui.add(controller, 'fadeOutSpeed', 1, 5000); // Min and max
  gui.add(controller, 'fontSize', 1, 300);

  const timerController = gui.add(controller, 'timerInterval', 1, 1000);

  timerController.onFinishChange(function(value){
    clearInterval(timer);
    timer = setInterval(putWord, value);
  })

gui.addColor(controller, 'textColor');

gui.add(controller, 'adWord');

gui.add(controller, 'clearWords');


  // This single line grabs the text contents of our div and returns it as one big string (the .html()
  // jQuery method would grab any child HTML it contained too), then turns it into an array by splitting
  // the string up based on a regular expression which looks for spaces, punctuation and newlines.
  // (That punctuation will not appear in the words that fill our new array.)
  // So, note that .split() will accept a regular expression as well as just a string...
  const words = $("#words").text().split(/[ ,."';\n\-]+/);

  // store the body in a variable to use later when appending
  const $body = $("body");

  // helper function to return a number between 0 and max
  const random = function(max){
    return Math.floor(Math.random() * max);
  }

  // Our main function to randomly put a word on the page
  const putWord = function(){
    // Get a random word from our array, using our random helper funcion, with the word array length as the maximum value
    const randomIndex = random(words.length);
    // select random word
    // const text = words[randomIndex];
    // console.log(text);

    let text = '';

    if (( controller.addWord.length > 0 ) && ( counter % 2 === 0 )) {
      text = controller.addWord;
    } else {
      text = words[randomIndex];
    }

    // Insert the random word as the content of a new div
    const $div = $("<div class='word'>").html(text);

    $div.css({
      top: random(window.innerHeight) + "px",
      left: random(window.innerWidth) + "px",
      // fontSize: (40 + random(80)) + "px",
      fontSize: (40 + random(controller.fontSizeRange)) + "px",
      // color: "rgb(" + random(255) + ", " + random(255) + ", " + random(255) + ")",
      color: controller.textColor,
      transform: `rotate(${random(360)}deg)`
    });

    // apppend the new $div to the body
    $div.appendTo($body);

    // make the text fade in and fade out of the screen
    $div.fadeIn(controller.fadeInSpeed).fadeOut(controller.fadeOutSpeed, function(){
      $(this).remove();
    });

    //need to increment our counter at the end of every call to putWord()
    counter++
  };
  // putWord();
  timer = setInterval(putWord, 100);
});
