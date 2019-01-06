/*

Warmup - Serge Says
Examples
Serge answers 'Sure.' if you ask him a question.

He answers 'Woah, chill out!' if you yell at him (ALL CAPS).

He says 'Fine. Be that way!' if you address him without actually saying anything.

He answers 'Whatever.' to anything else.

Create a function that takes an input and returns Serge's response.

*/

console.log(`Is there anybody out there?`);

// Linnna's solution

const sergeSays = function(input) {
  if (input === "" || input === null || input === undefined) {
    return "Fine. Be that way!"
  }

  if (input.endsWith("?")) {
    return "Sure."
  } else if (input === input.toUpperCase()) {
    return "Whoah, chill out!"
  }

  return "Whatever."
  }






// const sergeSays = function(input) {
//     if (input === input.toUpperCase()) {
//
//         if (input.length === 0) {
//             return "Fine, be that way";
//         } else {
//
//             return "Woah, chill out!";
//         }
//
//     } else if (input.endsWith("?")) {
//         return "Sure";
//     } else {
//
//         return "Whatever";
//     }
// };


console.log(sergeSays('Are you ok?'));
console.log(sergeSays('HI'));
console.log(sergeSays(''));
console.log(sergeSays('Nice day out.'));
