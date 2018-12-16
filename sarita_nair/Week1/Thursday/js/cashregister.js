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
const sumArray = function(arr)
{
    let result = 0;
    for(let cnt = 0; cnt <= arr.length - 1; cnt++)
    {
      result += parseFloat(arr[cnt]);
    }
    return result;
};

const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

const cashRegister = function(myArr){
  let result = sumArray(Object.values(myArr));
  return `The total price of the shopping cart ${result}.`;
};

console.log(`${cashRegister(cartForParty)}`);
