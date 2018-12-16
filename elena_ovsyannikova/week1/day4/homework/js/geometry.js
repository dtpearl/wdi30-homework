/*Given the following a rectangle object like the one below, write the following functions:

isSquare - Returns whether the rectangle is a square or not
area - Returns the area of the rectangle
perimeter - Returns the perimeter of the rectangle*/

const rectangleA = {
  length: 5,
  width: 20
};
const isSquare = function (rectangle) {
  if (rectangle.length===rectangle.width) {
    console.log(`Rectangle is a square`);
  } else
  console.log(`Rectangle is a not square`);
}
const area = function (rectangle) {
  const length = rectangleA.length;
  const width = rectangleA.width;
  console.log(`The area of the rectangle is: ${length*width}`);
}
const perimeter = function (rectangle) {
  const length = rectangleA.length;
  const width = rectangleA.width;
  console.log(`The perimeter of the rectangle is: ${(length+width)*2}`);
}
isSquare(rectangleA);
area(rectangleA);
perimeter(rectangleA);
/*Given the following a triangle object like the one below, write the following functions:

isEquilateral - Returns whether the triangle is equilateral or not
isIsosceles - Returns whether the triangle is isosceles or not
area - Returns the area of the Triangle
isObtuse - Returns whether the triangle is obtuse or not*/
const triangleA = {
sideA: 3,
sideB: 4,
sideC: 6
};
const equilateral = function (triangle) {
  const a = triangleA.sideA;
  const b = triangleA.sideB;
  const c = triangleA.sideC;
  if (a===b&&a===c&&b===c) {
  console.log(`The triangle is equilateral`);
} else {
  console.log(`The triangle is not equilateral`);
}
};
const isosceles = function (triangle) {
  const a = triangleA.sideA;
  const b = triangleA.sideB;
  const c = triangleA.sideC;
  if (a===b||a===c||b===c) {
  console.log(`The triangle is isosceles`);
} else {
  console.log(`The triangle is not isosceles`);
}
};
const areaTriangle = function (triangle) {
  const a = triangleA.sideA;
  const b = triangleA.sideB;
  const c = triangleA.sideC;
  const perimeter = (a+b+c)/2;
// console.log(perimeter);
  console.log(`The area of the triangle is: ${Math.sqrt(perimeter*(perimeter-a)*(perimeter-b)*(perimeter-c))}`);
}
const isObtuse = function (triangle) {
  const a = triangleA.sideA;
  const b = triangleA.sideB;
  const c = triangleA.sideC;
  if (a*a+b*b<c*c||a*a+c*c<b*b||c*c+b*b<a*a) {
  console.log(`The triangle is obtuse`);
} else {
  console.log(`The triangle is not obtuse`);
}
};
equilateral(triangleA);
isosceles(triangleA);
areaTriangle(triangleA);
isObtuse(triangleA);
