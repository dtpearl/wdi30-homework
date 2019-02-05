const allergies = {
  1 : 'eggs',
  2 : 'peanuts',
  4 : 'shellfish',
  8 : 'strawberries',
  16 : 'tomatoes',
  32 : 'chocolate',
  64 : 'pollen',
  128 : 'cats'
}



const test = function (num) {
  const result = [];
  const array = Object.keys(allergies).reverse();
  for (let i = 0; i < array.length; i++) {
    if (num >= array[i]) {
      num -= array[i];
      result.push(allergies[array[i]]);
    }
  }
  if (num === 0) {
    console.log(`You are allergy to ${result}`);
  } else {
    console.log("allergies not listed here.")
  }
}
