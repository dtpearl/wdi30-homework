/*

Create a new Javascript file and link to it with a script tag at the bottom.

Create a variable to store a reference to the img.

Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.

Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.

Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!

Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen, forever and ever.

Bonus #2: When the cat reaches the right-hand of the screen, make them move backwards instead. They should keep walking back and forth forever and ever.

Bonus #3: When the cat reaches the middle of the screen, replace the img with an image of a cat dancing, keep it dancing for 10 seconds, and then replace the img with the original image and have it continue the walk.

Bonus #4: Pretty much go nuts or whatever.

*/

const cat = document.getElementById('cat-gif');
const cactus1 = document.getElementById('cactus');
const cactus2 = document.getElementById('cactus2');

cat.style.position = 'absolute';
cat.style.left = '0px';
cat.style.top = '180px';
let position = 0;

const catWalk = function() {
  position = position + 10;
  cat.style.left = position + 'px';
  if (cat.style.left == '1400px') {
    clearInterval(idForward);
    setInterval(catWalkBackwards, 50);
  }
};

const catWalkBackwards = function() {
  cat.style.transform = 'scaleX(-1)';
  position = position - 10;
  cat.style.left = position + 'px';
  if (cat.style.left == '600px') {
    clearInterval(idForward + 1);
    cat.src = '../catwalk/images/dancing-cat.gif';
    document.body.style.background = "#111111 url('../catwalk/images/space2.png') no-repeat top right"
    document.body.style.backgroundSize = '100%';
    cactus1.style.display = 'none';
    cactus2.style.display = 'none';
    // cat.style.transform = 'scaleX(1)';
    // setInterval(catWalk, 50);
    // if (cat.style.left = '650px') {
    //   clearInterval(idForward + 2);
    }
};

const idForward = setInterval(catWalk, 50);
