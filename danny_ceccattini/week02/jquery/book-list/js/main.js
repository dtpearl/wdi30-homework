// console.log('ciao');

/*

The Book List
Keep track of which books you read and which books you want to read!

Create a webpage with an h1 of "My Book List".
Create a new Javascript file and link to it with a script tag at the bottom.
Copy this array of books:
var books = [
  {title: 'The Design of EveryDay Things',
   author: 'Don Norman',
   alreadyRead: false
  },
  {title: 'The Most Human Human',
  author: 'Brian Christian',
  alreadyRead: true
  }];
Iterate through the array of books. For each book, create a p element with the book title and author and append it to the page.
Bonus: Use a ul and li to display the books.
Bonus: add a property to each book with the URL of the book cover, and add an img element for each book on the page.
Bonus: Change the style of the book depending on whether you have read it or not.

*/

var books = [
  {title: 'The Design of EveryDay Things',
   author: 'Don Norman',
   alreadyRead: false,
   bookCover: 'img/everyday-things.jpg',
   url: 'https://www.amazon.com/Design-Everyday-Things-Donald-Norman/dp/1452654123'
  },
  {title: 'The Most Human Human',
  author: 'Brian Christian',
  alreadyRead: true,
  bookCover: 'img/most-human-human.jpg',
  url: 'https://www.amazon.com/Most-Human-Artificial-Intelligence-Teaches/dp/0307476707'
  }];

/////////////////// ADD UNORDERED LIST ////////////////////////
  const $ul = $('<ul class="book-list"></ul>');
  $('body').append($ul);

/////////////////// ITERATE THROUGH BOOKS ARRAY //////////////////////
for (let i = 0; i < books.length; i++) {
    if (books[i].alreadyRead === true) {
      let $li = $('<li><img src="' + books[i].bookCover + '"</img><a href="' + books[i].url + '" target="_blank">This</a><span> is ' + books[i].title + ' by ' + books[i].author + '. A solid read.</span></li>');
      $('ul.book-list').append($li);
    } else if (books[i].alreadyRead === false) {
      let $li = $('<li><img src="' + books[i].bookCover + '"</img><a href="' + books[i].url + '" target="_blank">This</a><span> is ' + books[i].title + ' by ' + books[i].author + '. I am yet to read it.</span></li>');
      $('ul.book-list').append($li);
    };
};


$('li a').css('text-decoration', 'none')//.css('color', 'red');
