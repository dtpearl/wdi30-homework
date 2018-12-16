//Declarations for all global variables begins
const Lines = [
  {
    "N" : ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    "L" : ["8th", "6th", "Union Square", "3rd", "1st","28th"],
    "6" : ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
  }];

const intersect = "Union Square";
var stops = 0;
let line1StrIndex = 0,line1DestIndex = 0,line2StrIndex = 0,line2DestIndex = 0;
let result = '';
//Declarations for all global variables ends



//get All Routes for Line1 start
const getRouteOneDetails = function(line1){
  if(line1StrIndex > line1DestIndex)
  {
    //reverse
    traverseRvs(line1StrIndex-1,line1DestIndex,Lines[0][line1]);
  }
  else {
    //normal
    traverseFwd(line1StrIndex+1,line1DestIndex,Lines[0][line1]);
  }
};
//get All Routes for Line1 end
//get All Routes for Line2 start
const getRouteTwoDetails = function(line2){
  result += `Change at ${intersect}\n`;
  result += `Your journey continues through the following stops in ${line2} line:\n`;
  if(line2StrIndex > line2DestIndex)
  {
    //reverse
    traverseRvs(line2StrIndex-1,line2DestIndex,Lines[0][line2]);
  }
  else {
    //normal
    traverseFwd(line2StrIndex+1,line2DestIndex,Lines[0][line2]);
  }
};
//get All Routes for Line2 end
//Actual Function for Displaying the Travel Routes from Start to Destination begins
const getLine = function(line1,route1,line2,route2){
  //const sourceStrIndex = 0,destStrIndex = ,sourcelstIndex = 0,destlstIndex = 0;
  line1StrIndex = Lines[0][line1].indexOf(route1);
  line1DestIndex = Lines[0][line1].indexOf(intersect);
  line2StrIndex = Lines[0][line2].indexOf(intersect);
  line2DestIndex = Lines[0][line2].indexOf(route2);
  if(line1 === line2)
  {
    line1DestIndex = line2DestIndex;
  }

  result += `You must travel through the following stops on the ${line1} line:\n`;

  getRouteOneDetails(line1);

  if(line1 !== line2)
  {
    getRouteTwoDetails(line2);
  }
  result += `Total ${stops} stops in all.`;
  return result;
};
//Actual Function for Displaying the Travel Routes from Start to Destination ends

//Function forward traversal begins
const traverseFwd = function(line1StrIndex,line1DestIndex,arrLine){
  for(let i = line1StrIndex; i <= line1DestIndex ; i++)
  {
    result += `${arrLine[i]}\n`;
    stops++;
  }
};
//Function forward traversal ends

//Function  backward traversal begins
const traverseRvs = function(line1StrIndex,line1DestIndex,arrline){
  for(let i = line1StrIndex; i >= line1DestIndex ; i--)
  {
    result += `${arrline[i]}\n`;
    stops++;
  }
};
//Function  backward traversal ends

//Validations for checking Lines and Routes begins
const valLines = function(line){
  if(Lines[0][line] === undefined)
  {
    return `Line ${line} does not exist.`;
  }
  else {
    return true;
  }
};
const valRoutes = function(line,route){
  if(Lines[0][line].indexOf(route) === -1)
  {
    return `The route ${route} does not exist is Line ${line}.`;
  }
  else {
    return true;
  }
};
//Validations for checking Lines and Routes ends

//6,Test,L,8th
//N,28th,L,8th
const CallfunctionSubway = function(){
  let StrLine = prompt("Please Enter your boarding line:", "");
  let valresult = valLines(StrLine);
  if(valresult === true)
  {
    let Strpoint = prompt("Please Enter your boarding point:", "");
    valresult = valRoutes(StrLine,Strpoint);
    if(valresult === true)
    {
      let DestLine = prompt("Please Enter your destination line:", "")
      valresult = valLines(DestLine);
      if(valresult === true)
      {
        let Destpoint = prompt("Please Enter your destination point:", "")
        valresult = valRoutes(DestLine,Destpoint);
        if(valresult === true)
        {
          console.log(`${getLine(String(StrLine),String(Strpoint),String(DestLine),String(Destpoint))}`);
        }
      }
    }
  }
  if(valresult !== true)
    console.log(`${valresult}`);
};
CallfunctionSubway();
//CallFunction
//var input = prompt("Where do you want to go?:", "").split(',');
/*
let StrLine = prompt("Please Enter your boarding line:", "");
let Strpoint = prompt("Please Enter your boarding point:", "")
let DestLine = prompt("Please Enter your destination line:", "")
let Destpoint = prompt("Please Enter your destination point:", "")

//console.log(StrLine);
if(StrLine !== null && Strpoint !== null && DestLine !== null && Destpoint !== null)
console.log(`${valLines(String(StrLine),String(Strpoint),String(DestLine),String(Destpoint))}`);
*/
//valLines(input[0],input[1],input[2),input[3]);
//Validations for checking Lines and Routes begins
/*const valLines = function(Line1,route1,Line2,route2){

  if(Lines[0][Line1] === undefined)
  return `Line ${Line2} does not exist.`;
  if(Lines[0][Line1] === undefined)
  return `Line ${Line2} does not exist.`;

  line1StrIndex = Lines[0][Line1].indexOf(route1);
  line2DestIndex = Lines[0][Line2].indexOf(route2);

  if(line1StrIndex === -1)
  return `The route ${route1} does not exist is Line ${Line1}.`;
  if(line2DestIndex === -1)
  return `The route ${route2} does not exist is Line ${Line2}.`;
  return getLine(Line1,route1,Line2,route2);
};*/
//Validations for checking Lines and Routes ends
