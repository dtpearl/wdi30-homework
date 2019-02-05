/*
Collections!
Log out the answers to all of the following questions!

Here is some data that you can work with.

var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

var people = [
  { id: 1, username: "A", active: true,  age: 20 },
  { id: 2, username: "B", active: false, age: 35 },
  { id: 3, username: "C", active: false, age: 50 },
  { id: 4, username: "D", active: true,  age: 65 },
  { id: 5, username: "E", active: true,  age: 80 },
  { id: 6, username: "E", active: true,  age: 95 },
];
Exercises
Iterate through numbers and log each number to the console
Iterate through numbers and multiply each one of them by 5
Iterate through numbers and reduce it by adding them together
Get an array of all of the people in people that have the username "E"
Find the first object in people that has the id of 3
Find the first person who has an age of less than 50
Get an array of all of the people with an age of over 60
Remove all of the people with an age less than 40
*/


var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

var people = [
  { id: 1, username: "A", active: true,  age: 20 },
  { id: 2, username: "B", active: false, age: 35 },
  { id: 3, username: "C", active: false, age: 50 },
  { id: 4, username: "D", active: true,  age: 65 },
  { id: 5, username: "E", active: true,  age: 80 },
  { id: 6, username: "E", active: true,  age: 95 },
];

//Iterate through numbers and log each number to the console
_.each(numbers, function(num) {
  console.log(num);
});

//Iterate through numbers and multiply each one of them by 5
let largeNumbers = _.map(numbers, function(num) {
  return num * 5;
});

console.log(largeNumbers);

//Iterate through numbers and reduce it by adding them together
let sum = _.reduce(numbers, function(memo, num) {
  return memo + num;
}, 0);
console.log(sum);

//Get an array of all of the people in people that have the username "E"
let peopleWithE = _.where(people, {'username': 'E'});
console.log(peopleWithE);

//Find the first object in people that has the id of 3
let id3 = _.find(people, function (p) {
  return p.id === 3;
});

console.log(id3);

//Find the first person who has an age of less than 50
let age50 = _.find(people, function (p) {
  return p.age < 50;
});

console.log(age50);

//Get an array of all of the people with an age of over 60
let age60 = _.filter(people, function(p) {
  return p.age > 60;
});

console.log(age60);

//Remove all of the people with an age less than 40

let age40 = _.reject(people, function(p) {
  return p.age < 40;
});

console.log(age40);
