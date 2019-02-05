
const setposition = function(){
  const width = Math.random();
  const height = Math.random();

  //$('#divcontent').css('left','+=width'+'px');
  $('#divcontent').css('left','+=30'+'px');

};

setinterval(setposition,100);
