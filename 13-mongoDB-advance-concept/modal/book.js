const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  bookName: String,
  writer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "author",
  },
});

module.exports = mongoose.model("book", bookSchema);
