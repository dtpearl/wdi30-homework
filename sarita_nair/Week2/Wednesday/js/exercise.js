console.log(window.innerWidth);
var direction = '';
const movecat = function() {
  console.log();
  const left = $('img').css('left');
  direction = 'left';
  //console.log(left);
  if (Number(left.substring(0,left.length-2)) === (window.innerWidth - 10 + 8)) {
    window.clearInterval(stop);
    //left.substring(0,left.length-2)
    //$('img').css('left', '');
    //$('#dancingsong')[0].pause();

    $('img').css('transform','scaleX(-1)');
    $('img').css('top','+=30'+'px');
    stop = setInterval(movecatbackwards, 100);

  }
  $('img').css('left', '+=10' + 'px');

  //img.setAttribute('width', img.width+1);
};
const playsong = function(){
  var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'media/chase_the_donkey-dominik_hauser-144_proud_music_preview.mp3');
    audioElement.play();
//   var playPromise = $('#dancingsong')[0].play();
//
// // In browsers that don’t yet support this functionality,
// // playPromise won’t be defined.
// if (playPromise !== undefined) {
//   playPromise.then(function() {
//     // Automatic playback started!
//   }).catch(function(error) {
//     // Automatic playback failed.
//     // Show a UI element to let the user manually start playback.
//   });
// }
};
const movecatbackwards = function(){
  const width = $('img').width();
  const height = $('img').position()["top"];
  const left = $('img').css('left');
  direction = 'right';
  var displacement = (direction === "right") ? 10 : -10;
  var halfway = Math.ceil(((window.innerWidth/2)-(width/2))/displacement)*displacement;
  if(Number(left.substring(0,left.length-2)) < 0)
  {
    //console.log(left);
    window.clearInterval(stop);
    $('img').css('transform','scaleX(1)');
    $('img').css('top','+=30'+'px');
    stop = setInterval(movecat, 100);

  }
  if(Number(left.substring(0,left.length-2))-8 === halfway)
  {
    //console.log(`window ${Math.floor(window.innerHeight/2)}`);
    window.clearInterval(stop);
    $('img').attr('src', 'images/tenor.gif');
    playsong();
    // var media = $('#dancingsong')[0];
    // const playPromise = media.play();
    // if (playPromise !== null){
    // playPromise.catch(() => { media.play(); })
    //}

  }
  $('img').css('left', '-=10' + 'px');

  //console.log(`displacement : ${halfway} ${Number(left.substring(0,left.length-2))}`);
//(height - 20 <= Math.floor(window.innerHeight/2)) && (width - 30 <= Math.floor(window.innerWidth/2))


};
let stop = setInterval(movecat, 100);
