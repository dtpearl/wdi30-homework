const triangleA = {
  sideA: 9,
  sideB: 9,
  sideC: 9
};

const triangleB = {
  sideA: 6,
  sideB: 7,
  sideC: 8
};

// isEquilateral -
// Returns whether the triangle is equilateral or not

const isEquilateral = function (triangle) {
  if (triangle.sideA === triangle.sideB && triangle.sideB === triangle.sideC)  {
    console.log(`equilateral`);

  } else if ( triangle.sideA === triangleA.sideB || triangle.sideA === triangle.sideC || triangle.sideB === triangle.sideC){
    console.log(`isosceles`);
  }
}

//console.log( isEquilateral(triangleA) );
console.log( isEquilateral(triangleB) );
