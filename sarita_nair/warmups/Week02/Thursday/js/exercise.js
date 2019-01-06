const word = ["ETST","TEST","EAST","ETST","ETSTT"];
let match = [];
const anagram = function(arg){
  //const word = "TEST";
  const arr1 = arg.split('');
  let found = 0;

  for(let i = 0; i<= arr1.length; i++)
  {
    for(let wrd = 0; wrd<= word.length; wrd++)
    {
      found = 0;

      const arr2 = word[wrd].split('');

        for(let j = 0; j<= arr2.length; j++)
        {
          if(arr1[i] === arr2[j])
          found += 1;
          //if(arg.substring(i,i+1)) ===
        }
        if(found === 0)
        {
          return false;
        }
        else {
          match.push(word[wrd]);
        }
  }

  return 'Its a match';
//split // sort// join
}

console.log(`anagram('TEST')`);
//divbody.innerHTML = anagram('ETST');
//divbody.innerHTML = anagram('TEST');
//divbody.innerHTML = anagram('EAST');
//divbody.innerHTML = anagram('ETST');
divbody.innerHTML = anagram('ETSTT');
