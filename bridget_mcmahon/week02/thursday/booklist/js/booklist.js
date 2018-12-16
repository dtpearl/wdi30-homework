/*

Iterate through the array of books. For each book, create a p element with the book title and author and append it to the page.
Bonus: Use a ul and li to display the books.
Bonus: add a property to each book with the URL of the book cover, and add an img element for each book on the page.
Bonus: Change the style of the book depending on whether you have read it or not.
*/

var books = [
  {title: 'The Design of EveryDay Things',
   author: 'Don Norman',
   alreadyRead: false
  },
  {title: 'The Most Human Human',
  author: 'Brian Christian',
  alreadyRead: true
},
];

$('h1').after('<ul>');

$.each(books, function(key, value) {
  const $info = $('<li></li>').appendTo('ul');
  $info.html(`<strong>${ value.title }</strong> by ${ value.author }`);

  if (value.alreadyRead === true) {
    $info.addClass("read");
  }
});
