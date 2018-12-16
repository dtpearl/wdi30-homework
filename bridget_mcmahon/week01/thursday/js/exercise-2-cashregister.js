/*

Write a function called cashRegister that takes a shopping cart object.

The object contains item names and prices (itemName: itemPrice).
The function should return the total price of the shopping cart.

*/

// EXAMPLE
// Input
const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

// function
const cashRegister = function (shopping) {
  // put object values into an array
  let prices = Object.values(cartForParty);
  // convert strings to numbers
  prices = prices.map(Number);
  let totalPrice = 0;
  // loop through cart item prices & add to totalPrice
  for (let i = 0; i < prices.length; i++) {
    totalPrice += prices[i];
  }
  return totalPrice;
};

// Output
console.log(`$${cashRegister(cartForParty)}`); // 60.55
