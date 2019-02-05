// Define a function max() that takes two numbers as
// arguments and returns the largest of them. Use the
// if-then-else construct available in Javascript.


function max(firstNum, secondNum){

    if (firstNum > secondNum) {
       console.log(firstNum + " is larger than " + secondNum);
    } else {
        console.log(firstNum + " is less than " + secondNum);
    }
    return;

}

// Lets set two numbers
max(14,23);
