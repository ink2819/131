const books = [
    {title: "Leviathan Wakes", publishingYear: "2011"},
    {title: "Columbus Day", publishingYear: "2016"},
    {title: "The Wandering Earth", publishingYear: "2019"},
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
  
  