// <!-- Write a program that, given a word, computes the scrabble score for that word.
//
// scrabble("cabbage")
// // => 14
// Letter Values
// Letter                           Value
// A, E, I, O, U, L, N, R, S, T       1
// D, G                               2
// B, C, M, P                         3
// F, H, V, W, Y                      4
// K                                  5
// J, X                               8
// Q, Z                                10 -->

const arr1 =['A', 'E','I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'];
const arr2 = ['D', 'G'];
// const B, C, M, P = 3;
// const F, H, V, W, Y = 4;
// const K = 5;
// const J, X = 8;
// const Q, Z = 10;

const scrabble = function ("word"){
    //let word = teststr;
    let counter = 0;
  if()
    for(let i=0; i<arr1.length; i++)
      if(word[i] == arr[i]){
        counter = counter++;
        return counter;
        console.log(`Your score is ${counter}`);
      }
      console.log(`Sorry`);
}

scrabble ("ILL");

--------------------------------------
//string length would be calcaulated same as array length
//word.length
cont scrabble ={
  letterScore: {
    1: ['A',['A', 'E','I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
    2: ['D', 'G'],

  }
}
score: function (word) {
  word=word.toUppercase();
  let sum=0;
  for(let i=0;i<word.length; i++)
    if(this.letterScore[key].includes(letter)){

      sum+=Number(key);
      break;
    }
  }
}
return sum;
}
}

const scrabbleAlt = {
  letterScore: {
    'a' : 1, 'e' : 1, 'i' : 1, 'o' : 1,
     'u' : 1, 'l' : 1, 'n' : 1, 'r' : 1,
     's' : 1, 't' : 1, 'd' : 2, 'g' : 2,
     'b' : 3, 'c' : 3, 'm' : 3, 'p' : 3,
     'f' : 4, 'h' : 4, 'v' : 4, 'w' : 4,
     'y' : 4, 'k' : 5, 'j' : 8, 'x' : 8,
     'q' : 10, 'z' :
  },
}

scoreAlt: function (word) {
    word=word.toLower(word);
    let sum = 0;
    for(let i=0;i<word.length; i++)
      let letter = word[i];

}
