const authorSchema = require("../modal/author");
const bookSchema = require("../modal/book");

async function addAuthor(req, res) {
  try {
    const authoreInfo = req.body;
    const author = await authorSchema.create(authoreInfo);
    res.status(200).json({
      success: true,
      message: "added author",
      data: author,
    });
  } catch (error) {
    console.log("error in adding author", error);
    res.status(404).json({
      success: false,
      message: "error in adding author",
    });
  }
}

async function addBook(req, res) {
  try {
    const book = req.body;
    const bookinfo = await bookSchema.create(book);
    res.status(200).json({
      success: true,
      message: "added author",
      data: bookinfo,
    });
  } catch (error) {
    console.log("error in adding author", error);
    res.status(404).json({
      success: false,
      message: "error in adding book",
    });
  }
}

async function getBookById(req, res) {
  try {
    const specificBook = await bookSchema
      .findById(req.params.id)
      .populate("writer");
    res.status(200).json({
      success: true,
      message: "added author",
      data: specificBook,
    });
  } catch (error) {
    console.log("error in getting book with author", error);
    res.status(404).json({
      success: false,
      message: "error in getting book with author",
    });
  }
}

module.exports = { addAuthor, addBook, getBookById };
