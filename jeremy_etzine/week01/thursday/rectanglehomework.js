// Geometry Function Lab


// Part 1, Rectangle
// Given the following a rectangle object like the one below, write the following functions:


const rectangleA = {
  length: 4,
  width: 4
};

const rectangleB = {
  length: 3,
  width: 7
};


// isSquare - Returns whether the rectangle is a square or not

const isSquare = function (rectangle) {
  if (rectangle.length === rectangle.width) {
    return `This is a square.`
  } else {
    return `This is not a sqaure.`
  };
};

console.log(isSquare(rectangleA));
console.log(isSquare(rectangleB));


// area - Returns the area of the rectangle

const area = function (rectangle) {
  let totalArea = rectangle.length * rectangle.width;
  return totalArea;
};

console.log(area(rectangleA));
console.log(area(rectangleB));


// perimeter - Returns the perimeter of the rectangle

const perimeter = function (rectangle) {
  let totalPerimeter = (rectangle.length * 2) +  (rectangle.width * 2);
  return totalPerimeter;
};

console.log(perimeter(rectangleA));
console.log(perimeter(rectangleB));
