//Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart. Example

const cartForParty = {  
  banana: 1.25,
  handkerchief: .99,
  Tshirt: 25.01,
  apple: 0.60,
  nalgene: 10.34,
  proteinShake: 105.36,
};

const shopping = {  
  banana: 1,
  handkerchief: 83,
  Tshirt: 44,
  apple: 2,
  nalgene: 8,
  proteinShake: 88,
};

//---------------------------{ Notes About The Function }--------------------------//

/*

Object.keys() returns array of property names and then reduce() isolates the property to single key value, which is the dollar value. 

sum = accumulator && parseFloat() = currentValue

0 represents the starting value of the reduce function 

*/

//---------------------------{ Notes About The Function }--------------------------//

function cashRegister(obj){
  return Object.keys(obj).reduce(function(sum, key){
    return sum + parseFloat(obj[key]);
  }, 0);
}

console.log(`The total value of this cart is: $${cashRegister(cartForParty)}`);
console.log(`The total value of this cart is: $${cashRegister(shopping)}`);