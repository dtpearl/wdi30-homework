const squareNumber = function(num) {
  const result= num*num;
  console.log(`The result of squaring the number ${num} is ${result.toFixed(2)}`);
}
squareNumber(25);
const halfNumber = function(number){
  const result = number/2;
  console.log(`Half of ${number} is ${result.toFixed(2)}.`);
}
halfNumber(424);
const percentOf = function(part, whole){
  const persent=part/whole*100;
  console.log(`${part} is ${Math.round(persent)}% of ${whole}.`);
}
percentOf(5,10);
percentOf(3,10);
percentOf(3,20);
percentOf(3,7);
const areaOfCircle = function(radius){
  const circle = Math.PI*radius**2;
  console.log(`The area for a circle with radius ${radius} is ${circle.toFixed(2)}.`);
}
areaOfCircle(24);
