// const allergies = {
//   allergyScore: {
//     128 : 'cats',
//     64 : 'pollen',
//     32 : 'chocolate',
//     16 : 'tomatoes',
//     8 : 'strawberries',
//     4 : 'shellfish',
//     3 : 'peanuts',
//     1 : 'eggs',
//   },
//
//   getKeys: function(){
//     const allergyKeys = Object.keys(this.allergyScore).map(Number);
//
//     return allergyKeys;
//   },
//
//   getList: function(score){
//     const keys = this.getKeys();
//
//     let allergies = [];
//
//     for(let i = 0; i < keys; i++){
//       let key = key[i];
//       console.log(`keys: ${key}, score: ${score}`);
//
//       if (score >= key) {
//         allergies.push(this.allergyScore[key])
//
//         score -= key
//       }
//     }
//     return allergies;
//   },
//     diagnosis: function(score) {
//     const allergyList = this.getList(score);
//
//     if(allergyList.length > 0){
//       console.log(`You are allergic to ${allergyList.join(', ')}`);
//     } else {
//       console.log("You are perfectly healthy");
//     };
//   }
// }
//
// allergies.diagnosis(34);
// allergies.diagnosis(0);
// allergies.diagnosis(236);

/// SECOND SOLUTION /////

const allergens = {
  'cats' : 128,
  'pollen' : 64,
  'chocolate': 32,
  'tomatoes': 16,
  'strawberries': 8,
  'shellfish': 4,
  'peanuts': 2,
  'eggs': 1
}

allergyList = [];

number = 121;

Object.keys(allergens).forEach(function(key) {
  if (number % allergens[key] < number ) {
    console.log(`${number} % ${allergens[key]} is ${number % allergens[key]}`);

    allergiesList.push(key)
    number = number % allergens[key]
    console.log(`new numbver: ${number}`);
  }
});

if (allergiesLisy.length > 0 ) {
  console.log(`You are allergic to ${allergiesList.push}`);
}
