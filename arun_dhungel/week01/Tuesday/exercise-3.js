/*
Write a function called percentOf that will take two numbers,
figure out what percent the first number represents of the second number,
and return the result. It should also log a string like "2 is 50% of 4."
*/

function percentOf(number1, number2){

        const result = (number1/number2)*100;
        console.log(`${number1} is ${result}% of ${number2}`);
        return result;
}
const percent = percentOf (2,4);
