const anagram = function (str, arr) {
  // -------------------Check for word that is different in length------------
  for (let k = 0; k < arr.length; k++) {
    if (str.length !== arr[k].length) {
      arr.splice(k, 1);
    }
  }
  // -------------------Check for word that contains different letters------------
  for (let i = 0; i < arr.length; i++) {
    const word = arr[i];
    for (let j = 0; j < word.length; j++) {
      if (str.indexOf(word[j]) === -1) {
        delete arr[i];
        // arr.splice(i, 1);
        // break;
      }
    }
  }
  // -------------------OUTPUTS------------------------------------
  for (let n = 0; n < arr.length; n++) {
    if (arr[n] !== undefined) {
      console.log(arr[n]);
    }
  }
  // console.log(arr);
}



// ---------------------------DIFFERENT SOLUTION---------------------------------


// const anagramCheck = {
//   let anagrams : [],
//
//   customSort : function (word) {
//     return word.split("").sort().join("");
//   },
//
//   checkForAnagram : function (word, candidateWords) {
//       let sortedWord = this.customSort(word);
//       for (let i = 0; i < candidateWords.length; i++) {
//         let candidate = this.customSort(candidateWords[i]);
//         if (sortedWord === candidate) {
//           this.anagrams.push(candidateWords[i]);
//         }
//       }
//       return `The anagram of ${word} is ${this.anagrams}`;
//   },
// }
