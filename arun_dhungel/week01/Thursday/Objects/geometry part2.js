// Given the following a triangle object like the one below, write the following functions:

// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not


const triangleA = {
    sideA: 3,
    sideB: 4,
    sideC: 4
};

const triangleB = {
    sideA: 5,
    sideB: 3,
    sideC: 7
};

const triangleC = {
    sideA: 2,
    sideB: 2,
    sideC: 2
};



function isEquilateral(triangleA) {
    const side1 = triangleA.sideA;
    const side2 = triangleA.sideB;
    const side3 = triangleA.sideC;

    if (side1 === side2 && side2 === side3) {
        return 'This triangle is equilateral!';
    } else {
        return 'This triangle is NOT equilateral!!';
    }
};

// console.log(isEquilateral(triangleA));

function isIsosceles(triangleA) {
    const side1 = triangleA.sideA;
    const side2 = triangleA.sideB;
    const side3 = triangleA.sideC;

    if (side1 === side2 || side2 === side3 || side1 === side3) {
        return 'This triangle is isosceles!';
    } else {
        return 'This triangle is isosceles!';
    }
};

// console.log(isIsosceles(triangleA));

function area(triangleA) {
    const side1 = triangleA.sideA;
    const side2 = triangleA.sideB;
    const side3 = triangleA.sideC;

    const perimeter = (side1 + side2 + side3) / 2;
    return Math.sqrt(perimeter * ((perimeter - side1) * (perimeter - side2) * (perimeter - side3))).toFixed(2);
};

// console.log(area(triangleA));

function isObtuse(triangleA) {
    const side1 = triangleA.sideA;
    const side2 = triangleA.sideB;
    const side3 = triangleA.sideC;

    let longest;
    let squaredLongest;
    let squaredPlusSides;

    if (side1 !== side2 && side2 !== side3) {
        if (side1 > side2 && side1 > side3) {
            longest = side1;
            squaredLongest = side1 * side1;
            squaredPlusSides = (side2 ^ 2) + (side3 ^ 2);

        } else if (side2 > side1 && side2 > side3) {
            longest = side2;
            squaredLongest = side2 * side2;
            squaredPlusSides = (side1 ^ 2) + (side3 ^ 2);

        } else {
            longest = side3;
            squaredLongest = side3 * side3;
            squaredPlusSides = (side2 ^ 2) + (side1 ^ 2);
        }

        if (squaredLongest > squaredPlusSides) {
            return 'This triangle is isObtuse!';
        }
    }

    return 'This triangle is NOT isObtuse!';
};

// console.log(isObtuse(triangleA));

function triangleTest(a) {
    let triangleInfo = {
        isEquilateral: isEquilateral(a),
        isIsosceles: isIsosceles(a),
        area: area(a),
        isObtuse: isObtuse(a)
    }
    return triangleInfo;
};


console.log(triangleTest(triangleA));
console.log(triangleTest(triangleB));
console.log(triangleTest(triangleC));