const subwayLines = {
  "N": ['Times Square', '34th St', '28th St', '23rd St', 'Union Square', '8th Ave'],
  "L": ['8th Ave', '6th Ave', 'Union Square', '3rd Ave', '1st Ave' ],
  "6": ['Grand Central', '33rd St', '28th Ave', '23rd Ave', 'Union Square', 'Astor Place'],
};

//create a function that figures out the direction of the train line

const directionTest = function (){
  if 
};


//find indexes for each point in the journey.
 //intersection will always be union square, but index will change on different lines.

// go through the possibilities for if you stay on one line.
      //test which direction and what will happen i++ for left to right and i-- from right to left
      // create an empty array so we can push

const trip1 = function (line, start, line2, destination) {

  const intersection = "Union Square"
  const startPoint = subwayLines[line].indexOf(start);
  const endPoint = subwayLines[line2].indexOf(destination);
  const endOfLine1 = subwayLines[line].indexOf(intersection);
  const startOfLine2 = subwayLines[line2].indexOf(intersection);

  const leftToRight = [];
  const rightToLeft = [];
  const leftToRightLine2 = [];
  const rightToLeftLine2 = [];

  if (line === line2) {
    if (startPoint < endPoint) {
      for (let i = startPoint; i <= endPoint; i++) {
        leftToRight.push(subwayLines[line][i]);
      }

      return `Starting from ${ start } you will travel through ${ leftToRight.join(', ') } on line ${ line } to get to ${ destination }`;
      // ^ if lines are the same and going from left to right through the array.

    } else if (endPoint < startPoint) {
      for (let i = startPoint; i >= endPoint; i-- ) {
        rightToLeft.push(subwayLines[line][i]);
      }
      return `Starting from ${ start } you will travel through ${ rightToLeft.join(', ') } on line ${ line } to get to ${ destination }.`;
      // ^ if lines are the same and going from right to left through the array.

    }
  } else if (line !== line2) {
    if (startPoint < endOfLine1) {
      for (let i = startPoint; i <= endOfLine1; i++ ) {
        leftToRight.push(subwayLines[line][i]);
      }

    } if (endOfLine1 < endPoint) {
      for (let i = endPoint; i <= endOfLine1; i++ ) {
        leftToRightLine2.push(subwayLines[line2][i]);
      }
    return `You will travel from ${start} through ${leftToRight.join(', ')} change at Union Square then go through ${leftToRightLine2} until you reach ${destination}.`;
    // ^ if lines are different, and the first part of the trip is left to right and the second part of the trip is left to right.

  } if (endPoint < endOfLine1) {
    for (let i = endOfLine1; i >= endPoint; i-- ){
      rightToLeftLine2.push(subwayLines[line2][i]);
   }
   return `You will travel from ${start} through ${leftToRight.join(', ')} change at Union Square then go through ${rightToLeftLine2} until you reach ${destination}.`;
 // ^ if lines are different and the first part is from left to right but the second part is right to left.

 } else if ( endOfLine1 < startPoint ) {
     for (let i = startPoint; i <= endOfLine1; i++ ) {
       rightToLeft.push(subwayLines[line][i]);
     }
     if ( endOfLine1 < endPoint ) {
       leftToRightLine2.push(subwayLines[line2][i]);
       return `You will travel from ${start} through ${rightToLeft} change at Union Square then go through ${leftToRightLine2} until you reach ${destination}.`
       // ^  if lines are different and the first part is from right to left but the second part is from left to right.

     } else if ( endPoint < endOfLine1 ) {
         for (let i = endofLine1; i >= endPoint; i-- ) {
           rightToLeftLine2.push(subwayLines[line2][i]);
         }
         return `You will travel from ${start} through ${rightToLeft} change at Union Square then go through ${rightToLeftLine2} until you reach ${destination}.`
         //if lines are different and teh first part is from right to left and the second part is from right to left.

       }
      }
   }
  };

//stretch goal: identify the repetition, turn it into a function and call the function either once for same line or twice for different lines.
// this may work properly once the functions are defined outside the final trip function as to avoid repetition/ likliness of mistakes.

//create a bunch of messages that can be called on in each situation
//validate the entry

// go through the possibilities for if you have to change lines
    //test which direction and what will happen i++ for left to right and i-- from right to left



// the possibility of if 'union square' is the starting location - unique situation.

// possibility that the use enters the same destination and the starting point.


// function to test if the train is moving from left to right or right to left.
  // if the index of the start is greater than the index of the end then it will move from right to left.
  // if the index of the end is greater than the index of the start then it will move from left to right.
