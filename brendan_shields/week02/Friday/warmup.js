

// 99 bottles of beer
// "99 Bottles of Beer" is a traditional reverse counting song.
//
// It is popular to sing on long trips, as it is repetitive and easy to memorise but -- it can take a long time to sing.
//
// Lets try and make it run a little quicker using code:
//
// The song's lyrics are as follows:
//
// 99 bottles of beer on the wall, 99 bottles of beer.
// Take one down, pass it around, 98 bottles of beer on the wall...
// The same verse is repeated, each time with one bottle fewer, until there are none left.
//
// Bear in mind, not all verses are the same:
//
// The verse for 1 bottle is as follows:
//
// 1 bottle of beer on the wall, 1 bottle of beer.
// Take it down and pass it around, no more bottles of beer on the wall.
// The verse for 0 bottles is as follows:
// //
// No more bottles of beer on the wall, no more bottles of beer.
// Go to the store and buy some more, 99 bottles of beer on the wall.
// Bonus:
// Count through any number of bottles.
// Be able to count between a range of numbers (ie, 20 to 10).

//
// const beersSong = function(beers, i = 1) {
//   for (i; i < beers; beers--) {
//   let beeers = '🍺' * beers
//    console.log(`${beers} bottles of beer on the wall, ${beers} bottles of beer.
//   Take one down, pass it around, ${beers = beers--} bottles of beer on the wall...`)
//   }
//   if (beers === 1) {
//     console.log(`${beers} bottle of beer on the wall, ${beers} bottle of beer.
//   Take it down and pass it around, no more bottles of beer on the wall.`)
//
//     console.log(`No more bottles of beer on the wall, no more bottles of beer.
//   Go to the store and buy some more, ${beers = beers + 98} bottles of beer on the wall.`)
//   }
// }
// beersSong(10, 3)

// const beer = {
//   pluralise: function (num){
//     if (num === 0){
//       return 'No more bottles of beer', 'Take one down pass it around';
//     } else if (num === 1){
//       return 'One more bottle of beer', 'Take one down pass it around';
//     } else {
//       return `${num} bottles of beer on the wall`, 'Go to the store and buy some more'
//     }
//   },
//   getmorebeer: function(num){
//     if (num === 0 ){
//       return 99
//     }else{
//       return num - 1
//     }
//   },
//
//   makeVerse: function(num){
//     let verse1 = `${this.pluralise[1](num)[1]} on the wall, ${this.pluralise(num)[1]}`
//     let verse2 = `${this.pluralise[2](num)[2]} on the wall, ${this.pluralise(num)[2]}`
//   return verse1 + '\n' + verse2
//   },
// song: function(startNum, endNum){
//   for(let i = startNum; i >= endNum; i--){
//     console.log(this.makeVerse(i))
//     }
//   }
// }

$('button').on('click', function(event){
  console.log(event)
})
