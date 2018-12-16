console.log("7777");
/*Geometry Function Lab
Part 1, Rectangle
Given the following a rectangle object like the one below, write the following
functions:*/

//isSquare - Returns whether the rectangle is a square or not
const isSquare = function ( a , b ){
  if (a === b) {
    return "square";}

    return "rectangle";
};

//area - Returns the area of the rectangle
const areaOfRectangle = function ( a, b) {
  const area = a * b;

  return `The area of the rectangle is ${area}.`
};


//perimeter - Returns the perimeter of the rectangle
/*const rectangleA = {
  length: 4,
  width: 4
};*/

const perimeterOfRectangle = function ( a, b ) {
  const perimeter = (a + b) * 2;

  return `The perimeter of the rectangle is ${perimeter}.`
};


/*Part 2, Triangle
Given the following a triangle object like the one below, write the following
functions:

isEquilateral - Returns whether the triangle is equilateral or not*/
// const triangleA = {
//   sideA: 10,
//   sideB: 4,
//   sideC: 3
// };
const isEquilateral = function (a,b,c){
  if (a === b && b === c) {
    return "This is a equilateral triangle."
  }
    return "This is not a equilateral triangle."
}

//isIsosceles - Returns whether the triangle is isosceles or not


const isIsosceles = function (a,b,c) {
  if (a === b || b === c || a === c) {
    return "This is a isosceles triangle."
  }
    return "This is not a isosceles triangle."
};
//area - Returns the area of the Triangle

const area = function (a,b,c) {
  let p = (a + b + c)/2;
  let s = Math.sqrt( p * (p-a) * (p-b) * (p-c) )
;
  return `The area of the triangle is ${p}.`
} ;
//isObtuse - Returns whether the triangle is obtuse or not
const isObtuse = function (a,b,c) {
  if ( c*c > a*a + b*b || b*b > a*a + c*c  || a*a > b*b + c*c) {
    return "This is obtuse triangle."
  }
    return "This is not obtuse triangle."
};
