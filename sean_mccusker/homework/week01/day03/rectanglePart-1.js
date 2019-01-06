/*

Geometry Function Lab
Part 1, Rectangle
Given the following a rectangle object like the one below, write the following functions:

isSquare - Returns whether the rectangle is a square or not
area - Returns the area of the rectangle
perimeter - Returns the perimeter of the rectangle

const rectangleA = {
  length: 4,
  width: 4
};

*/

// console.log(`Is there anybody out there?`);

var rectangle = {
  length: 4,
  width: 4,
  isSquare: function() {
    return (this.length === this.width);
  },
  area: function() {
    return (this.length * this.width);
  },
  perimeter: function() {
    return (this.length * 2 + this.width * 2);
  }
};

console.log(`Rectangle is a square ${ rectangle.isSquare() }`);
console.log(`Area of rectangle: ${ rectangle.area() }`);
console.log(`Perimeter of rectangle: ${ rectangle.perimeter() }`);
