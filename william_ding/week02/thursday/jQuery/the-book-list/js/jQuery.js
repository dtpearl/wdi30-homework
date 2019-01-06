var books = [
  {title: 'The Design of EveryDay Things',
   author: 'Don Norman',
   alreadyRead: false
  },
  {title: 'The Most Human Human',
  author: 'Brian Christian',
  alreadyRead: true
  }];

// const bookList = document.createElement("ul");
// for (let i = 0; i < books.length; i++) {
//   const p = document.createElement("li");
//   p.innerHTML = `${ books[i].title } by ${ books[i].author }.`;
//
//   if(books[i].alreadyRead) {
//     p.className = "read";
//   }
//
//   bookList.appendChild(p);
// };
// document.body.appendChild(bookList);

const bookList = $("<ul></ul>");
$(books).each(function (index, element) {
  const li = $(`<li>${ element.title } by ${ element.author }.</li>`);
  if(element.alreadyRead) {
    $(li).addClass("read");
  }
  $(bookList).append(li);
})

$("body").append(bookList);
