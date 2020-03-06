var express = require('express');
var router = express.Router();
const bookController = require('../controller/index')
const passport = require('passport');

router.get('/search/:id', function (req, res, next) {
res.status(200).json({'id': '1', 'author': 'J. K. Rowling', 'book': 'Harry Potter'});

});

router.get('/add', function(req, res, next) {
  res.render('addBook');
});

router.post('/add', bookController.createBook);

router.get('/fetch',passport.authenticate('jwt', {session: false}), bookController.fetchBook);

router.get('/fetchBook/:id', bookController.fetchBookById)

router.get('/fetchGoodBooks', bookController.fetchGoodBooks)

router.delete('/remove/:bookId', bookController.deleteBook)  

router.patch('/update/:id', bookController.updateBook)

router.get('/time', (req, res) => {
  res.status(200).json({time: (new Date()).toLocaleString()})
});

router.get('*', (req, res) => {
  res.status(404).json({error:'API not found'});
})

module.exports = router;