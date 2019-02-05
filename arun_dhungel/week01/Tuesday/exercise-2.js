/*
Write a function called halfNumber that will take one argument (a number),
 divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
 */
function halfNumber(number){

    const result = number/2;
    console.log(`Half of ${number} is ${result}`);
    return result;
}
const half = halfNumber(5);
