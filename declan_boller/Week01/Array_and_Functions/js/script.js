//  Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

function maxOfTwoNumbers(num1, num2) {
  let largerNumber;

  if (num1 > num2) {
    largerNumber = `${num1} is greater than ${num2}`
  } else {
    largerNumber = `${num2} is greater than ${num1}`
  }
  return largerNumber;
}

console.log(maxOfTwoNumbers(56, 97));

//  Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

function maxOfThreeNumbers(num1, num2, num3) {
  let Array = [num1, num2, num3];
  // Use ES6 Spread Syntax which allows elements of array to expand
  let maxNumber = Math.max(...Array);
  return maxNumber;
}

console.log(maxOfThreeNumbers(6111117, 34, 22));
console.log(maxOfThreeNumbers(76, 108889, 77));
console.log(maxOfThreeNumbers(90, 93, 100000));

//  Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

function isAVowel(char) {
  if (char.match(/[aeiou]/gi) && char.length === 1) {
    return true
  }
  return false
}

console.log(isAVowel('a'));
console.log(isAVowel('e'));


//  Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.

function sumArray(...emptyArray) {
    return emptyArray.reduce(function(a,b){
      return a + b
    });
}

console.log(sumArray(1,2,3,4));

function multiplyArray(...emptyArray) {
    return emptyArray.reduce(function(a,b){
      return a * b
    });
}

console.log(multiplyArray(1,2,3,4));


//    Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".

function reverseString(string){
  let newString = '';
  for(let i = string.length - 1; i >= 0; i--){
    newString += string[i];
  }
  return newString;
}

console.log(reverseString('jag testar'));
console.log(reverseString('Declan Boller'));

//    Write a function findLongestWord that takes an array of words and returns the length of the longest one.

function findLongestWord(...wordArray){
  let longest = wordArray.sort(function(a,b){
    return b.length - a.length;
  })[0];
  return `The longest word is ${longest}`;
}

console.log(findLongestWord('Hillbilly', 'josh', 'adam', 'cat', 'herbert', 'wolfram'));
console.log(findLongestWord('josh', 'adam', 'cat', 'herbert', 'wolfram'));

//Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i.




