let first = 0,sec=0,third =0;
let display = '';
const reversecounting = function(arg){
  console.log(`${arg-1}`);
  /*if(arg-1 < 0)
  {

      first = 99;
      sec = 99;
      third = 98;
      display = 'no more';
      console.log(`${first} bottles of beer on the wall, ${second} bottles of beer.
        Go to the store and buy some more, ${third} bottles of beer on the wall.`);
  }
  else
  {

  }*/
  for(let i=arg;i >= 0; i--)
  {
    //$('#divmsg').html(i);
    //alert(i);
    if(i-1 === 0)
    {
      $('#divmsg').append(`<p>${i} bottles of beer on the wall, ${i} bottles of beer.
        Take it down and pass it around, no more bottles of beer on the wall.</p>`);
      //console.log(`${i} bottles of beer on the wall, ${i} bottles of beer.
        //Go to the store and buy some more, no more bottles of beer on the wall.`);
    }
    else if(i-1 < 0)
    {
      $('#divmsg').append(`<p>No more bottles of beer on the wall, no more bottles of beer.
        Go to the store and buy some more, 99 bottles of beer on the wall.</p>`);
    }
    else{
      $('#divmsg').append(`<p>${i} bottles of beer on the wall, ${i} bottles of beer.
        Take one down, pass it around, ${i-1} bottles of beer on the wall...</p>`);

    }

  }

};
const beer = {
  funct1 : function(num){
    if(num === 0){
      return 'no more';
    }
    else if{
      return '1 bottle';

    }
    else {
      return num;
    }
  };
  action : function(num){
    if(num ===0){
      return 'go to store'
    }
    else if{
      return '1 bottle';

    }
    else {
      return num;
    }
  }
  getmoreBeer: function(num){
    if(num === 0)
    {
      return 99;
    }
    else{
      return num - 1;
    }
  };
  constructstring : function(){
    let msg = `${funct1(num) on the wall, ${action} + ${getmoreBeer} bottles of beer on the wall.`
  }
  song : function(){
    for(let i=arg;i >= 0; i--)
    {
      
    }
  }
}
//$(each())
reversecounting(10);
