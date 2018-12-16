const rectangle = {
    length: 4,
    width:  6,

};

const rectangle1 = {
    length: 4,
    width:  4,

};

const isSquare = function (rectangle) {
  if (rectangle.length === rectangle.width) {
    console.log(`It is a square`);

  } else {
    console.log(`It is not a square`);
  }
}

const area = function (rectangle) {
  const totalarea = rectangle.length * rectangle.width;
  return totalarea;
}

const perimeter = function (rectangle){
  //console.log( ${ rectangle.length }  ${ rectangle.width } );
}
console.log( isSquare(rectangle) );
console.log( isSquare(rectangle1) );
console.log( area(rectangle));
console.log( perimeter(rectangle));
