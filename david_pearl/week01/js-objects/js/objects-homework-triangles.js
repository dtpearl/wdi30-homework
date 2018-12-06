console.log('Alright, alright, alright!');

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
  sideA: 3,
  sideB: 5,
  sideC: 4
};

// Check if a triangle is an equilateral.
const isEquilateral = function (triangleObject) {
  if ((triangleObject.sideA === triangleObject.sideB) && (triangleObject.sideB === triangleObject.sideC)) {
    return true;
  } else {
    return false;
  }
};

console.log(`Triangle equilateral? -> ${isEquilateral(triangleA)}`);

// Check if a triangle is an isosceles.
const isIsosceles = function (triangleObject) {
  if (isEquilateral(triangleObject)) {
    return false;
  } else if ((triangleObject.sideA === triangleObject.sideB) || (triangleObject.sideA === triangleObject.sideC)) {
    return true;
  } else if (triangleObject.sideB === triangleObject.sideC) {
    return true;
  } else {
    return false;
  }

};

console.log(`Triangle isosceles? -> ${isIsosceles(triangleA)}`);

// Check if triangle is scalene.

const isScalene = function (triangleObject) {
  if (isEquilateral(triangleObject) || isIsosceles(triangleObject)) {
    return false;
  } else {
    return true;
  }
};

console.log(`Triangle scalene? -> ${isScalene(triangleA)}`);

// Find area of a triangle.
// Assumptions: SideA is the base
//              SideB is the height.

const areaTriangle = function (triangleObject) {
  const area = (triangleObject.sideA * triangleObject.sideB) / 2;
  return area;
};

console.log(`Triangle area -> ${areaTriangle(triangleA)}`);
