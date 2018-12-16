// DrEvil
// Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:
//
//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)
const DrEvil = function (num){
    let mil = num;
    if(mil === 1000000){
      console.log(`${mil} dollars pinky.`)
    } else {
    console.log(`${mil} dollars.`);
    }
}
DrEvil(5);
DrEvil(1000000);
DrEvil(10);
DrEvil(100);

console.log("Hello");

// MixUp
// Create a function called mixUp. It should take in two strings, and return the
// concatenation of the two strings (separated by a space) slicing out and swapping
// the first 2 characters of each. You can assume that the strings are at least 2
// characters long. For example:
//
//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!*/

  const mixUp = function ( str1, str2 ){
  const result = str2.substr(0,1) + str1.substr(1) + " " + str1.substr(0,1)+ str2.substr(1);

  //return result;
  console.log(result);

};

mixUp ('mix', 'pod');
mixUp ('dog', 'sinner');
mixUp ('hello', 'youtube');


// FixStart
// Create a function called fixStart. It should take a single argument, a string,
// and return a version where all occurences of its first character have been
// replaced with '*', except for the first character itself. You can assume that
// the string is at least one character long. For example:
//
// fixStart('babble'): 'ba**le'

const fixStart = function (string1){
  const result = string1[0];
  for (var i = 1; i < string1.length; i++){
    string1.replace(string1[i], "*");
         //string1[i] == "*";
       }
       return result;
}

fixStart("babble");
fixStart("password");



// Verbing
// Create a function called verbing. It should take a single argument, a string.
// If its length is at least 3, it should add 'ing' to its end, unless it already
// ends in 'ing', in which case it should add 'ly' instead. If the string length is
// less than 3, it should leave it unchanged. For example:
//
//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'*/
//
// // const verbing = function (verbingString){
// //   if (verbingString.length >= 3){
// //     console.log(verbingString + "ing");
// //   } else if (verbingString.endsWith("ing")){
// //     console.log(verbingString + "ly");
// //   } else {
// //     console.log(verbingString);
// //   }
// // };
// //
// // verbing ("Play");
// // verbing ("Playing");
// // verbing ("go");
// //
//
// /*Not Bad
// Create a function called notBad that takes a single argument, a string.
//
// It should find the first appearance of the substring 'not' and 'bad'.
// If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad'
// substring with 'good' and return the result.
// If it doesn't find 'not' and 'bad' in the right sequence (or at all), just
// return the original sentence.
// For example:
//
//   notBad('This dinner is not that bad!'): 'This dinner is good!'
//   notBad('This movie is not so bad!'): 'This movie is good!'
//   notBad('This dinner is bad!'): 'This dinner is bad!'*/
//
  // const notBad = function (text){
  //   const a = "not bad";
  //   //const b = "bad";
  //   if (text.indexOf(a) ){
  //     console.log( text.replace("not bad","good"));
  //   } else {
  //     console.log(text);
  //   }
  // };

// notBad ("This dinner is not that bad!");
// notBad ("This dineer is bad");
//
// MixUp
// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:
//
//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!

// const MixUp = function (str1, str2){
//
//     const char1 = str1.charAt(0);
//     const char2 = str2.charAt(0);
//     console.log(str1.replace(str2, char1));
//     //str1.push(str2(inputValues[i]));
//
//     //console.log(char1);
//     //console.log(char2);
//     return char1;
//     // console.log(`The original string is ${str1} and ${str2}.`)
//     // console.log(`Swapping the charscater looks like this:" ${str2} and ${str1}"`);
// }
// MixUp("Hello", "World");
//

//FixStart
//const FixStart = function (str){
//       let myStr = str;
//       let newStr = myStr.replace(/"myStr"/g, "*");
//       console.log(`This is new: ${newStr}`);
//       return newStr;
// }
// FixStart("Farwa");

// Verbing
// const Verbing = function (str){
//      //let chkstr = text.match("ing");
//      let newstr = text.replace("ing")
// }
// Not Bad
// Create a function called notBad that takes a single argument, a string.
//
// It should find the first appearance of the substring 'not' and 'bad'.
// If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
// If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
// For example:
//
//   notBad('This dinner is not that bad!'): 'This dinner is good!'
//   notBad('This movie is not so bad!'): 'This movie is good!'
//   notBad('This dinner is bad!'): 'This dinner is bad!'
