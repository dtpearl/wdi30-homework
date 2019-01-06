/*

Badger's Revenge
The names of those who are witnessed clapping Badger more than twice in the first
four days of any one week will go into a draw. On Friday morning, a random name
will be drawn from that list and the 'winner' will be forced to deliver the
solution to Friday's warmup.

Create a program that Badger can use for this task - ideally, you should create
an object (revengeOfBadger) to do this, but if you can get it working using
standalone functions, that's cool.

Your program should:

Track how many times each student in the class has clapped this week
(just make up the numbers);
Include a collection of candidates for the Friday draw
(ie, a list of names of people who have clapped Badger more than twice that week);
Pick a random student to deliver the solution to Friday's warmup.
If no one has clapped enough that week, the program should indicate that Badger
has to do his own damned warmup.

*/

//console.log(`Is there anybody out there?`);

  const revengeOfBadger = {
    students: {
      'Homer': 9,
      'Marge': 4,
      'Bart': 7,
      'Lisa': 6,
      'Maggie': 3,
      'Ralph': 1,
      'Milhouse': 1
    },
    shortList: [],
    getStudentList: function() {
      this.shortList = [];
      for (let key in this.shortList) {
        if (this.students[key] > 2) {
      }
  }
  console.log(this.shorthList); //
  return this.shortList.length // 3
},
draw: function() {
  let winner = "Badger";
  let numberOfCandidates = this.getStudentList();
  if (numberOfCandidates > 0) {
    let randy = (Math.random() * numberOfCandidates);
    winner = this.shortList[randy];
  }
  return `winner is ${ winner }`;
}
}
