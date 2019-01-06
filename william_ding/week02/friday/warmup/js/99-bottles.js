const sing = function (num = 99, num2 = 0) {
  // check for correct input.....
  if(num2 > num) {
    return "Can't sing backwards...";
  }
  // start number greater than 2, and finish number greater than 2....
  if ( num > 2 && num2 > 2) {
    for (let i = num; i >= num2; i--) {
      console.log(`${ i } bottles of beer on the wall, ${ i } bottles of beer. \nTake one down, pass it around, ${ i - 1 } bottles of beer on the wall...\n`);
    }
  // start number greater than 2, and finish number equal or smaller than 2...
  } else if ( num > 2 && num2 <= 2 ) {
    for (let i = num; i > num2; i--) {
      console.log(`${ i } bottles of beer on the wall, ${ i } bottles of beer. \nTake one down, pass it around, ${ i - 1 } bottles of beer on the wall...\n`);
    }
  }
  // SPECIAL CASE when ends at 2......
  if ( num2 === 2 ) {
    console.log(`2 bottles of beer on the wall, 2 bottles of beer. \nTake one down, pass it around, 1 bottle of beer on the wall...\n`);
  }
  // SPECIAL CASE when ends at 1......
  if ( num2 === 1 ) {
    console.log(`2 bottles of beer on the wall, 2 bottles of beer. \nTake one down, pass it around, 1 bottle of beer on the wall...\n`);
    console.log(`1 bottle of beer on the wall, 1 bottle of beer. \nTake one down, pass it around, no more bottles of beer on the wall.\n`);
  }
  // SPECIAL CASE when ends at 0......
  if ( num2 === 0 ) {
    console.log(`2 bottles of beer on the wall, 2 bottles of beer. \nTake one down, pass it around, 1 bottle of beer on the wall...\n`);
    console.log(`1 bottle of beer on the wall, 1 bottle of beer. \nTake one down, pass it around, no more bottles of beer on the wall.\n`);
    console.log(`No more bottles of beer on the wall, no more bottles of beer. \nGo to the store and buy some more, 99 bottles of beer on the wall.\n`)
  }
}
