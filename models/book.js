const books = [
    {title: "A Book", publishingYear: "1998"},
  ]
  
  exports.all = books

  exports.add = (book) => {
    books.push(book);
  };

  exports.get = (idx) => {
    return books[idx];
  };

  exports.upsert = (book) => {
    if (book.id) {
      exports.update(book);
    } else {
      exports.add(book);
    }
  };
  
  exports.update = (book) => {
    books[book.id] = book;
  }
  
  