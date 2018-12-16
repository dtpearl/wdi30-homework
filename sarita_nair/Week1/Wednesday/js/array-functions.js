/*
Array and Functions Bonus Material
Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them.
Use the if-then-else construct available in Javascript.
You'll have to remember your pre-work, or do some googling to figure this out.
Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an
array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
*/

const arrVowel = ['a','e','i','o','u'];

let toUpper = function(arr){
    return arr.toUpperCase();
};
//map handler
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 const vowelCheck = function(arg){
    return arrVowel.map(toUpper).includes(arg.toUpperCase());
 };

const maxOfTwoNumbers = function(number1, number2)
{
    let result = '';
    if(number1 > number2)
      result = number1;
    else
      result = number2;
    return result;
};

function myArraySort(arr,arg) {
	if(arg === 'asc')
    return arr.sort(function(a, b){return a-b});
    //const arr = [number1, number2, number3];
    else
    return arr.sort(function(a, b){return b-a});
    //document.getElementById("demo").innerHTML = points;
};
const maxOfThree = function(number1, number2, number3)
{
    let result = '';
    result = maxOfTwoNumbers(maxOfTwoNumbers(number1,number2),number3);
    return result;
};

const sumArray = function(arr)
{
    let result = 0;
    for(let cnt = 0; cnt <= arr.length - 1; cnt++)
    {
      result += arr[cnt];
    }
    return result;
};

const multiplyArray = function(arr)
{
    let result = 1;
    for(let cnt = 0; cnt <= arr.length - 1; cnt++)
    {
      result *= arr[cnt];
    }
    return result;
};

const callFunctions =  function()
{
    //console.log(maxOfTwoNumbers(15,2));
    console.log(maxOfThree(55,27,15));
    //console.log(vowelCheck('A'));
    //console.log(sumArray([1,2,4,4]));
    //console.log(multiplyArray([1,4,3,4]));
    //console.log(myFunction(1,27,115));
};


callFunctions();
