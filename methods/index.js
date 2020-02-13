const { bookSchema } = require("../schema/index");

bookSchema.methods.getIfGoodBook = function() {
  return Number(this.rating) > 5
};

// bookSchema.statics.findByStock = function(stock, callback) {
//   this.findByStock({stock: stock}, callback);
// };

// bookSchema.static("findByAuthor", function(author, callback){
//   this.find({author: author}, callback);
// });