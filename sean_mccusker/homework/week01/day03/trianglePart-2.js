/*

Part 2, Triangle
Given the following a triangle object like the one below, write the following
functions:

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

// console.log(`Is there anybody out there?`);

const triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4,
  isEquilateral: function() {
    return (this.sideA === this.sideB && this.sideB === this.sideC);
  },

  isIsosceles: function() {
    return (this.sideA === this.sideB || this.sideB === this.sideC || this.sideC === this.sideA);
  },
  
  area: function() {
    p = this.sideA + this.sideB + this.sideC;
    return Math.sqrt(p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC));
  },

  isObtuse: function() {
    max = Math.max(this.sideA, this.sideB, this.sideC);
    if (this.sideA === max) {
      return this.sideA > Math.sqrt(this.sideB * this.sideB + this.sideC * this.sideC);
    }
    else if (this.sideB === max) {
      return this.sideB > Math.sqrt(this.sideA * this.sideA + this.sideC * this.sideC);
    }
    else {
      return this.sideC > Math.sqrt(this.sideB * this.sideB + this.sideA * this.sideA);
    }
  }
};

console.log(`Triangle is equilateral? ${ triangle.isEquilateral() }`);
console.log(`Triangle is isosceles? ${ triangle.isIsosceles() }`);
console.log(`Area of triangle: is ${ triangle.area() }`);
console.log(`Triangle is obtuse? ${ triangle.isObtuse() }`);
