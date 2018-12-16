/*Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart. Example

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
cashRegister(cartForParty)); // 60.55*/
const cartForParty = [
  {itemName: "banana", itemPrice: 1.25},
  {itemName: "handkerchief", itemPrice: .99},
  {itemName: "Tshirt", itemPrice: 25.01},
  {itemName: "apple", itemPrice: 0.60},
  {itemName: "nalgene", itemPrice: 10.34},
  {itemName: "proteinShake", itemPrice: 22.36}
] ;
let totalPrice=0;
for (var i = 0; i < cartForParty.length; i++) {
  let product = cartForParty[i];
  // let totalPrice=0;
   totalPrice = totalPrice+ product.itemPrice;
   // console.log(totalPrice);
};
console.log(totalPrice);



//   banana: "1.25",
//   handkerchief: ".99",
//   Tshirt: "25.01",
//   apple: "0.60",
//   nalgene: "10.34",
//   proteinShake: "22.36"
// };
// const product1 = {
//   itemName: []
//   itemPrice: []
// }
