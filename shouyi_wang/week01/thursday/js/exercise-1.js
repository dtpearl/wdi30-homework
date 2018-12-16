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

const rectangleA = {
  length: 4,
  width: 4
};

const isSquare = function (rectangleA) {
  if(rectangleA.length === rectangleA.width) {
    return true;
  }
  else {
    return false;
  }
}

const area = function (rectangleA) {
  return rectangleA.width * rectangleA.length;
}

const perimeter = function (rectangleA) {
  return 2 * (rectangleA.width + rectangleA.length);
}

console.log(isSquare(rectangleA));
console.log(area(rectangleA));
console.log(perimeter(rectangleA));
