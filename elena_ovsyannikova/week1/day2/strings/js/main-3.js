const fixStart = function(str){
  const first=str[0];
  tempRes=str.substring(1).replace(first, "*");
  while (tempRes.indexOf(first)>0){
    tempRes=tempRes.replace(first, "*");
  }
  return first+tempRes;

}
console.log(fixStart('babble'));
