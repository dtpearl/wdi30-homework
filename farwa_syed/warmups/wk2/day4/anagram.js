// Write a program that, given a word and a list of possible anagrams, selects the anagrams of the given word.
//In other words, given: "listen" and ["enlists" "google" "inlets" "banana"] the program should return "inlets".


const anagram = function (word) {
      let teststr = empty[];
      for(i=0;i<s.length;i++) {
          for(j=i+1;j<s.length+1;j++) {
              teststr.push(s.slice(i, j));
          }
      }
      return teststr;
}

anagram("hi");
}
///Lins Solution
const checkForAnagram = function (word, cadidateWords){
    //check for the length of the entered word
    //split the string to conveert the string to an array split()
    //sort the array sort(
    //
    word = word.split("");
    word = word.sort("");
    word = word.join("");
  }
}

const customSort = function (){
  word = word.split("").sort().join("");
  return word;
}

for (i=0; i<candidateWords.length; i++){
    let candiaite = customSort(candidateWords[i]);
    if (sortedWord === candidate){
        anagram.push(candidateWords[i]);
    }
}
return `The word is ${word} is ${anagrams}`
