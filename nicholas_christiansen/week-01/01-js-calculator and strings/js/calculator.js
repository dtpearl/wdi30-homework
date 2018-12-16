console.log('CALCULATOR -----');

// PART 1
console.log('----- PART 1 -----');
/*
Write a function called squareNumber that will take one argument (a number),
square that number, and return the result. It should also log a string like
"The result of squaring the number 3 is 9."
*/

const squareNumber = function(num) {
    const squaredNumber = num * num;
    console.log(`The result of squaring the number ${ num } is ${ squaredNumber}`);
    return squaredNumber;
}

/*
Write a function called halfNumber that will take one argument (a number),
divide it by 2, and return the result. It should also log a string like
"Half of 5 is 2.5.".
*/

const halfOf = function(num) {
    const half = num / 2;
    console.log(`Half of ${num} is ${ half }`);
    return half;
}

/*
Write a function called percentOf that will take two numbers, figure out what
percent the first number represents of the second number, and return the result.
It should also log a string like "2 is 50% of 4."
*/

const percentOf = function(num1, num2) {
    const percent = Math.round((num1/num2) * 100);
    console.log(`${ num1.toFixed(2) } is ${ percent }% of ${ num2.toFixed(2) }`);
    return percent;
}

/*
Write a function called areaOfCircle that will take one argument (the radius),
calculate the area based on that, and return the result. It should also log a
string like "The area for a circle with radius 2 is 12.566370614359172."
*/

const areaOfCircle = function(radius) {
    const area = Math.PI * squareNumber(radius);
    console.log(`The area of circle with radius ${ radius.toFixed(2) } is ${ area.toFixed(2) }`);
    return area;
}

squareNumber(3);
halfOf(5);
percentOf(5, 10);
areaOfCircle(2);

// PART 2
console.log('----- PART 2 -----')

/*
Write a function that will take one argument (a number) and perform the
following operations, using the functions you wrote earlier1:
*/

const doPart2 = function(num) {
    const half    = halfOf(num) // Take half of the number and store the result.
    const square = squareNumber(half); // Square the result of #1 and store that result.
    const area    = areaOfCircle(square); // Calculate the area of a circle with the result of #2 as the radius.
    const result  = percentOf(square, area); // Calculate what percentage that area is of the squared result (#3).
}

doPart2(5);
