console.log('CONDITIONALS -----');

// What number's bigger?
console.log("----- greaterNum -----");

/*

Write a function named greaterNum that:
- takes 2 arguments, both numbers.
- returns whichever number is the greater (higher) number.
- Call that function 2 times with different number pairs, and log the
  output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").
*/

const greaterNum = function(num1, num2) {
  const num3 = Math.max(num1, num2);
  console.log(`The greater number of ${ num1 } and ${ num2 } is ${ num3 }.`)
}

greaterNum(4, 5);
greaterNum(9, 1);
greaterNum(1, 1);


// The World Translator
console.log("----- helloWorld -----");

/*
Write a function named helloWorld that:
- takes 1 argument, a language code (e.g. "es", "de", "en")
- returns "Hello, World" for the given language, for atleast 3 languages.
  It should default to returning English.
- Call that function for each of the supported languages and log the result
  to make sure it works.
*/

const helloWorld = function(langCode = "en") {
  let text;
  switch (langCode) {      // input is language code
    case "en":                         // if english
        text = "Hello, World!";
        break;
    case "es":                         // if spanish
        text = "¡Hola Mundo!";
        break;
    case "gm":                         // if german
        text = "Hallo Welt!";
        break;
    default:                        // else...
        text = "Hello, World!";
    }
    return text;
}

console.log(helloWorld("en"));
console.log(helloWorld("es"));
console.log(helloWorld("gm"));
console.log(helloWorld());

// The Grade Assigner
console.log("----- The Grade Assigner -----");

/*
Write a function named assignGrade that:
- takes 1 argument, a number score.
- returns a grade for the score, either "A", "B", "C", "D", or "F" (for
  example, scores above 90 receive an "A", scores between 90 and 80 receive
  a "B", and so on).
- Call that function for a few different scores and log the result to make
  sure it works.
*/

const assignGrade = function(score) {
  let grade;
  if (score >= 90) {
    grade = "A";
  } else if (score >= 80) {
    grade = "B";
  } else if (score >= 70) {
    grade = "C";
  } else if (score >=60) {
    grade = "D";
  } else if (score >= 50) {
    grade = "E";
  } else {
    grade = "F"
  }
  return grade;
}

const scores = [100, 89, 70, 69, 52, 0];

for (var i = 0; i < scores.length; i++) {
  console.log(`A score of ${ scores[i] }, gives a grade of ${ assignGrade(scores[i]) }`)
}


// The Pluralizer
console.log("----- The Pluralizer -----");

/*
Write a function named pluralize that:
- takes 2 arguments, a noun and a number.
- returns the number and pluralized form, like "5 cats" or "1 dog".
- Call that function for a few different scores and log the result to
  make sure it works.
- Bonus: Make it handle a few collective nouns like "sheep" and "geese".
*/

const y_to_ies = ['butterfly']
const _to_es = ['fish', 'walrus']
const f_to_ves = ['wolf', 'dwarf']
const _to_ = ['sheep', 'bison', 'deer', 'moose', 'swine']
const goose = ['goose']
const mouse = ['mouse']

const pluralize = function(noun, number) {
  if (number > 1) {
    if (y_to_ies.includes(noun)) {
      noun = noun.slice(0, -1) + 'ies';
    } else if (_to_es.includes(noun)) {
      noun = noun + 'es';
    } else if (f_to_ves.includes(noun)) {
      noun = noun.slice(0, -1) + 'ves';
    } else if (goose.includes(noun)) {
      noun = 'geese';
    } else if (_to_.includes(noun)) {
      noun = noun;
    } else if (mouse.includes(noun)) {
      noun = 'mice';
    } else {
      noun = noun + 's';
    }
  }
  console.log(number + " " + noun);
}

pluralize('sheep', 1);
pluralize('sheep', 2);
pluralize('butterfly', 3);
pluralize('dwarf', 1);
pluralize('dwarf', 5);
pluralize('walrus', 6);
pluralize('goose', 7);
pluralize('mouse', 1);
pluralize('mouse', 9);
