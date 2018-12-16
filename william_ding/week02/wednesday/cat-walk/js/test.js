const leftToRight = function () {
    theCat.style.left = parseInt(theCat.style.left) + 1 + "px";
  }

    if ( parseInt(theCat.style.left) === window.innerWidth / 2 - 125) {
      // theCat.style.left = parseInt(theCat.style.left) + 1 + "px";
      window.clearInterval(timer);
      // changeCat();
      timer = window.setInterval(pause, 500);
    }
    if ( parseInt(theCat.style.left) >= window.innerWidth - 250 ) {
      window.clearInterval(timer);
      timer = window.setInterval(rightToLeft, 5);
    }

const rightToLeft = function () {
    theCat.style.transform = "scaleX(-1)";
    theCat.style.left = parseInt(theCat.style.left) - 1 + "px";
    if ( parseInt(theCat.style.left) === window.innerWidth / 2 -125 ) {
      // theCat.style.left = parseInt(theCat.style.left) - 1 + "px";
      window.clearInterval(timer);
      // changeCat();
      timer = window.setInterval(pause2, 500);
    }
    if ( parseInt(theCat.style.left) <= 0 ) {
      theCat.style.transform = "scaleX(1)";
      window.clearInterval(timer);
      timer = window.setInterval(leftToRight, 5);
    }
  }

   let timer = window.setInterval(leftToRight, 5);
