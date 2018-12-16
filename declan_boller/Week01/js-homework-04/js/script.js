//    ------------------------------- { /* Part 1 */ } -------------------------------

/*

Geometry Function Lab
Part 1, Rectangle

Given the following a rectangle object like the one below, write the following functions:


*/

//isSquare - Returns whether the rectangle is a square or not

const rectangleA = {
  length: 5,
  width: 10,
};

function isSquare(num){
  
  if(num.length === num.width){
    return `This item is a square`
  } else {
    return `This item is a not a square`;
  }
}

console.log(isSquare(rectangleA));

//area - Returns the area of the rectangle

function areaOfRectangle(num){
  let A = num.length * num.width;
  return A;
}

console.log(areaOfRectangle(rectangleA));


//perimeter - Returns the perimeter of the rectangle

function perimeter(num){
  let P = 2*(num.length + num.width);
  return P;
}

console.log(perimeter(rectangleA));

//    ------------------------------- { /* Part 2 */ } -------------------------------

/*

Part 2, Triangle

Given the following a triangle object like the one below, write the following functions:

*/

const triangleA = {
  sideA: 5,
  sideB: 5,
  sideC: 9,
};

// every equilateral triangle is isosceles, but not every isosceles triangle is equilateral. 

//isEquilateral - Returns whether the triangle is equilateral or not

function isEquilateral(num){
  const sides = num.sideA === num.sideB && num.sideB === num.sideC;
  
  if(sides){
    return `This triangle is equilateral`;
  } else {
    return `This triangle is not equilateral`;
  };
};

console.log(isEquilateral(triangleA));

//isIsosceles - Returns whether the triangle is isosceles or not

function isIsosceles(num){
  const sides = num.sideA === num.sideB || num.sideA === num.sideC || num.sideB === num.sideC;
  
  if(sides){
    return `This is an Isosceles triangle`;
  } else {
    return `This is not an Isosceles triangle`
  };
};

console.log(isIsosceles(triangleA));

//area - Returns the area of the Triangle

function areaOfTriangle(num){
  let perimeter = (num.sideA + num.sideB + num.sideC)/2;
  let area = Math.sqrt(perimeter*(perimeter - num.sideA)*(perimeter - num.sideB)*(perimeter - num.sideC));
  
  return area;
  
}

console.log(areaOfTriangle(triangleA));

//isObtuse - Returns whether the triangle is obtuse or not

function isObtuse(num){
  let sideA = Math.sqrt(num.sideA);
  let sideB = Math.sqrt(num.sideB);
  let sideC = Math.sqrt(num.sideC);
  
  const calcObtuseA = sideA > sideB + sideC;
  const calcObtuseB = sideB > sideA + sideC;
  const calcObtuseC = sideC > sideA + sideB;
  
  let obtuse = `Triangle is obtuse`;
  
  if(calcObtuseA){
    return obtuse;
    }else if(calcObtuseB){
    return obtuse;
  } else if(calcObtuseC){
    return obtuse;
  } else {
    return `Not Obtuse`;
  }
};

console.log(isObtuse(triangleA));


