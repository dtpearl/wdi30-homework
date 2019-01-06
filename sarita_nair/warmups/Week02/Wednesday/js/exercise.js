/*

Write a program that, given a word, computes the scrabble score for that word.

scrabble("cabbage")
// => 14
Letter Values
Letter                           Value
A, E, I, O, U, L, N, R, S, T       1
D, G                               2
B, C, M, P                         3
F, H, V, W, Y                      4
K                                  5
J, X                               8
Q, Z                               10
Extensions
You can play a :double or a :triple letter.
You can play a :double or a :triple word.
*/

const scrabble = {
  letterscore : {
    1 : ['A', 'E', 'I', O, U, L, N, R, S, T],
    2 : [D, G],
    3 : [B, C, M, P],
    4 : [F, H, V, W, Y],
    5 : [K],
    6 : [J, X],
    7 : [Q, Z]
  },

  score : function(key){
    word = word.toUpperCase();
    let sum = 0;
    for(let i=0; i< word.length; i++)
    {
      let letter = word[i];
      for(let key in thi.letterScore)
      {
        if(this.letterScore[key].include(letter))
        {
          sum += Number(key);
          //break; ///check
        }
      }
    }
    return sum;
  }
};

scoreall : function(word){
  word = word.tolowercase
}
const val1 = scrabble.getscrable("A");
console.log(`${val1}`);
