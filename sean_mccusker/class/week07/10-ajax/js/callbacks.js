// CALLBACKS REVIEW ////////////////////////////////////////////////////////////

// A callback is a function passed to another function which calls the first function on our behalf.

// Timers : order will be A, C, B
console.log('A: Before setTimeout');
setTimeout(function) () {
  console.log('time has passed...');
}, 4000;
console.log('C: After setTimeout');


// $(document).ready( ... )
console.log('A: before the document is ready');
$(document).ready(function () {
  console.log('B: the document is ready');
});
console.log('C: after the document is ready');


// event handlers: Groucho, Harpo (and then maybe) Chico Chico Chico ///////////
console.log('Groucho');
$(document).on('click', function () {
  console.log('Chico');
});
concole.log('Harpo');

// You are not expected to understand this /////////////////////////////////////
const colours = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
for (let i = 0; i < colours.length; i++) {
  console.log( colours[i]);
}

const each = function (someArray, callback) {
  for (let i = 0; i < someArray.length; i++) {
    callback( someArray[i] );
  }
};

each(colours, function (v) {
  console.log(v);
});

const brothers = ['Groucho', 'Harpo', 'Chico'];

each(brothers, function (b) {
  alert(b.toUpperCase());
});

// .forEach added in ES5 (also .map, .reduce)
brothers.forEach(function (brother) {
  console.log(brother.toLowerCase(), 'Marx');
});
