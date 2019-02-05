// Collections!
// Log out the answers to all of the following questions!
//
// Here is some data that you can work with.

var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

var people = [
  { id: 1, username: "A", active: true,  age: 20 },
  { id: 2, username: "B", active: false, age: 35 },
  { id: 3, username: "C", active: false, age: 50 },
  { id: 4, username: "D", active: true,  age: 65 },
  { id: 5, username: "E", active: true,  age: 80 },
  { id: 6, username: "E", active: true,  age: 95 },
];

// Exercises
// Iterate through numbers and log each number to the console

_.each(numbers, function (x) {
  console.log(x);
});

// Iterate through numbers and multiply each one of them by 5

_.map(numbers, function(x) {
  console.log( x*5 );
});

// Iterate through numbers and reduce it by adding them together

const reduced = _.reduce(numbers, function(m, i) {
  console.log('Calculating: ' + m + ' + ' + i);
  return m+i;
});

console.log(reduced);


// Get an array of all of the people in people that have the username "E"
const userE = _(people).filter(function (p) {
  return p.username === "E";
});

console.log(userE);

const userE_ = _(people).where( {'username': 'E'} );

console.log(userE_);

// Find the first object in people that has the id of 3

const firstUser = _(people).find(function (p) {
  return p.id === 3;
});

console.log(firstUser);

// Find the first person who has an age of less than 50

const userFilterA = _(people).filter(function (p) {
  return p.age < 50;
});

console.log(userFilterA);

// Get an array of all of the people with an age of over 60

const userFilterB = _(people).filter(function (p) {
  return p.age > 60;
});

console.log(userFilterB);

// Remove all of the people with an age less than 40

const vips = _.reject(people, function(p) {
  return p.age < 40;
});

console.log(vips);
