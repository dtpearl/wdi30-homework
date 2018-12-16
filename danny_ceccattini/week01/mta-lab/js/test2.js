// console.log('ciao mondo')

const myObjects = {
  groceries: ['beans', 'tomatoes', 'broccoli', 'yogurt', 'chocoloate', 'spinach', 'pumpkin'],
  watches: ['gskx', 'bskx', 'rolex', 'stowa', 'casio', 'seiko', 'longines'],
  friends: ['ligi', 'rob', 'matt', 'emilio', 'giulio'],
};

const groceryList = myObjects.groceries;
const watchList = myObjects.watches;
const friendList = myObjects.friends;

// console.log(groceryList);
// console.log(watchList);
// console.log(friendList);


// console.log(groceryList.indexOf('stowa'));

const sellWatches1 = watchList.indexOf("bskx");
const sellWatches2 = watchList.indexOf("seiko") + 1;


// console.log(sellWatches1);
// console.log(sellWatches2);

const leftOver = watchList.slice(sellWatches1, sellWatches2);

// console.log(leftOver);





//
// const newListItems = function (array) {
//   // let iLike = null;
//   // let arrayJoin = array.join(" | ");
//   let newArray = [];
//   for (let i = 0; i < array.length; i++) {
//     newArray.push(array[i]);
//   };
//   return `These are my favourite foods: ${ newArray.join(", ") }`;
//   // return iLike;
// };
//
// console.log(newListItems(groceryList));


const func1 = function (a, b) {
  return a + b;
};

// console.log(func1(2, 2));

const func2 = function (a, b) {
  return a * b;
};


const ifNot = function (a, b) {
  if (a % 2 === 0 && b % 2 === 0) {
    return func1 (a, b);
  } else {
    return func2 (a, b);
  }
};

console.log(ifNot(3, 6));
