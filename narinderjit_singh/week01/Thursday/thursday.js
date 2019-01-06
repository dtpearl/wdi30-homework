/* Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart. 


const cartForParty = {  
    banana: "1.25",
    handkerchief: ".99",
    Tshirt: "25.01",
    apple: "0.60",
    nalgene: "10.34",
    proteinShake: "22.36"
  };

const cashRegister = function(myCart){
    let priceTotal = 0;
    let shopItems = "";
    for (let key in myCart) {
        shopItems+=`${key} ,`;
        priceTotal += +(myCart[key]);
     }
    
    console.log(`You Total Bill for bying ${shopItems} = ${priceTotal}`);
} 
cashRegister(cartForParty);

*/


/* JavaScript Bank : In this homework, you'll create a basic bank in Javascript.
*/
const Account = function(name,bal){  
    this.c_name = name;
    this.c_balance = bal;
    
    this.displayBalance = function(){
         console.log(this.c_balance);
    }

    this.addBalance = function(value){
        this.c_balance += value;
    }
    
}


const bank = function(){
    let database = [];
    database.push(new Account("Inder",2012.12));
    database[0].addBalance(3000);
    console.log(database[0].displayBalance());

}
bank();