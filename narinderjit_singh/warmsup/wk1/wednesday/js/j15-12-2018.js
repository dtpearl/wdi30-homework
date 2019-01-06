/*

Write a Javascript program that will take a number (eg 28 or 1755 or 9, etc) and output the following:

If the number contains 3 as a factor, output 'Pling'.
If the number contains 5 as a factor, output 'Plang'.
If the number contains 7 as a factor, output 'Plong'.
If the number does not contain 3, 5, or 7 as a factor, output the number as a string.
*/

const Raindrops = function Raindrops(value)
{
    var res = "";

    if((value%3)==0) {
        res+="Pling";
    }
    
    if( (value%5)==0)
    {
        res+="Plang";
    }

    if((value%7)==0)
    {
        res+="Plong";
    }
    if(res.length===0){
        res+=value;
    }

    return res;
}


document.write(Raindrops(28));

//console.log(Raindrops(3));