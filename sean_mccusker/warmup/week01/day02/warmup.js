/*

Warmup - Raindrops
Write a Javascript program that will take a number (eg 28 or 1755 or 9, etc) and
output the following:

If the number contains 3 as a factor, output 'Pling'.
If the number contains 5 as a factor, output 'Plang'.
If the number contains 7 as a factor, output 'Plong'.
If the number does not contain 3, 5, or 7 as a factor, output the number as a
string.

Examples

28 has 7 as a factor.
In raindrop-speak, this would be a simple "Plong".
1755 has 3 and 5 as factors.
In raindrop-speak, this would be a "PlingPlang".
34 has neither 3, 5 nor 7 as a factor.
Raindrop-speak doesn't know what to make of that, so it just goes with the
straightforward "34".

*/

const rainDrops = function (x) {
let  text = '';
if (x % 3 === 0) {
   text += 'pling';
 } if (x % 5 === 0) {
   text += 'plang';
 } if (x % 7 === 0) {
   text += 'plong';
 } if (x % 3 != 0 && x % 5 != 0 && x % 7 != 0) {
   text = x.toString();
 };

return text
};
console.log(rainDrops(28));
console.log(rainDrops(1755));
console.log(rainDrops(9));
console.log(rainDrops(35));
console.log(rainDrops(105));
console.log(rainDrops(0));
console.log(rainDrops(2));
