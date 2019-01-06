/* Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
*/

const squareNumber = function(number){
    let result = number*number;
    console.log(result);
    return result;
}

/* Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.". */

const halfNumber = function(number){
    let result = number/2;
    console.log(result);
    return result;
}

/* Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4." */

const percentOf = function(number,per){
    let result = (number*per)/100;
    console.log(result+" is " +per + "% of "+ number);
    return result;
}

