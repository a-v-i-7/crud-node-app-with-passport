const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookSchema = new Schema({
  author: String,
  pages: String,
  stock: Number,
  rating: String,
  bookName: {
    type: String, 
    required: true
  }
});

module.exports.bookSchema = bookSchema;

const Book = mongoose.model("Book", bookSchema);
module.exports.Book = Book;

const userSchema = new Schema({
username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  },
  firstname: {
    type: String,
    required: true,
      },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  address: String,
  city: String,
  lastlogin: Date,
});

module.exports.userSchema = userSchema;

const USER = mongoose.model("User", userSchema);

module.exports.USER = USER;
