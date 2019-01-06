// Geometry Function Lab
// Part 1, Rectangle
// Given the following a rectangle object like the one below, write the following functions:
//
// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle
// const rectangleA = {
//   length: 4,
//   width: 4
// };

let rectangle = {
  top: 40,
  bottom: 40,
  left: 10,
  right: 10,
  perimeter: function() {
    let perimeter = rectangle.top + rectangle.bottom + rectangle.left + rectangle.right;
    console.log(perimeter)
  },
  area: function() {
    let area = rectangle.top * rectangle.left;
    console.log(area)
  },
  isSquare: function() {
    if (rectangle.top !== rectangle.left && rectangle.right !== rectangle.bottom) {
      console.log('The rectangle is not square')
    } else {
      console.log('The rectangle is square')
    }
  }
}




// Part 2, Triangle
// Given the following a triangle object like the one below, write the following functions:
//
// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not
const triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4,
  isObtuse: function() {
    if (triangle.sideA !== triangle.sideB && triangle.sideB !== triangle.sideC){
      console.log('The triangle is Obtuse');
    } else {
      console.log('The triangle is not Obtuse')
    }
  },
  // area: function() {
  //   let base = 0;
  //   if (sideA > sideB) {
  //
  //   }
  //   let area = rectangle.top * rectangle.left;
  //   console.log(area)
  // },
  isIsosceles: function() {
    if (triangle.sideA === triangle.sideB || triangle.sideB === triangle.sideC) {
      console.log('The triangle is Isosceles')
    }
  },
  isEquilateral: function() {
    if (triangle.sideA === triangle.sideB && triangle.sideb === triangle.sideC) {
      console.log('The triangle is equilateral')
    }
  }
};


//  js-homework-5.md
// The Cash Register
// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart. Example
const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};
const cashRegister = function(shoppingCart){
  for (var i = 0; i < cartForParty.length; i++) {
    console.log(cartForParty[i]);
  }
}
