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

// Setup shopping carts.
const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

const cartForHome = {
  banana: "12",
  handkerchief: "99.99",
  Tshirt: "128",
  apple: "0.98",
  nalgene: "12.38",
  proteinShake: "2233.34"
};

const cartForCompany = {
  banana: "10000.25",
  handkerchief: "999999.99",
  Tshirt: "250.01",
  apple: "0.09",
  nalgene: "10.38",
  proteinShake: "22.36"
};

// function cashRegister.
const cashRegister = function (obj) {
  const add = function (a, b) {
    return a + b;
  }
  const priceArray = Object.values(obj).map(Number);
  const totalPrice = priceArray.reduce(add);
  return totalPrice;
}

// test
console.log(`The total price of your shopping cart is ${ cashRegister(cartForParty) }.`);
console.log(`The total price of your shopping cart is ${ cashRegister(cartForHome) }.`);
console.log(`The total price of your shopping cart is ${ cashRegister(cartForCompany) }.`);
console.log("\n\n\n");
