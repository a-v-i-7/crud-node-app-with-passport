/**
 * Mongoose User model.
 */
const { Book } = require("../schema/index");

const HttpStatus = require("http-status-codes");

/*------------------------------CREATE OPERATIONS--------------------------*/

/**
 * Creating the new book
 */
module.exports.createBook = (req, res) => {
  // Creating a user object from frontend data
  const newBook = new Book({
    bookname: req.body.firstname,
    author: req.body.author,
    pages: req.body.pages,
    stock: req.body.stock,
    rating: req.body.rating,
  });

  // Saving the user in the database
  newBook.save(function(err, book) {
    if (err)
      return res
        .status(HttpStatus.NOT_FOUND)
        .json({ message: "book cannot be created" });
    res.status(HttpStatus.OK).json({ book });
  });
};

module.exports.fetchBook = (req, res) => {
  Book.find({}, (err, books) => {
    if (err) {
      return res.status(HttpStatus.BAD_REQUEST).json({ message: "Internal Error" });
    };
    res.status(HttpStatus.OK).json({books});
  });
};

module.exports.fetchBookById = (req, res, next) => {
  const id = req.body.bookId;
  console.log(id);
  Book.findById(id)
    .exec()
    .then(data => {
      console.log(data);
      res.status(HttpStatus.OK).json(data);
    })
    .catch(err => {
      console.log(err);
      res.status(HttpStatus.BAD_REQUEST).json({error: err});
    });
};

module.exports.fetchGoodBooks = (req, res) => {
  Book.find()
  .exec()
  .then(data => {
    res.status(HttpStatus.OK).json(data)})
  .catch((err) => {
    res.status(HttpStatus.BAD_REQUEST).json({err});
  })
}

module.exports.deleteBook = (req, res) => {
  const id = req.params.bookId;
  console.log(id);
  Book.remove({_id: id})
  .exec()
  .then(result => {
    res.status(200).json(result);
  })
    .catch(err => {
      res.status(HttpStatus.BAD_REQUEST).json({error: err});
    })
}

module.exports.updateBook = (req, res) => {
  id = req.params.bookId;
  Book.update({_id: id}, {$set: req.body})
  .exec()
  .then((data) => {
    res.status(200).json({data});
  })
  .catch((err) => {
    res.status(HttpStatus.BAD_REQUEST).json({err});
  })
}