/*
Given the following a triangle object like the one below, write the following functions:

isEquilateral - Returns whether the triangle is equilateral or not
isIsosceles - Returns whether the triangle is isosceles or not
area - Returns the area of the Triangle
isObtuse - Returns whether the triangle is obtuse or not
*/

const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

const isEquilateral = function (triangleA) {
  if (triangleA.sideA === triangleA.sideB && triangleA.sideB === triangleA.sideC) {
    return true;
  }
  else {
    return false;
  }
}

const isIsosceles = function (triangleA) {
  if (triangleA.sideA === triangleA.sideB || triangleA.sideB === triangleA.sideC || triangleA.sideA === triangleA.sideC) {
    return true;
  }
  else {
    return false;
  }
}

const area = function (triangleA) {
  p = (triangleA.sideA + triangleA.sideB + triangleA.sideC) / 2;
  return Math.sqrt(p * (p - triangleA.sideA) * (p - triangleA.sideB) * (p - triangleA.sideC));
}

const isObtuse = function (triangleA) {
  const a = triangleA.sideA;
  const b = triangleA.sideB;
  const c = triangleA.sideC;

  if (a * a > b * b + c * c || b * b > a * a + c * c || c * c > a * a + b * b) {
    return true;
  }
  else {
    return false;
  }
}

console.log(isEquilateral(triangleA));
console.log(isIsosceles(triangleA));
console.log(area(triangleA));
console.log(isObtuse(triangleA));
