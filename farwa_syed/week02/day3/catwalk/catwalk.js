// var left = 0;//distance b/w the img and left position on screen -
// var catwalk = function () {
//     left = left + 40;
//     document.getElementById('catwalk').style.left = left + 'px';
// }
//-----
let elem = document.getElementById("catwalk");

const catMove = function (){
  let elem = document.getElementById("catwalk");

  let pos = 0;
  let id = setInterval(walkforward, 5);
  function walkforward(){
    if(pos == 700){
      clearInterval(id);
    //  setInterval(walkback, 5);
      //flipimage();
      // pos--;
      // elem.style.right = pos + 'px';
    } else {
      pos++;
      elem.style.left = pos + 'px';
    }
  }

}
//-----
// function walkback() {
//   pos = 700;
//   pos = pos - 10;
//   elem.style.left = pos + 'px';
//   if (elem.style.left == 700) {
//     clearInterval(id);
// }
// }
