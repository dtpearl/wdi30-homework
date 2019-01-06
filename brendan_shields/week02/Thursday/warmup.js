const sampArr = ["banana", "ananab", "c", "d"];
// let inputArr = [];
// let test = 0;
// let outputArr = [];
//
// const splitInput = function(input) {
//   //splitInput into an array
//   for (var i = 0; i < input.length; i++) {
//     inputArr.push(`${input[i]}`)
//   }
//   annagramDet(inputArr)
// }
//
// const annagramDet = function(inputArr) {
//     console.log('test1')
//     //rotate through sample array
//     for (var i = 0; i < sampArr.length; i++) {
//       for (var j = 0; j < inputArr.length; j++){
//         if (inputArr.length !== sampArr[i].length) {
//         console.log('test')
//         console.log(`${inputArr[j]} ${sampArr[i]}`)
//         break;
//       } else if (inputArr[j] !== sampArr[i][j]) {
//         break;
//       } else {
//         outputArr.push(sampArr[i])
//       }
//     }
// }
//
// }
//
//     splitInput('banana')
//     console.log(test)
//
//     console.log(outputArr)

const customSort = function(word, candidateWords) {
  return word.split('').sort("").join("")

}


const checkForAnagram = function(word, candidateWords){
  let sortedWord = customSort(word);

  for(let i = 0; i < candidateWords.length; i++){
    let candidate = customSort(candidateWords[i])
    if (sortedWord == candidate) {
      anagrams.push(candidateWords[i])
    }
  }
  return `The anagram of ${word} is ${anagrams}`
}
