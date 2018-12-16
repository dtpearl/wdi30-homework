// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart. Example

// input
const cartForParty = {  
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

// Output
// cashRegister(cartForParty)); // 60.55

function cashRegister(cartForParty) {
let priceList = Object.values(cartForParty).map(Number);
let totalPrice;
for (i = 0; i < priceList.length; i++) {
    totalPrice = priceList.reduce((a, b) => a + b, 0);
}

return totalPrice;
};

console.log(cashRegister(cartForParty));