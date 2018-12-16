/*
Warmup - Raindrops
Write a Javascript program that will take a number (eg 28 or 1755 or 9, etc) and output the following:

If the number contains 3 as a factor, output 'Pling'.
If the number contains 5 as a factor, output 'Plang'.
If the number contains 7 as a factor, output 'Plong'.
If the number does not contain 3, 5, or 7 as a factor, output the number as a string.
*/

const rainDrops = function(number){
  let result = number;
  if(number % 3 === 0)
  {
    result = 'Pling';
  }
  if(number % 5 === 0)
  {
    result = 'Plang';
  }
  if(number % 7 === 0)
  {
    result = 'Plong';
  }
  return result;
};

const callFunctions =  function(){
  const result = rainDrops(15);
  console.log(result);
};

callFunctions();
