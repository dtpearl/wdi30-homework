/*
Write a function filterLongWords that takes an array of words and an number i
 and returns the array of words that are longer than i.
*/


let germanWords = ["gut", "weltanschaung", "Rindfleischetikettierungsüberwachungsaufgabenübertragungsgesetz", "monchengladcbach"];


const filterLongWords = function (array, number) {
  //let longest = 0;
  let longWord = null;
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (number < array[i].length) {
      //longest = array[i].length;
      longWord = array[i];
      console.log(newArray.push(longWord));
    }
  }
  return newArray;
}

console.log(filterLongWords(germanWords, 4));
