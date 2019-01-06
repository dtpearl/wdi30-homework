const img = document.getElementsByTagName( 'img' )[2];
img.style.left = '350px';
img.style.top = '2600px';
const watchKittyFly = function () {
  const oldTop = parseInt( img.style.top );
  const newTop = oldTop - 1;
  img.style.top = newTop + 'px';
};
setInterval( watchKittyFly, 10 );

// const img = document.getElementsByTagName('img')[2];
// img.style.left = '350px';
// img.style.top = '2000px';
// const watchKittyFall = function() {
//   const oldTop = parseInt(img.style.top);
//   const newTop = oldTop + 1;
//   img.style.top = newTop + 'px';
// };
// setInterval(watchKittyFall, 10);

const cat = document.querySelector( "img" );
cat.style.left = '0px';
cat.style.top = '10px';
let returnWidth = window.innerWidth - cat.width;
let returnHeight = window.innerHeight - cat.width;


const  catWalk = function () {
  oldLeft = parseInt( cat.style.left );
  newLeft = oldLeft + 10;
  cat.style.left = newLeft + 'px';
  if(parseInt( cat.style.left ) >= returnWidth ){
    cat.style.transform = "scaleX(-1)"; // Flips image so that it is not walking backwards
    animateright = setInterval( walkBack,100 ); // The setInterval() method will continue calling the function until clearInterval() is called, or the window is closed. ... Tip: To execute a function only once, after a specified number of milliseconds, use the setTimeout() method.
    clearInterval( animate ); // The clearInterval() function in javascript clears the interval which has been set by setInterval() function before that. setInterval() function takes two parameters. ... The number id value returned by setTimeout() function is stored in a variable and it's passed into the clearInterval() function to clear the interval.
  }
};

const walkBack = function () {
    newLeft = newLeft - 10;
    let dancingCat = parseInt( cat.style.left );
    if ( newLeft <= ( dancingCat / 2 )) {
      cat.src = 'http://meowgifs.com/wp-content/uploads/2014/10/shake-it.gif';
    }
    cat.style.left = newLeft + 'px';
      if(parseInt(cat.style.left) === 0){
        cat.style.transform = "scaleX(1)"; // Flips image so that it is not walking backwards
        animate = setInterval( catWalk, 100 );
        clearInterval( animateright );
      }
}
let animate = setInterval( catWalk, 100 );
