var alphabet = {
  65: 'e', //a
  66: 'k',
  67: 'm', //c
  68: 'f',
  69: 'l', //e
  70: 'g',
  71: 'd',
  72: 'q',
  73: 'v', //i
  74: 'z',
  75: 'n',
  76: 't', //l
  77: 'o',
  78: 'w', //n
  79: 'y', //o
  80: 'h',
  81: 'x',
  82: 'u', //r
  83: 's',
  84: 'p',
  85: 'a',
  86: 'i',
  87: 'b',
  88: 'r',
  89: 'c',
  90: 'j',
  32: ' ',
}

80
//possibly object with multiple arrays that .pop(the last) and .push(to the front)
//simulating the shifting.
// stops spacebar scrolling the screen.
window.addEventListener('keydown', function(e) {
  if (e.keyCode == 32 && e.target == document.body) {
    e.preventDefault();
  }
});
let home = ''
// button animation and sound;

window.addEventListener('keydown', function(e) {
  console.log(e.keyCode)
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
  const bulb = document.querySelector(`.bulb[data-key="${e.keyCode}"]`)
  const enigma = document.getElementById('result');
  const keyreference = alphabet[e.keyCode]
  console.log(keyreference)
  if (keyreference !== undefined) {
    enigma.innerHTML += keyreference;
    if (enigma.innerHTML === 'home') {
      console.log('worked')
      window.location = "file:///Users/programming/Projects/wdi30-homework/brendan_shields/week02/Tuesday/Enigma/index.html"
    }
  }
  if (!audio) return;
  audio.currentTime = 0
  audio.play()
  key.classList.add('playing');
  bulb.classList.add('playingbulb')
  console.log(audio)
  console.log(key)
})


function remove(e) {

  if (e.propertyName !== 'transform') return
  this.classList.remove('playing')
}


const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', remove));
