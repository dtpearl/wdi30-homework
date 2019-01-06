
const cat = document.getElementById('cat-animation');
cat.style.position = 'absolute';
cat.style.left = '0px';
cat.style.top = '80px';
let position = 0;

const catWalk = function() {
  position = position + 20;
  cat.style.left = position + 'px';
  if (cat.style.left === '1400px') {
    //position = -200;
    clearInterval(id);
    setInterval(catWalkBackwards, 50);
  }
};

const catWalkBackwards = function(){
  cat.style.transform = 'scaleX(-1)';
  position = position - 10;
  cat.style.left = position + 'px';
}

const id = setInterval(catWalk, 50);

const cat2 = document.getElementsByTagName('cat-animation2');
cat2.style.position = 'absolute';
cat2.style.left = '0px';
cat2.style.top = '0px';
let position2 = 0;

const catWalk2 = function () {
  position2 = position2 + 10;
  cat2.style.top = position2 + 'px';
  if (cat2.style.top === '1400px') {
    // position = -200;
    clearInterval(id);
  }
};
setInterval(catWalk2, 100);



//
// const catWalkBackwards = function() {
//   cat.style.transform = 'scaleX(-1)';
//   position = position - 20;
//   cat.style.left = position + 'px';
//   if (cat.style.left === 0){
//     cat.style.transform = 'scaleX(1)';
//     setInterval(catWalk, 50);
//   }
// }
// const id = setInterval(catWalk, 50);


// const catanimation = document.getElementById('cat-animation');
//
// catanimation.style.position = 'absolute';
// catanimation.style.left = '0px';
// catanimation.style.top = '100px';
// let position = 0;
//
// const catWalk = function() {
//   position = position + 10;
//   catanimation.style.left = position + 'px';
//   if (catanimation.style.left === '1400px') {
//     position = -200;
//     clearInterval(id);
//     setInterval(catWalkBackwards, 50);
//   }
// };
//
// const catWalkBackwards = function(){
//   catanimation.style.transform = 'scaleX(-1)';
//   position = position - 10;
//   catanimation.style.left = position + 'px';'
//
//   }
//
//
//
//
// const id = setInterval(catWalk, 50);


// Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen, forever and ever.

// Bonus #2: When the cat reaches the right-hand of the screen, make them move backwards instead. They should keep walking back and forth forever and ever.
//
// Bonus #3: When the cat reaches the middle of the screen, replace the img with an image of a cat dancing, keep it dancing for 10 seconds, and then replace the img with the original image and have it continue the walk.
//
// Bonus #4: Pretty much go nuts or whatever.
