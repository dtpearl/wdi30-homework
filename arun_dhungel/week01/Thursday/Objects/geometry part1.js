/*
Part 1, Rectangle
Given the following a rectangle object like the one below, write the following functions:

isSquare - Returns whether the rectangle is a square or not
area - Returns the area of the rectangle
perimeter - Returns the perimeter of the rectangle
*/


const rectangleA = {
    length: 4,
    width: 4
};

const rectangleB = {
    length: 6,
    width: 12
};

const rectangleC = {
    length: 7,
    width: 2
};

function isSquare(rectangleA) {
    let length = rectangleA.length;
    let width = rectangleA.width;

    if (length === width) {
        return 'This Rectangle is square!.';
    } else {
        return 'This Rectangle is NOT square!.';
    }
};

// console.log(isSquare(rectangleB));

function area(rectangleA) {
    return rectangleA.length * rectangleA.width;
};

// console.log(area(rectangleB));

function perimeter(rectangleA) {
    return (rectangleA.length + rectangleA.width) * 2;
};

// console.log(perimeter(rectangleB));

function rectangleTest(rectangleA) {
    const rectangleInfo = {
        length: rectangleA.length,
        width: rectangleA.width,
        shape: isSquare(rectangleA),
        area: area(rectangleA),
        perimeter: perimeter(rectangleA)
    }

    return rectangleInfo
};

// console.log(rectangleTest(rectangleA));
// console.log(rectangleTest(rectangleB));
console.log(rectangleTest(rectangleC));