url: https://gist.github.com/wofockham/8f953ac7f33125898071

// PART 1
const squareNumber = function(num) {
  result = num * num;
  console.log(`The result of squaring the number ${num} is ${result}.`);
  return result;
}

const halfNumber = function(num) {
  result = num / 2;
  console.log(`Half of ${num} is ${result}.`);
  return result;
}

const percentOf = function(num1, num2) {
  percentage = (num1 / num2) * 100;
  console.log(`${num1} is ${percentage}% of ${num2}.`);
  return percentage;
}

const areaOfCircle = function(radius) {
  area = Math.PI * radius * 2;
  console.log(`The area for a circle with radius ${radius} is ${area}.`);

  //Bonues: Round the result so there are only two digits after the decimal.
  var areaRounded = area.toFixed(2);
  console.log(area.toFixed(2));
  return areaRounded;
}

// PART 2
const allTheseFunctions = function(num) {
  var halfResult = halfNumber(num);
  var squareResult = squareNumber(halfResult);
  var areaCircleResult = areaOfCircle(squareResult);
  var percentageResult = percentOf(areaCircleResult,squareResult);
}

const drEvil = function(amount) {
  if (amount >= 1000000) {
    return amount + " dollars (pinky)"
  } else {
    return amount + " dollars"
  }
}

const mixUp = function(word1, word2) {
  var slice1 = word1.toString().slice(0,1);
  var slice2 = word2.toString().slice(0,1);
  var newWord1 = word1.replace(slice1,slice2);
  var newWord2 = word2.replace(slice2,slice1);
  console.log(newWord1 + " " + newWord2);
}

const warmUp = function(num) {
  var result = "";
  var factorOf3 = Number.isInteger(num/3);
  var factorOf5 = Number.isInteger(num/5);
  var factorOf7 = Number.isInteger(num/7);
  if (factorOf3) {
    result.concat('Pling');
  }
  if (factorOf5) {
    result.concat('Plang');
  }
  if (factorOf7) {
    result.concat('Plong');
  }
  if (!factorOf3 && !factorOf5 && !factorOf7) {
    result = num.toString();
  }
  console.log(result);
}
