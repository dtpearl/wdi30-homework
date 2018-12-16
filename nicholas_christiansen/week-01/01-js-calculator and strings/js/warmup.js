console.log('WARMUP -----');

// What number's bigger?
console.log("----- raindrops -----");

/*
Write a Javascript program that will take a number (eg 28 or 1755 or 9, etc)
and output the following:
- If the number contains 3 as a factor, output 'Pling'.
- If the number contains 5 as a factor, output 'Plang'.
- If the number contains 7 as a factor, output 'Plong'.
- If the number does not contain 3, 5, or 7 as a factor, output the number as
  a string.
*/

const raindrops = function(num) {
  let text = '';
  if (num % 3 === 0) { text += 'Pling'; }
  if (num % 5 === 0) { text += 'Plang'; }
  if (num % 7 === 0) { text += 'Plong'; }
  if (text.length === 0) { text = num.toString(); }

  return text
}

console.log("---------- examples -----");

console.log(raindrops(28));
console.log(raindrops(1755));
console.log(raindrops(34));

console.log("---------- 0:99 -----");

for (var i = 0; i < 100; i++) {
  console.log(raindrops(i));
}
