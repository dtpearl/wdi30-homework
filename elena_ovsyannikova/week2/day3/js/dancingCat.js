const imgCat= document.getElementsByTagName('img')[0];
const imgCat2= document.getElementsByTagName('img')[1];

imgCat.style.position = 'absolute';
imgCat.style.top = '0px';
imgCat.style.left ='0px';
var widthCat = imgCat.width;
var heightCat = imgCat.height;
imgCat2.style.top = $(window).height()-heightCat+'px';
imgCat2.style.left =$(window).width()-widthCat+'px';
  imgCat2.style.webkitTransform = 'scaleX(-1)';
console.log('screen.width:'+$(window).width());
console.log('screen.height:'+$(window).height());


console.log('cat.width:'+widthCat);
var scaleX=1;
var scaleY=1;
var scaleX2=-1;
var scaleY2=-1;
var dancingCat = function() {
  var oldLeft = parseInt(imgCat.style.left);
  var oldTop = parseInt(imgCat.style.top);

  var newTop = oldTop + 2*scaleY;
  var newLeft = oldLeft + 10*scaleX;
  imgCat.style.top = newTop + 'px';
  imgCat.style.left = newLeft + 'px';
  if (newLeft > ($(window).width()-widthCat)||newLeft===0) {
    // window.clearInterval(1);
    scaleX*=-1;
    imgCat.style.webkitTransform = 'scaleX('+scaleX+')';

  }
  if (newTop > ($(window).height()-heightCat)||newTop===0) {
    // window.clearInterval(1);

    scaleY*=-1;

  }
  // console.log(newLeft);
  // console.log(fadeTimer);
};

var dancingCat2 = function() {
  var oldLeft = parseInt(imgCat2.style.left);
  var oldTop = parseInt(imgCat2.style.top);

  var newTop = oldTop + 2*scaleY2;
  var newLeft = oldLeft + 10*scaleX2;
  imgCat2.style.top = newTop + 'px';
  imgCat2.style.left = newLeft + 'px';
  if (newLeft > ($(window).width()-widthCat)||newLeft<0) {
    // window.clearInterval(1);
    scaleX2*=-1;
    imgCat2.style.webkitTransform = 'scaleX('+scaleX2+')';

  }
  if (newTop > ($(window).height()-heightCat)||newTop<0) {
    // window.clearInterval(1);

    scaleY2*=-1;

  }
  // console.log(newLeft);
  // console.log(fadeTimer2);
};

let fadeTimer=window.setInterval(dancingCat, 25);
let fadeTimer2=window.setInterval(dancingCat2, 25);
