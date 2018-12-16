/*

Part 1, Rectangle
Given the following a rectangle object like the one below,
write the following functions:

isSquare - Returns whether the rectangle is a square or not
area - Returns the area of the rectangle
perimeter - Returns the perimeter of the rectangle

*/

const rectangleA = {
  length: 6,
  width: 8
};

const isSquare = function(rectangle) {
  if (rectangle.length === rectangle.width) {
    return "Rectangle is a square";
  }
  return "Rectangle is not a square";
};

const squareArea = function(rectangle) {
  return (rectangle.length * rectangle.width);
};

const perimeter = function(rectangle) {
  return (2 * (rectangle.length + rectangle.width));
}

console.log(isSquare(rectangleA));
console.log(squareArea(rectangleA));
console.log(perimeter(rectangleA));

/*

Part 2, Triangle
Given the following a triangle object like the one below,
write the following functions:

isEquilateral - Returns whether the triangle is equilateral or not
isIsosceles - Returns whether the triangle is isosceles or not
area - Returns the area of the Triangle
isObtuse - Returns whether the triangle is obtuse or not

*/

const triangleA = {
  sideA: 5,
  sideB: 7,
  sideC: 6
};

const isEquilateral = function(triangle) {
  const a = triangle.sideA;
  const b = triangle.sideB;
  const c = triangle.sideC;

  if (a === b && b === c) {
    return "Triangle is equilateral";
  }
  return "Triangle is not equilateral";
};

// isosceles has two sides of equal length
const isIsosceles = function(triangle) {
  const a = triangle.sideA;
  const b = triangle.sideB;
  const c = triangle.sideC;

  if (a === b && a !== c) {
    return "Triangle is isosceles";
  } else if (a === c && a !== b) {
    return "Triangle is isosceles";
  } else if (b === c && b !== a) {
    return "Triangle is isosceles";
  } else {
    return "Triangle is not isosceles";
  }
};

console.log(isIsosceles(triangleA))

const triangleArea = function(triangle) {
  const a = triangle.sideA;
  const b = triangle.sideB;
  const c = triangle.sideC;

  const perimeter = (a + b + c)/2;
  const area = Math.sqrt(perimeter * (perimeter - a) * (perimeter - b) * (perimeter - c));
  return area;
};

console.log(triangleArea(triangleA));

const isObtuse = function(triangle) {
  const a = triangle.sideA;
  const b = triangle.sideB;
  const c = triangle.sideC;

  if ((a > b && a > c) && (a^2 > (b^2 + c^2))) {
    return "Triangle is obtuse";
  } else if ((b > a && b > c) && (b^2 > (a^2 + c^2))) {
    return "Triangle is obtuse";
  } else if ((c > a && c > b) && (c^2 > (a^2 + b^2))) {
    return "Triangle is obtuse";
  } else {
    return "Triangle is not obtuse";
  }
};

console.log(isObtuse(triangleA));
