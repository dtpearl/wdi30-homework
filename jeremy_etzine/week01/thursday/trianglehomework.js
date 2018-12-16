// Part 2, Triangle
// Given the following a triangle object like the one below, write the following functions:

const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

const triangleB = {
  sideA: 5,
  sideB: 5,
  sideC: 5
};



// isEquilateral - Returns whether the triangle is equilateral or not


const isEquilateral = function (tri) {
  if (tri.sideA === tri.sideB && tri.sideA === tri.sideC) {
  return 'This triangle is equilateral.'
  } else {
  return 'This triangle is not equilateral.'
  };
};

console.log(isEquilateral(triangleA));
console.log(isEquilateral(triangleB));


// isIsosceles - Returns whether the triangle is isosceles or not


const isIsosceles = function (tri) {
  if (tri.sideA === tri.sideB && tri.sideA != tri.sideC) {
    return 'This triangle is isosceles.'
  } else if (tri.sideA === tri.sideC && tri.sideA != tri.sideB) {
    return 'This triangle is isosceles.'
  } else if (tri.sideB === tri.sideC && tri.sideB != tri.sideA) {
    return 'This triangle is isosceles.'
  } else {
    return 'This triangle is not isosceles.'
  };
};

console.log(isIsosceles(triangleA));
console.log(isIsosceles(triangleB));


// area - Returns the area of the Triangle

const area = function (tri) {
  let sideD = tri.sideA / 2;
  let length = Math.sqrt((Math.pow (tri.sideB, 2)) - (Math.pow (sideD, 2)));
  let totalArea = sideD * length;
  return totalArea;
};

console.log(area(triangleA));
console.log(area(triangleB));


// isObtuse - Returns whether the triangle is obtuse or not
