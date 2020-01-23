const { bookSchema } = require("../schema/index");

bookSchema.methods.getIfGoodBook = function() {
  console.log(this);
  return Number(this.rating) > 5
};

userSchema.statics.findByStock = function(stock, callback) {
  this.findByStock({stock: stock}, callback);
};

userSchema.static("findByAuthor", function(author, callback){
  this.find({author: author}, callback);
});