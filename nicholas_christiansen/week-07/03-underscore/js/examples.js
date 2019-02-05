const bros = "Groucho Harpo Chico Zeppo".split(' ');

const marx = {
  name: "Groucho",
  vice: "cigar",
  instrument: "guitar"
}

// .each - works for arrays and objects

_(bros).each(function (b) {
  console.log(b.toUpperCase());
});

_.each(marx, function (k) {
  console.log(k);
});


// .map

const upperBros = _(bros).map(function (b) {
  return b.toUpperCase();
});

console.log(bros, upperBros);

// .find - works for arrays and objects

const numbers = [1,2,3,4,5,6];

const firstEven = _(numbers).find(function (n) {
  return n % 2 === 0;
});

console.log(firstEven);


// .filter

const evens = _(numbers).filter(function (n) {
  return n % 2 === 0;
});

console.log('evens:', evens);


// .where

const library = [
  {author: 'James Joyce', title: 'Dubliners'},
  {author: 'James Joyce', title: 'Ulysses'},
  {author: 'Dan Brown', title: 'The Da Vinci Code'},
  {author: 'James Joyce', title: 'Finnegans Wake'}
]

const joyceBooks = _(library).where( {'author': 'James Joyce'} );

console.log(joyceBooks);


// .pluck

const bookTitles = _(library).pluck('title');

// .min/.max

const scores = [24,45,54,12,1,99,3];

const minNumber = _(scores).min();
const maxNumber = _(scores).max();

console.log("min:", minNumber, "max:", maxNumber );

// .shuffle

const shuffle = _(scores).shuffle();

console.log(scores, shuffle);
