const halfNumber = function(number){
  const result = number/2;
  return result;
}
const squareNumber = function(result){
  const square = result*result;
  return square;
}
  const areaOfCircle = function(square){
    const circle = Math.PI*square**2;
    return circle;
}
const percentOf = function(circle, square){
  const percent=circle/square*100;
  return percent;
}


// const a=areaOfCircle(squareNumber(halfNumber(12)));
// console.log(a);

// const a=square;
// console.log(a);
const b=areaOfCircle(squareNumber(halfNumber(12)));
console.log("circle", b);

const c=squareNumber(halfNumber(12));
console.log("square", c);

const a=percentOf(areaOfCircle(squareNumber(halfNumber(12))), squareNumber(halfNumber(12)));
console.log("circle", a);
