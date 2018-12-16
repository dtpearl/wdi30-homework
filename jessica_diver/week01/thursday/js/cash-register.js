// The Cash Register
//
// Write a function called cashRegister that takes a shopping cart object.
// The object contains item names and prices (itemName: itemPrice).
// The function should return the total price of the shopping cart. Example

// Input
const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};


const cashRegister = function (shoppingCart) {
  const items = Object.keys(shoppingCart); //gives an array of items by the key
  let totalPrice = 0;

  for (let i = 0; i < items.length; i++) {
    let itemName = items[i]; //gets the name of the key for each item
    let itemPrice = shoppingCart[itemName]; //gets the price for each item
    totalPrice += Number.parseFloat(itemPrice); //converts the price to a float and add it up.
  }
  return totalPrice;
};



console.log(cashRegister(cartForParty));

// // Output
// cashRegister(cartForParty); // 60.55
