/*
Write a function findLongestWord that takes an array of
words and returns the length of the longest one.
*/


// function longestWord(string) {
//     var str = string.split(" ");
//     var longest = 0;
//     var word = null;
//     for (var i = 0; i < str.length; i++) {
//         if (longest < str[i].length) {
//             longest = str[i].length;
//             word = str[i];
//         }
//     }
//     return word;
// }
//
// console.log(longestWord("I am good"));




const findLongestWord = function (string) {
  let splitString = string.split(" ");
  let longest = 0;
  let word = null;
  for (let i = 0; i < splitString.length; i++) {
    if (longest < splitString[i].length) {
      longest = splitString[i].length;
      word = splitString[i];
    };
  };
  return longest;
};


console.log(findLongestWord("I like saxomophones"));

// NOTE! WITHOUTH THE "WORD" VARIABLE, LONGEST WILL ONLY RETURN THE NUMERICAL LENGTH OF THE STRING.
