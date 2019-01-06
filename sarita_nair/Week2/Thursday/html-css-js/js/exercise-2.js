var books = [
  {title: 'The Design of EveryDay Things',
   author: 'Don Norman',
   alreadyRead: false
  },
  {title: 'The Most Human Human',
  author: 'Brian Christian',
  alreadyRead: true
  }];

  /*
  const imgel = document.createElement('ul');

  for(let licnt=0; licnt<=books.length; licnt++)
  {
    const liinfo = document.createElement('li');
    liinfo.innerHTML = ``books.title
  }
*/
$("body").append('<ul>');
$.each(books, function( key, value ) {

  $("body").append('<li><p>Title: ' + value.title + ' | Author: ' + value.author + '</p></li>');
  console.log('Title: ' + value.title + ' | Author: ' + value.author);
});
$("body").append('</ul>');
