const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookSchema = new Schema({
  bookname: String,
  author: String,
  pages: String,
  stock: Number,
  rating: String
});

module.exports.bookSchema = bookSchema;

const Book = mongoose.model("Book", bookSchema);

module.exports.Book = Book;