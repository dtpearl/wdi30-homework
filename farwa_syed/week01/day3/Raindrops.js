const RainDrops = function (num){
    if(num % 3 === 0){
      console.log('Pling');
    }
    if (num % 5 === 0){
      console.log('Plang');
    }
    if (num % 7 === 0){
      console.log('Plong');
    }
    console.log(num);

}
RainDrops(28);
RainDrops(1755);


// // version 1
// const raindrops = function(number){
//   let string = "";
//   if (number % 3 === 0 ) {
//     // string  = string + "Pling"
//     string += "Pling";
//   }
//   if (number % 5 === 0) {
//     string += "Plang";
//   }
//   if (number % 7 === 0) {
//     string += "Plong";
//   }
//   if (string.length === 0 ) {
//     string += number;
//   }
//   return string;
// };
//
// console.log(raindrops(28));
// console.log(raindrops(1755));
// console.log(raindrops(34));
// console.log(raindrops(105));
//
//
//
// // version 2
// // const isAFactor = function(number, factor) {
// //   return number % factor === 0;
// // }
// //
// // const raindrops = function(number) {
// //   let string = '';
// //
// //   if (isAFactor(number, 3)) {
// //     string += 'Pling'
// //   }
// //   if (isAFactor(number, 5)) {
// //     string += 'Plong';
// //   }
// //   if (isAFactor(number, 7)) {
// //     string += 'Plang'
// //   }
// //   if (string.length === 0) {
// //
// //     string += number;
// //   }
// //   return string;
