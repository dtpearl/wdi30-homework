// Input
const cart = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

// Output

const cart1 = {
  banana: "1",
  handkerchief: "5",
  Tshirt: "25",
  apple: "6",
  nalgene: "10",
  proteinShake: "22"
};

function cashRegister(cart){
  let items = Object.keys(cart);
  let total = 0;
  //console.log(items[5]);

  for (let i = 0; i < items.length; i++) {
    let itemName = items[i];
    let itemPrice = cart[itemName];
    total = total + itemPrice
  }

  return total;
}
console.log( cashRegister(cart1) );
console.log( cashRegister(cart) );
