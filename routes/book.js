var express = require('express');
var router = express.Router();
const bookController = require('../controller/index')

router.get('/search/:id', function (req, res, next) {
  console.log(req.params.id)
res.status(200).json({'id': '1', 'author': 'J. K. Rowling', 'book': 'Harry Potter'});

});

router.get('/add', function(req, res, next) {
  res.render('addBook');
});

router.post('/add', bookController.createBook);

router.get('/fetch', bookController.fetchBook);

router.get('/fetchBook', bookController.fetchBookById)

router.get('/fetchGoodBooks', bookController.fetchGoodBooks)

router.delete('/remove/:bookId', bookController.deleteBook)  

router.patch('/update/:bookId', bookController.updateBook)

module.exports = router;