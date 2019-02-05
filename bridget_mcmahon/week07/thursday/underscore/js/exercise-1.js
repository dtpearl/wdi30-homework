

var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

var people = [
  { id: 1, username: "A", active: true,  age: 20 },
  { id: 2, username: "B", active: false, age: 35 },
  { id: 3, username: "C", active: false, age: 50 },
  { id: 4, username: "D", active: true,  age: 65 },
  { id: 5, username: "E", active: true,  age: 80 },
  { id: 6, username: "E", active: true,  age: 95 },
];

// Iterate through numbers and log each number to the console

console.log("------------------");
console.log("1. PRINT NUMBERS:");
_(numbers).each(function(n) {
  console.log(n);
});
console.log("------------------");

// Iterate through numbers and multiply each one of them by 5
console.log("2. MULTIPLY BY 5:");
const multiply = _(numbers).map(function(n) {
  return n * 5;
})
console.log(multiply);
console.log("------------------");

// Iterate through numbers and reduce it by adding them together
console.log("3. REDUCE (ADD NUMBERS TOGETHER):");
const sum = _(numbers).reduce(function(memo, num) {
  return memo + num;
})
console.log(sum);
console.log("------------------");

// Get an array of all of the people in people that have the username "E"
console.log("4. PEOPLE WITH USERNAME 'E':");
const usernameE = _(people).where( {"username": "E"} );
console.log(usernameE);
console.log("------------------");

// Find the first object in people that has the id of 3
console.log("5. PEOPLE WITH ID OF 3:");
const id3 = _(people).find( {"id": 3} );
console.log(id3);
console.log("------------------");

// Find the first person who has an age of less than 50
console.log("6. FIRST PERSON YOUNGER THAN 50:");
const under50 = _(people).find(function(person) {
  return person.age < 50;
});
console.log(under50);
console.log("------------------");

// Get an array of all of the people with an age of over 60
console.log("7. PEOPLE OLDER THAN 60:");
const over60 = _(people).filter(function(person) {
  return person.age > 60;
});
console.log(over60);
console.log("------------------");

// Remove all of the people with an age less than 40
console.log("8. PEOPLE YOUNGER THAN 40:");
const under40 = _(people).filter(function(person) {
  return person.age < 40;
});
console.log(under40);
console.log("------------------");
