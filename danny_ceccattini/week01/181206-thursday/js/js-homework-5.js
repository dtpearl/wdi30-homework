/*

The Cash Register
Write a function called cashRegister that takes a shopping cart object.
The object contains item names and prices (itemName: itemPrice).
The function should return the total price of the shopping cart. Example

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

const partyCart = {
  banana: '3.15',
  handkerchief: '0.98',
  shirt: '23.06',
  apple: '0.56',
  kerosene: '6.23',
  butterscotch: '45.12',
  explosives: '156.34',
  steven_fry: '123.43',
  a_really_pissed_off_chimp: '345.60',
};

let cartValues = Object.values( partyCart );            // Extracting the value from the object

const cashRegister = function (array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += parseFloat( array[i] );
  }
  return sum;
};

//console.log(cashRegister(cartValues));

const total = cashRegister(cartValues);

console.log(`We will need $${ total } to make this event moderately decent.`);
