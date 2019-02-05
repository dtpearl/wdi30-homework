/*

Anagram Detector
Write a program that, given a word and a list of possible anagrams, selects the
anagrams of the given word.

In other words, given: "listen" and ["enlists" "google" "inlets" "banana"] the
program should return "inlets".

Suggestions
Start out by getting this working with discrete functions.
If you feel comfortable with that, try to put all your functions, collections,
etc, into an object.

*/

// Linaa's Solution

// const customSort = function(word) {
//   return word.split("").sort.join("");
// }




const checkForAnagram = function(word, candidateWords) {
  word = word.split("");
  word = word.sort();
  word = word.join("");

  let sortedWord = customSort(word);

  for ( let i = 0; i < candidateWords.length; i++) {
    let candidate = customSort(candidateWords[i]);
    if (sortedWord === candidate) {
      anagrams.push(candidateWords[i]);
    }
  }
  return `The anagrams of ${word} is ${anagrams}.`
}
















// const words = [ 'enlists', 'google', 'inlets', 'banana', 'who', 'how', 'sword', 'words', 'saw', 'was' ];
//
//
//
// const alphabetize = function ( word ) {
// if ( !word ) {
// return;
// }
// word = word.split('');
// word = word.sort();
// word = word.join('');
// return word;
// }
//
// const getGroupedAnagrams = function ( words ) {
// const anagrams = {};
// words.forEach((word)=>{
// const sortedWord = alphabetize( word );
// if ( anagrams[ sortedWord ]) {
// return anagrams[ sortedWord ].push( word );
// }
// anagrams[ sortedWord ] = [ word ];
// });
// return anagrams;
// }
// // store the result (anagrams object) in a variable called getGroupedAnagrams
// const groupedAnagrams = getGroupedAnagrams( words );
// // iterate over groupedAnagrams, printing out each key:value pair on an individual line
// for( const sortedWord in groupedAnagrams ){
// console.log( groupedAnagrams[ sortedWord ].toString());
// }
