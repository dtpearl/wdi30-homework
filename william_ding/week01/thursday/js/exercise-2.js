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

// Setup 3 triangles.
const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 5
};

const triangleB = {
  sideA: 5,
  sideB: 5,
  sideC: 5
};

const triangleC = {
  sideA: 7,
  sideB: 4,
  sideC: 4
};

// function isEquilateral.
const isEquilateral = function (obj) {
  return (obj.sideA === obj.sideB && obj.sideA === obj.sideC);
}

// function isLsosceles.
const isLsosceles = function (obj) {
  return (obj.sideA === obj.sideB || obj.sideA === obj.sideC || obj.sideB === obj.sideC);
}

// function triangleArea.
const triangleArea = function (obj) {
  const a = obj.sideA;
  const b = obj.sideB;
  const c = obj.sideC;
  const p = (a + b + c) / 2;
  const area = Math.sqrt(p* (p - a) * (p - b) * (p - c));
  return area;
}

// function isObtuse.
const isObtuse = function (obj) {
  const a = obj.sideA;
  const b = obj.sideB;
  const c = obj.sideC;
  let long;
  let short1;
  let short2;

  if (a >= b && a >= c) {
    long = a;
    short1 = b;
    short2 = c;
  } else if (b >= a && b >= c) {
    long = b;
    short1 = a;
    short2 = c;
  } else {
    long = c;
    short1 = a;
    short2 = b;
  }
  if (short1 * short1 + short2 * short2 > long * long) {
    return "acute";
  } else if (short1 * short1 + short2 * short2 === long * long) {
    return "right";
  } else {
    return "obtuse";
  }
}

// test
console.log(`Is triangleA equilateral? ${ isEquilateral(triangleA) }.`);
console.log(`Is triangleB equilateral? ${ isEquilateral(triangleB) }.`);
console.log(`Is triangleC equilateral? ${ isEquilateral(triangleC) }.`);
console.log("\n");

console.log(`Is triangleA lsosceles? ${ isLsosceles(triangleA) }.`);
console.log(`Is triangleB lsosceles? ${ isLsosceles(triangleB) }.`);
console.log(`Is triangleC lsosceles? ${ isLsosceles(triangleC) }.`);
console.log("\n");

console.log(`triangleA's area is ${ triangleArea(triangleA).toFixed(2) }.`);
console.log(`triangleB's area is ${ triangleArea(triangleB).toFixed(2) }.`);
console.log(`triangleC's area is ${ triangleArea(triangleC).toFixed(2) }.`);
console.log("\n");

console.log(`Is triangleA acute, right or obtuse? ${ isObtuse(triangleA) }.`);
console.log(`Is triangleB acute, right or obtuse? ${ isObtuse(triangleB) }.`);
console.log(`Is triangleC acute, right or obtuse? ${ isObtuse(triangleC) }.`);
console.log("\n");

console.log("\n\n\n");
