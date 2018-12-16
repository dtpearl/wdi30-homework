const mixUp = function (str1, str2){
  const res1=str2.charAt(0)+str2.charAt(1)+str1.substring(2);
  const res2=str1.charAt(0)+str1.charAt(1)+str2.substring(2);
return(res1+" "+res2);
}
console.log(mixUp('mix', 'pod'));
console.log(mixUp('dog', 'dinner'));
