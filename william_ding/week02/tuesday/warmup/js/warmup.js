/*
Badger's Revenge
The names of those who are witnessed clapping Badger more than twice in the first four days of any one week will go into a draw. On Friday morning, a random name will be drawn from that list and the 'winner' will be forced to deliver the solution to Friday's warmup.

Create a program that Badger can use for this task - ideally, you should create an object (revengeOfBadger) to do this, but if you can get it working using standalone functions, that's cool.

Your program should:

Track how many times each student in the class has clapped this week (just make up the numbers);
Include a collection of candidates for the Friday draw (ie, a list of names of people who have clapped Badger more than twice that week);
Pick a random student to deliver the solution to Friday's warmup.
If no one has clapped enough that week, the program should indicate that Badger has to do his own damned warmup.
*/

const revengeOfBadger = {
  clappingRecord: {Jack: 30, Adam: 2, Emily: 3, Guanhua: 0, Jane:1, Lee: 20, Gareth: 2, Spencer: 5, Alex: 4,},
  pickSomeone : function (obj = this.clappingRecord ) {
    const drawPool = [];
    const keys = Object.keys(obj);
    const values = Object.values(obj);
    let theGuy;
    for (i = 0; i < values.length; i++) {
      if (values[i] >= 2) {
        drawPool.push(keys[i]);
      }
    }
    if (drawPool.length >= 1) {
      theGuy = drawPool[Math.round(Math.random() * (drawPool.length - 1))];
      console.log(theGuy);
    } else {
      console.log("Badger");
    }
  },
}
