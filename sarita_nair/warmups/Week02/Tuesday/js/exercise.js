/*
The names of those who are witnessed clapping Badger more than twice in the first four days of any one week will go into a draw. On Friday morning, a random name will be drawn from that list and the 'winner' will be forced to deliver the solution to Friday's warmup.

Create a program that Badger can use for this task - ideally, you should create an object (revengeOfBadger) to do this, but if you can get it working using standalone functions, that's cool.

Your program should:

Track how many times each student in the class has clapped this week (just make up the numbers);
Include a collection of candidates for the Friday draw (ie, a list of names of people who have clapped Badger more than twice that week);
Pick a random student to deliver the solution to Friday's warmup.
If no one has clapped enough that week, the program should indicate that Badger has to do his own damned warmup.
*/
/*
revengeOfBadger = {
students: {
"Alex" : 1,
"Mark" : 3,
"Daisy": 2
},
shortlist : [],
getstudentsList:function(){
this.student.shortlist=[];
for(let key in this.students){
  if(this.students[key] > 2){
  this.shortlist.push(key);
}
}
console.log(this.shortlist);
return this.shortlist.length;
}
,
*/
const revengeOfBadger = function(m,t,w,th,f){
  return {
    Monday : m,
    Tuesday : t,
    Wednesday : w,
    Thursday : th,
    Friday : f
  }
};

const val = revengeOfBadger(["test1","test2"],["test1","test3"],["test1","test3"],["test1","test3"],["test1","test3"]);

for(let i = 0; i <= val.Monday.length - 1; i++)
{
  for(let j = 0; j <= val.Tuesday.length - 1; j++)
  {

    if(val.Monday[i] === val.Tuesday[j])
    {

    }
    for(let k = 0; k <= val.Wednesday.length - 1; k++)
    {
      console.log(val.Monday[i]);

      for(let l = 0; l <= val.Thursday.length - 1; l++)
      {
        console.log(val.Monday[i]);

        for(let m = 0; m <= val.Friday.length - 1; mFriday++)
        {
          console.log(val.Monday[i]);

        }
      }
    }
  }
}
//console.log(val);
