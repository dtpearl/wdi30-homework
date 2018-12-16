// Geometry Function Lab
//
// Part 1, Rectangle
//
// Given the following a rectangle object like the one below, write the following functions:
// const rectangleA = {
//   length: 4,
//   width: 4
// };

const rectangleA = {
  length: 4,
  width: 4,
};

const rectangleB = {
  length: 7,
  width: 6,
};

// isSquare - Returns whether the rectangle is a square or not

const isSquare = function (shape) {

  if (shape.length === shape.width){
    return 'This is a square';
  } else {
    return 'This is not a square';
  }
};

console.log(isSquare(rectangleA));
console.log(isSquare(rectangleB));

// area - Returns the area of the rectangle

const area = function (shape) {
  return shape.length * shape.width;
};

console.log(area(rectangleA));
console.log(area(rectangleB));

// perimeter - Returns the perimeter of the rectangle

const perimeter = function (shape) {
  return 2 *(shape.length + shape.width);
};

console.log(perimeter(rectangleA));
console.log(perimeter(rectangleB));
