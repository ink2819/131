const books = [
    {title: "A Book", publishingYear: "1998"},
  ]
  
  exports.all = books

  exports.add = (book) => {
    books.push(book);
  };