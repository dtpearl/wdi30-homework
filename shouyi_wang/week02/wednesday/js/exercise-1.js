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

const img = document.getElementsByTagName('img')[0];
img.style.left = '0px';
const width = window.innerWidth - 250;
const halfWay = Math.floor(width / 2);
console.log(width);
let direction = true;

const resumeWalk = function() {
  img.src = "http://www.anniemation.com/clip_art/images/cat-walk.gif";
  interval = window.setInterval(catWalk, 30);
}

const catWalk = function() {
  let oldPos = parseInt(img.style.left);
  let newPos;

  if (direction) {
    newPos = oldPos + 10;
  } else {
    newPos = oldPos - 10;
  }

  if (newPos >= halfWay - 5 && newPos < halfWay + 5) {
    window.clearInterval(interval);
    img.src = "https://media.giphy.com/media/8rcikGsC4jED6/giphy.gif";
    window.setTimeout(resumeWalk, 5000);
  }

  if (direction) {
    if (newPos > width) {
      direction = false;
      img.style.transform = 'scaleX(-1)';
      return;
    }
  } else {
    if (newPos < 0) {
      direction = true;
      img.style.transform = 'none';
      return;
    }
  }
  img.style.left = newPos + 'px';
}

let interval = window.setInterval(catWalk, 30);
