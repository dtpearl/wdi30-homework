const verbing = function(str){
  const len = str.length;
  const last = str.substring(len-3);
var tempres;
  if (len<3) {
    tempres=str;
  } else {
    if (last==="ing") {
      tempres=str+"ly";
    }
    else {
      tempres=str+"ing";
    }
  }
  return tempres;
}
console.log(verbing("swim"));
console.log(verbing('swimming'));
console.log(verbing('go'));
