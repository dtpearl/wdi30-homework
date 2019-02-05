// const books = [
//   {title: 'The Design of EveryDay Things', author: 'Don Norman', alreadyRead: false},
//   {title: 'The Most Human Human', author: 'Brian Christian', alreadyRead: true}
// ];
//
// const list = document.createElement('ul');
// for (let i = 0; i < books.length; i++) {
//   const book = books[i];
//   const info = document.createElement('li'); // Detached DOM node
//   info.innerHTML = `<strong>${ book.title }</strong> by <em>${ book.author }</em>`;
//
//   if (book.alreadyRead) {
//     info.className = 'read';
//   }
//
//   list.appendChild(info);
// }
// document.body.appendChild(list);
//
//
// Keep track of which books you read and which books you want to read!
//
// Create a webpage with an h1 of "My Book List".
// Create a new Javascript file and link to it with a script tag at the bottom.
// Copy this array of books:
// var books = [
//   {title: 'The Design of EveryDay Things',
//    author: 'Don Norman',
//    alreadyRead: false
//   },
//   {title: 'The Most Human Human',
//   author: 'Brian Christian',
//   alreadyRead: true
//   }];
// Iterate through the array of books. For each book, create a p element with the book title and author and append it to the page.
// Bonus: Use a ul and li to display the books.
// Bonus: add a property to each book with the URL of the book cover, and add an img element for each book on the page.
// Bonus: Change the style of the book depending on whether you have read it or not.

const books = [
  {title: 'The Design of EveryDay Things',
   author: 'Don Norman',
   alreadyRead: false
  },
  {title: 'The Most Human Human',
  author: 'Brian Christian',
  alreadyRead: true
  }];
  const list = $('<ul>');
  for (var i = 0; i < books.length; i++) {
    let book = books[i];

    const elem = $('<li>').html(`book title ${book.title} and author ${book.author}`);
    list.append(elem);
    if (book.alreadyRead) {
      elem.css("color", "green");
    } else elem.css("color", "red");

  }
$('body').append(list);
