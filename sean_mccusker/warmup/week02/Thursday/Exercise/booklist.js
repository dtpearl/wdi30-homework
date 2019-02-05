const books = [
  {title: 'The Design of EveryDay Things', author: 'Don Norman', alreadyRead: false},
  {title: 'The Most Human Human', author: 'Brian Christian', alreadyRead: true}
];




const list = document.createElement('ul');
  for (let i = 0; i < books.length; i++) {
    const book = books[i];
    const info = document.createElement('li');
    info.innerHTML = `${ book.title } by ${ book.author }`;
    //document.body.appendChild(info);
    if (book.alreadyRead) {
      info.class ClassName = 'read';     
        }
      }
    }
  }
list.appendChild(info);
}
document.body.appendChild(list);
