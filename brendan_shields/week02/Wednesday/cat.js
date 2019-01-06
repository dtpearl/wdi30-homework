const img = document.getElementsByTagName('img')[0];
const clip = img.style.clipPath;
const coord = [75, 1000]
img.style.position = 'absolute';
img.style.top = '0px';
// set an if else function with a switch that will make the cat
// walk around the map.
const watchKittyFall = function() {
  const oldTop = parseInt(img.style.top);
  const newTop = oldTop + 1;
  img.style.top = newTop + 'px';
  if (oldTop > coord[count]) {
    window.clearInterval(fallTimer)

  }
};

let fallTimer = setInterval(watchKittyFall, 40);

let count = 0;
let secondCount
const walkDown = function() {
    if (count === 0) {
      img.style.clipPath = null;
      img.style.clipPath = "inset(0px 35px 0px 35px)"
      img.style.left = "-35px"
      count++;
    } else if (count === 1){
      img.style.clipPath = null;
      img.style.clipPath = "inset(0px 0px 0px 70px)"
      img.style.left = "-70px"
      count++;
    } else if (count === 2){
      img.style.clipPath = null;
      img.style.clipPath = "inset(0px 35px 0px 35px)"
      img.style.left = "-35px"
      count++;
    } else if (count === 3){
        img.style.clipPath = null;
        img.style.clipPath = "inset(0px 70px 0px 0px)"
        img.style.left = "0px"
        count = 0;
        secondCount + 1
        if (secondCount == 4) {
          console.log('test')
        }

      }else{
      console.log('broke it')
  }
}

setInterval(walkDown, 200);
