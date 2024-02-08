const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  const books = [
    "James S. A. Corey", "Craig Alanson", "Cixin Liu"
  ]
  res.render('books/index', { title: 'BookedIn || Books', books: books });
});

module.exports = router;