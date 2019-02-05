let count;
const song = function (count) {

    if (count > 1){
      count = count -1;
      console.log(`${count} bottles of beer on the wall, 99 bottles of beer.
Take one down, pass it around, 98 bottles of beer on the wall...`);
}
      if(count === 0){
        console.log(`No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.`);
      }
      if (count === 1){
        console.log(`1 bottle of beer on the wall, 1 bottle of beer.
Take it down and pass it around, no more bottles of beer on the wall.`);
      }
      return count;
  }



---------------------------------------------
const bottleOfBeer = function (num) {
    for (let i=num; i>=0; i--){
      if(i===0){
        console.log(`No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.`);
} else if (i === 1){
    console.log(`1 bottle of beer on the wall, 1 bottle of beer.
Take it down and pass it around, no more bottles of beer on the wall.`);
} else {
  console.log(`1 bottle of beer on the wall, 1 bottle of beer.
Take it down and pass it around, no more bottles of beer on the wall.`);
}
    }

}
---------------------------------
// with onject
const beer = {
  pluralise: function (num) {
    if(num === 0) {
    return `No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.`;
} else if (num === 1){
  return `1 bottle`;
} else {
  return `${num} bottles of beer`;
}
}

action: function (num){
  if (num === 0) {
    return `Go to store and buy some more`;
  } else if (num === 1){
    return `Take it down and pass it around`;
  } else {
    return `Take one down, pass it around`;
  }
}

getMoreBeer: function (num){
  if (num === 0){
    return 99;
  } else {
    return num -1;
    }
}
makeVerse: function (num){
  let verse1 = `${this.pluralise(num)} on the wall. ${this.pluralise(num)}`;
  let verse2 = `${this.action(num)}, ${this.pluralise(this.getMoreBeer)} on the wall`;
  return verse1 + '\n' + verse2;
}

song: function(startNum, endNum){
  for (let i=startNum; i>=endNum; i--)
  console.log( this.makeVerse(i) );
}
