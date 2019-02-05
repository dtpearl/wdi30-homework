let LineN = [ "Times_Square", "34th", "28N", "23rdN", "Union_Square", "8N", "test"];
let LineL = ["8L", "6th", "Union_Square", "3rd", "1st"];
let Line6 = ["Grand Central", "33rd", "28th6", "23rd6", "Union_Square", "Astor Place"];

let i;
let main;
let num;
let j;
let des;
let beg;
let destin;
let destination;

//const train = function(currentline, startst, destst) {
//lets decide the line
//linear calls on array
const train = function(currentline, startst, destst) {
      main = LineN.indexOf("Union_Square");//4
      for ( i = 0; i < LineN.length; i++) {
        if(startst == LineN[i] ){
          beg = i;//1
      //   console.log(beg);
        }
      }
      for(j=0; j< LineN.length; j++){
        if(destst == LineN[j] ){
          des = j;//3
        // console.log(des);
        }
      }
        num = des - beg;//diff of the num of the stations - 2

        destin = beg + num;
        destination = LineN[destin];
        main = destin - main;
        //---------moving forward
        if (main>0){
          console.log(`your destination,  ${destst}  is on same line towards Union Sq going ${main} station ahead from Un.Sq`);
        }
        //---------moving backward
        if (main<0){
          //main = destin - main;//3-4=-1
          main = Math.abs(main);//convert it to +ve num
          //console.log(main2);
          console.log(`your destination, ${destst} is on same line moving ${main} station(s) backwards from Union Sq.`);

        }
      }
train("N", "28N", "8N");
train("N", "23rdN", "test");

train("N", "Times_Square", "28N");
train("N", "34th", "23rdN");
