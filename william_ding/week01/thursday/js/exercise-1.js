/*
Geometry Function Lab
Part 1, Rectangle
Given the following a rectangle object like the one below, write the following functions:

isSquare - Returns whether the rectangle is a square or not
area - Returns the area of the rectangle
perimeter - Returns the perimeter of the rectangle
const rectangleA = {
  length: 4,
  width: 4
};
*/
// Setup 3 rectangles.
const rectangleA = {
  length: 4,
  width: 4
};

const rectangleB = {
  length: 10,
  width: 6
};

const rectangleC = {
  length: 4.4,
  width: 1
};

// function isSquare.
const isSquare = function (obj) {
    return (obj.length === obj.width);
}

// function rectangleArea.
const rectangleArea = function (obj) {
  return (obj.length * obj.width);
}

// function perimeter.
const perimeter = function (obj) {
    return ((obj.length + obj.width) * 2);
}

// test
console.log(`Is rectangleA square? ${ isSquare(rectangleA) }.`);
console.log(`Is rectangleB square? ${ isSquare(rectangleB) }.`);
console.log(`Is rectangleC square? ${ isSquare(rectangleC) }.`);
console.log("\n");

console.log(`rectangleA's area is ${ rectangleArea(rectangleA) }.`);
console.log(`rectangleB's area is ${ rectangleArea(rectangleB) }.`);
console.log(`rectangleC's area is ${ rectangleArea(rectangleC) }.`);
console.log("\n");

console.log(`rectangleA's perimeter is ${ perimeter(rectangleA) }.`);
console.log(`rectangleB's perimeter is ${ perimeter(rectangleB) }.`);
console.log(`rectangleC's perimeter is ${ perimeter(rectangleC) }.`);

console.log("\n\n\n");
