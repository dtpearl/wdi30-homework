/*

99 bottles of beer
"99 Bottles of Beer" is a traditional reverse counting song.

It is popular to sing on long trips, as it is repetitive and easy to memorise
but -- it can take a long time to sing.

Lets try and make it run a little quicker using code:

The song's lyrics are as follows:

99 bottles of beer on the wall, 99 bottles of beer.
Take one down, pass it around, 98 bottles of beer on the wall...
The same verse is repeated, each time with one bottle fewer, until there are none left.

Bear in mind, not all verses are the same:

The verse for 1 bottle is as follows:

1 bottle of beer on the wall, 1 bottle of beer.
Take it down and pass it around, no more bottles of beer on the wall.
The verse for 0 bottles is as follows:

No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.

Bonus:
Count through any number of bottles.
Be able to count between a range of numbers (ie, 20 to 10).

*/

console.log(`Is there anybody out there?`);


/* Pseudo code
1. Need to have verses 0f  99 bottles of beer that keeps going down by one each verse.
2. So 99 bottles of beer on the wall, 99 bottles of beer, take one down and pass
it around, 98 bottles of beer on the wall.
3. This repeats until we get to the last bottle of beer.
4. 1 bottle of beer on the wall, 1 bottle of beer. Take it down and pass it around,
no more bottles of beer on the wall.
5. Then the last verse is No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.

What do I need?
1. I need a function for the song.
2.
*/

// Version 1
const bottlesOfBeer = function(num){
  for( let i = num; i >= 0; i -- ){
    if(i === 0){
      console.log('No more bottles of beer on the wall, no more bottles of beer.');
      console.log('Go to the store and buy some more, 99 bottles of beer on the wall.');
    } else if ( i === 1) {
      console.log('1 bottle of beer on the wall, 1 bottle of beer.');
      console.log('Take it down and pass it around, no more bottles of beer on the wall.');
    } else {
      console.log(`${i} bottles of beer on the wall, ${i} bottles of beer.`);
      console.log(`Take one down, pass it around, ${ i - 1} bottles of beer on the wall.`);
    }
  }
};

// Version 1

// const beer = {
//   pluralise: function(num){
//     if (num === 0) {
//       return 'No more bottles of beer';
//     } else if (num == 1){
//       return '1 bottle of beer';
//     } else {
//       return `${num} bottles of beer`;
//     }
//   },
//    action: function(num){
//     if (num === 0) {
//       return 'Go to the store and buy some more';
//     } else if (num === 1){
//       return 'Take it down and pass it around';
//     } else {
//       return 'Take one down, pass it around';
//     }
//   },
//    getMoreBeer: function(num){
//     if (num === 0) {
//       return 99;
//     } else {
//       return num - 1;
//     }
//   },
//    makeVerse: function(num){
//     let verse1 = `${ this.pluralise(num) } on the wall, ${ this.pluralise(num) }`;
//     let verse2 = `${this.action(num)}, ${ this.pluralise( this.getMoreBeer(num) ) } on the wall`;
//     return verse1 + '\n' + verse2;
//   },
//    //e.g. startNum: 20, endNum: 0
//   song: function(startNum, endNum){
//     for( let i = startNum; i >= endNum; i -- ){
//       console.log( this.makeVerse(i) );
//     }
//   }
// };
