/*
Part 1, Rectangle
Given the following a rectangle object like the one below, write the following functions:

isSquare - Returns whether the rectangle is a square or not
area - Returns the area of the rectangle
perimeter - Returns the perimeter of the rectangle
const rectangleA = {
  length: 4,
  width: 4
};

const rectangleA = {
  length: 4,
  width: 4
};

let isSquare = function(length, width) {
  if (length === width) {
    return "Your rectangle is a square";
  }
};

let area = function(length, width) {
  area = (length * width);
  return `The area of your rectangle is ${ area }`;
};


let perimeter = function(length, width) {
  perimeter = (length * 2) + (width * 2);
  return `The perimeter of your rectangle is ${ perimeter }`;
};



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
//
//
// const triangleA = {
//   sideA: 3,
//   sideB: 4,
//   sideC: 4
// };
//
// let isEquilateral = function(sideA, sideB, sideC) {
//   if (sideA === sideB && sideB === sideC) {
//     return `Your triangle is equilateral`;
//   }
// };
//
// let isIsosceles = function(sideA, sideB, sideC) {
//   if ((sideA === sideB && sideA != sideC) || (sideB === sideC && sideB != sideA) || (sideC === sideA && sideC != sideB)) {
//     return `Your triangle is isoceles`;
//   }
// };
//
// let area = function(sideA, sideB, sideC) {
//   let halfOfPerimeter = ((sideA + sideB + sideC) * 0.5);
//   let area = Math.sqrt(halfOfPerimeter * (halfOfPerimeter - sideA) * (halfOfPerimeter - sideB) * (halfOfPerimeter - sideC));
//   return `The area of your triangle is ${ area }.`;
//
//
// };
//
//           C
//          /\
// sideB   /  \    sideA
//        /    \
//       /      \
//     /__________\
//   A    sideC    B
//

//const triangleA = {
//  sideA: 3,
//  sideB: 4,
//  sideC: 4

// let isObtuse = function(sideA, sideB, sideC) {
//
// let angleA = Math.acos((((sideB * sideB) + (sideC * sideC) - (sideA * sideA)) / (2 * sideB * sideC)) * 57.2958);   // trig, then convert radians to degrees
// let angleB = Math.acos((((sideA * sideA) + (sideC * sideC) - (sideB * sideB)) / (2 * sideA * sideC)) * 57.2958);   // trig, then convert radians to degrees
//   let angleC = (180 - angleA - angleB);
//   if (angleA > 90 || angleB > 90 || angleC > 90) {  // find if any angles are obtuse
//   return "Your triangle is obtuse"; }
// };
//
//
//
//
// The Cash Register
// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart.

const cartForParty = {
  apple: "1.25",
  coke: "2.50",
  tp: "9.75",
  lollies: "15.95",
}

function cashRegister(costs)
let sum = 0;
for (let cost of cartForParty
