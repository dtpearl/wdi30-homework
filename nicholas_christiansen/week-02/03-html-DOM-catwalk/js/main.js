
/* Part 1
 * Create a function called catWalk() that moves the cat 10 pixels to the right
 * of where it started, by changing the "left" style property.
 * Call that function every 50 milliseconds. Your cat should now be moving
 * across the screen from left to right. Hurrah!

 * Bonus #1: When the cat reaches the right-hand of the screen, restart
 * them at the left hand side ("0px"). So they should keep walking from
 * left to right across the screen, forever and ever.

 * Bonus #2: When the cat reaches the right-hand of the screen, make them
 * move backwards instead. They should keep walking back and forth forever
 * and ever.

/*
 * Bonus #3: When the cat reaches the middle of the screen, replace the
 * img with an image of a cat dancing, keep it dancing for 10 seconds, and
 * then replace the img with the original image and have it continue the walk.
 */

const cat = {
  x: 0,
  y: 0,
  time: 0,
  surf: function () {

    if (this.t === undefined) { this.t = 0; }

    // lemniscate of Bernoulli
    // https://en.wikipedia.org/wiki/Lemniscate_of_Bernoulli
    let scale = 2 / (3 - Math.cos(2*this.t));
    let left = scale * Math.cos(this.t);
    let top = scale * Math.sin(2*this.t);

    // set img x and y
    img.style.left = 300*(left+2) + 'px';
    img.style.top = 200*(top+1) + 'px';

    let factor = Math.abs(left);

    let catAngleDeg = (1-factor)*40 +0;
    let boardAngleRad = Math.PI / (factor + 1.5);

    img.style.transform = `rotate(${ catAngleDeg }deg) scaleX(-1)`
    //img.style.transform =  "scaleX(-1)";

    // reset canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // set new location of oval
    ctx.beginPath();
    // left/top/width/height/angle/? slices shape
    ctx.ellipse(100+300*(left+2), 250+200*(top+1), 50, 250, boardAngleRad, 0, 2 * Math.PI);
    ctx.fill();

    // new timestep
    this.t += 0.1
  }
}

// Setup background GIF
//document.body.style.backgroundImage = "url(https://i.imgur.com/pDKw5Ds.gif)"

// get image
const img = document.getElementsByTagName('img')[0];

// initial setup
img.style.left = '0px';
img.style.top = '0px'
img.style.transform =  "rotate(20deg)";
img.style.transform =  "scaleX(-1)";

// get oval canvas
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// initials setup
ctx.fillStyle = 'Cornsilk';
ctx.ellipse(100, 250, 30, 200, Math.PI / 2.5, 0, 2 * Math.PI);

// run function
setInterval(cat.surf, 50);
