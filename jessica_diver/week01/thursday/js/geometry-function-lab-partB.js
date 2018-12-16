// Part 2, Triangle
//
// Given the following a triangle object like the one below, write the following functions:

// const triangleA = {
//   sideA: 3,
//   sideB: 4,
//   sideC: 4
// };

const triangleA = {
  sideA: 4,
  sideB: 4,
  sideC: 4,
};

const triangleB = {
  sideA: 3,
  sideB: 6,
  sideC: 6,
};

// isEquilateral - Returns whether the triangle is equilateral or not

const isEquilateral = function (tri) {
  if (tri.sideA === tri.sideB === tri.sideC ) {
    return `Triangle is an equilateral.`;
  } else {
    return `Triangle is not an equilateral`;
  }
};

console.log(isEquilateral(triangleA));
console.log(isEquilateral(triangleB));

// isIsosceles - Returns whether the triangle is isosceles or not

const isIsosceles = function (tri) {
  let aAndB = (tri.sideA === tri.sideB);
  let bAndC = (tri.sideB === tri.sideC);

  if ( tri.sideB === tri.sideC || aAndB || bAndC ) {
    return 'This triangle is an isosceles';
  } else {
    return 'This triangle is not an isosceles';
  }
};

//problem here is an equlateral returns as an isosceles

console.log(isIsosceles(triangleA));
console.log(isIsosceles(triangleB));

// area - Returns the area of the Triangle

// const area = function (tri) {
//   return
// };
//
// console.log(area(triangleA));
// console.log(area(triangleB));


// isObtuse - Returns whether the triangle is obtuse or not

const isObtuse = function (tri) {


};
