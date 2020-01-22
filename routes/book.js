var express = require('express');
var router = express.Router();

router.get('/search/:id', function (req, res, next) {
  console.log(req.params.id)
res.status(200).json({'id': '1', 'author': 'J. K. Rowling', 'book': 'Harry Potter'});

});

router.get('/add', function(req, res, next) {
  res.render('addBook');
})

router.get('/add', function (req, res, next) {
  console.log(req.params);
  console.log(req.body);
  res.status(200).json('message saved successfully');
});

module.exports = router;