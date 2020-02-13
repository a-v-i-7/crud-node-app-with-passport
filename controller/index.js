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
    bookName: req.body.data.bookName,
    author: req.body.data.author,
    pages: req.body.data.pages,
    stock: req.body.data.stock,
    rating: req.body.data.rating,
  });

  // Saving the user in the database
  newBook.save(function(err, book) {
    if (err)
      return res
        .status(HttpStatus.NOT_FOUND)
        .json({ message: err });
    res.status(HttpStatus.OK).json({ book });
  });
};

module.exports.fetchBook = (req, res) => {
  console.group(req);
  Book.find({}, (err, books) => {
    if (err) {
      return res.status(HttpStatus.BAD_REQUEST).json({ message: "Internal Error" });
    };
    res.status(HttpStatus.OK).json({books});
  });
};

module.exports.fetchBookById = (req, res, next) => {
  const id = req.params.id;
  Book.findById(id)
    .exec() 
    .then(data => {
      res.status(HttpStatus.OK).json(data);
    })
    .catch(err => {
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
  Book.deleteOne({_id: id})
  .exec()
  .then(result => {
    res.status(200).json(result);
  })
    .catch(err => {
      res.status(HttpStatus.BAD_REQUEST).json({error: err});
    })
}

module.exports.updateBook = (req, res) => {
  id = req.params.id;
  Book.updateOne({_id: id}, {$set: {...req.body.data}})
  .exec()
  .then((data) => {
    res.status(200).json({data});
  })
  .catch((err) => {
    res.status(HttpStatus.BAD_REQUEST).json({err});
  })
}


jsonCopy = (src) => {                    //Function returning a new object copied using src object
  return JSON.parse(JSON.stringify(src));
}
a = {'a': 'qwer', 'b': 'qwqq', 'c': [1,3,4,5], 'd': {'ab': 3, 'bc': 4}}

b = jsonCopy(a);