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
  width: 4,
};

// console.log(rectangleA.length);
// console.log(rectangleA.width);

const isSquare = function (shape) {
  if (shape.length === shape.width) {
    return 'This is a square.';
  } else {
    return 'This is a rectangle.';
  }
};

// console.log(isSquare(rectangleA));



const area = function (shape) {
  const objectArea = shape.length * shape.width;
  return `The area is ${ objectArea } meters squared.`;
};

// console.log(area(rectangleA));

const perimeter = function (shape) {
  objectPerimeter = (shape.length * 2) + (shape.width * 2);
  return `The perimter is ${ objectPerimeter } nanometers.`
};

// console.log(perimeter(rectangleA));


/*

Part 2, Triangle
Given the following a triangle object like the one below, write the following functions:

isEquilateral - Returns whether the triangle is equilateral or not
isIsosceles - Returns whether the triangle is isosceles or not
area - Returns the area of the Triangle
isObtuse - Returns whether the triangle is obtuse or not
const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

*/

const triangleA = {
  sideA: 5,
  sideB: 6,
  sideC: 4,
};

const isEquilateral = function (shape) {
  if (shape.sideA === shape.sideB && shape.sideA === shape.sideC) {
    return 'The triangle is equilateral.';
  } else {
    return 'What the fuck is this?';
  }
};

// console.log(isEquilateral(triangleA));


const isIsosceles = function (shape) {
  if (shape.sideA !== shape.sideB && shape.sideB !== shape.sideC && shape.sideA !== shape.sideC) {
    return 'The triangle is isosceles.';
  } else {
    return 'What the fuck is this?';
  }
};

//console.log(isIsosceles(triangleA));


const isObtuse = function (shape) {
  if (shape.sideA < shape.sideC && shape.sideB < shape.sideC) {
    return 'The triangle is obtuse.';
  }
  if (shape.sideB < shape.sideA && shape.sideC < shape.sideA) {
    return 'The triangle is obtuse.';
  }
  if (shape.sideC < shape.sideB && shape.sideA < shape.sideB) {
    return 'The triangle is obtuse.';
  } else {
    return 'What the fuck is this?';
  }
};

console.log(isObtuse(triangleA));
