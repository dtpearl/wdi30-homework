console.log('Alright, alright, alright!');

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
  width: 6
};


// Check if a rectangle is a square.
const isSquare = function (shapeObject) {
  if (shapeObject.length === shapeObject.width) {
    return true;
  } else {
    return false;
  }
};

console.log(`Square? -> ${isSquare(rectangleA)}`);


// Calculate perimeter of a rectangle
const perimeter = function (shapeObject) {
  const perim = (shapeObject.length + shapeObject.width) * 2;
  return perim;
};

console.log(`Perimeter = ${perimeter(rectangleA)}`);
