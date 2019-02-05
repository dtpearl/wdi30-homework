// const arrReverse = ["one", "two", "three", "four"];
//
// const reverse = function(array) {
//   let reversed = [];
//
//   for (let i = 0; i < array.length; i++) {
//     reversed.unshift(array[i]);
//   }
//
//   // for (let i = array.length - 1; i >= 0; i--) {
//   //   reversed.push(array[i]);
//   // }
//
//   console.log(reversed);
// }
//
// reverse(arrReverse);

// const arrFlatten = ["one", "two", ["a", "b", "c"]];

// const flatten = array => {
//   let flatten = [];
//
//   for (let i = 0; i < array.length; i++) {
//     let currentElem = array[i];
//     // console.log(currentElem);
//     // ( currentElem.constructor === Array )
//     // if ( currentElem instanceof Array )
//     if( currentElem instanceof Array ) {
//       for (let j = 0; j < currentElem.length; j++) {
//         console.log(currentElem[j]);
//         flatten.push(currentElem[j])
//       }
//     } else {
//       flatten.push(currentElem);
//     }
//   }
//   console.log(flatten);
//   // return flatten
// }

const arrFlatten = ["one", "two", ["a", "b", "c"]];

flatten = array => {
  array = array +""
  array = array.split(",")
  console.log(array);
}


flatten(arrFlatten);
