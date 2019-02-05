var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

var people = [
  { id: 1, username: "A", active: true,  age: 20, uid: 1412 },
  { id: 2, username: "B", active: false, age: 35, uid: 1352 },
  { id: 3, username: "C", active: false, age: 50, uid: 5418 },
  { id: 4, username: "D", active: true,  age: 65, uid: 216  },
  { id: 5, username: "E", active: true,  age: 80, uid: 18   },
  { id: 6, username: "E", active: true,  age: 95, uid: 1000 },
];

var words = [
  "attoparsec", "batch", "Cinderalla Book", "Dr. Fred Mbogo", "eat flaming death", "fandango on core", "Foonly", "goat file", "Halloween Documents", "I see no X here", "Imminent Death Of The Net Predicted!", "jibble", "kilogoogle", "larval stage", "maximum Maytag mode", "nybble", "octal forty", "pico-", "quantum bogodynamics", "rubber-hose cryptanalysis", "sigmonster", "tail recursion", "unswizzle", "VAXen", "webmaster", "XEROX PARC", "yak shaving", "Zero-One-Infinity Rule"
]; // Random words from here... http://www.catb.org/jargon/html/go01.html

// Sort the people by 'uid'
console.log("------------------");
console.log("1. PEOPLE BY UID:");
const peopleByUID = _(people).sortBy('uid')
console.log(peopleByUID);
console.log("------------------");

// Group the random words by the lower case version of their first letter
console.log("2. WORDS BY FIRST LETTER:");
const lowercaseWords = _(words).map(function(word) {
  return word.toLowerCase();
});
const wordsByFirstLetter = _(lowercaseWords).groupBy(function(word) {
  return word[0];
});
console.log(wordsByFirstLetter);
console.log("------------------");

// Check to see if all the words have more than 3 characters
console.log("3. MORE THAN 3 CHARACTERS:");
const overThreeCharacters = _(words).every(function(word) {
  return word.length > 3;
});
console.log(overThreeCharacters);
console.log("------------------");

// Check if some words are over twenty characters long
console.log("4. OVER 20 CHARACTERS LONG:");
const someWords = _(words).sample(5);
const areOver20characters = _(someWords).some(function(word) {
  return word.length > 20;
});
console.log(areOver20characters);
console.log("------------------");

// Get an array of all of the uids in people
console.log("5. ARRAY OF UIDS:");
const uids = _(people).pluck('uid');
console.log(uids);
console.log("------------------");

// Find the person with the highest uid
console.log("6. HIGHEST UID:");
const highestUID = _(uids).max();
console.log(highestUID);
console.log("------------------");

// Return an object that says how many even numbers and how many odd numbers there are in numbers
console.log("7. EVENS & ODDS:");
const evensAndOdds = _(numbers).countBy(function(num) {
  return num % 2 === 0 ? 'evens' : 'odds';
});
console.log(evensAndOdds);
console.log("------------------");

// Get three random numbers out of numbers
console.log("8. 3 RANDOM NUMBERS:");
const randomNumbers = _(numbers).sample(3);
console.log(randomNumbers);
console.log("------------------");
