const express = require("express");
const {
  addAuthor,
  addBook,
  getBookById,
} = require("../controller/author-controller");
const port = express.Router();

port.post("/add", addAuthor);
port.post("/addBook", addBook);
port.get("/get/:id", getBookById);

module.exports = port;
