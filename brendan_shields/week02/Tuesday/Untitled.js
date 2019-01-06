var alphabet = {
  letterscore: {
  1: ['a','e' "I", "O", "U", "L", "N", "R", "S", "T"]
  2: ['d', 'g']
  3: ['b', 'c', 'm', 'p']
  4: ['f', 'h', 'v', 'w','y']
  5: ['k',]
  8: ['j','x']
  10: ['q','z']}
,
{
    score: function(word){
    let sum = 0;

    for (let i = 0; i < word.length; i++){
      let letter = word[i];

      for (let key in this.letterScore){
        if( this.letterScore[key].includes(letter)) {
          sum += parseInt(key);
        }
      }
    }
    return sum
  }
}


}
