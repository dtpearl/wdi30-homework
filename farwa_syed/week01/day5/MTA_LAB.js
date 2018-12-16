let LineN = [ "Times_Square", "34th", "28N", "23rdN", "Union_Square", "8N"];
let LineL = ["8L", "6th", "Union_Square", "3rd", "1st"];
let Line6 = ["Grand Central", "33rd", "28th6", "23rd6", "Union_Square", "Astor Place"];


const centralStation = "Union_Square";
//let departureStation = deptst;
const mta = function (line, destst, departureStation) {
  if (departureStation === LineN){
    // for(let i=0; i<LineN.length; i++)
    //   if (departureStation === LineN[i]) {
    //     let numOfStations = LineN.indexOf(centralStation) - LineN.indexOf(departureStation);
    //       if (numOfStations > 0) {
    //         console.log(`Your destination station is ${numOfStations} stations going forward from Union Square on line N.`);
    //       } else if (numOfStations < 0) {
    //         numOfStations = Math.abs(numOfStations);
            console.log( `Number of stations to travel ${numOfStations}` );

          }
      //}
    } else {
      console.log(`test`);
    }

//}
//notes from demos

//current station =! centralStation or keep the true or false statement to check if the central station index matches the entered station or not.
//break in to small functions to incorp in to one big function
//function for each line..join string method for strings*
//------------ 
//const mta = function (line, destst, departureStation) {
//     if (departureStation === LineN){
//         for(let i=0; i<LineN.length; i++)
//             if (departureStation === LineN[i]){
//               let numOfStations = LineN.indexOf(centralStation) - LineN.indexOf(departureStation);
//                 if (numOfStations > 0){
//                   } else if (numOfStations < 0) {
//                     numOfStations = Math.abs(numOfStations);
//                     console.log(`Your destination station is ${numOfStations} stations going forward from Union Square on line N.`);
//                   }
//                   console.log( `Number of stations to travel ${numOfStations}` );
//                 }
//               }
//         } else if (departureStation === LineL) {
//               console.log(`test`);
//           }
//         }
//       }
//
//         console.log(`lineL`);
mta("LineN", "Union_Square", "Times_Square");
mta("LineL", "Union_Square", "28N");
mta("LineN", "Union_Square", "8N");
