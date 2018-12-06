console.log('Alright, alright, alright!');

/*

The Cash Register
Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart. Example

// Input
const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

// Output
cashRegister(cartForParty)); // 60.55

*/

const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

const cashRegister = function (shoppingCart) {
  const cartArray = Object.values(shoppingCart);
  let cartTotal = 0;

  for (var i = 0; i < cartArray.length; i++) {
    cartTotal += Number.parseFloat(cartArray[i]);
  }
  return cartTotal;
};

const cart = cashRegister(cartForParty);
console.log(`The total for your shopping cart is $${cart}`);
