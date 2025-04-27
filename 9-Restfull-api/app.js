const express = require("express");
const app = express();
const port = 3000;

const products = [
  {
    id: 1,
    product: "book 1",
  },
  {
    id: 2,
    product: "book 2",
  },
  {
    id: 3,
    product: "book 3",
  },
  {
    id: 4,
    product: "book 4",
  },
];
//middleware
app.use(express.json());
//home page
app.get("/", (req, res) => {
  res.json({
    message: "hallo every one from home pages",
  });
});
//get all books
app.get("/Allbooks", (req, res) => {
  res.json(products);
});
//get specific book
app.get("/book/:id", (req, res) => {
  const selectedID = parseInt(req.params.id);
  const selectedBook = products.find((product) => product.id === selectedID);

  if (selectedBook) {
    res.json(selectedBook);
  } else {
    res.json({
      message: "there is not book in this id",
    });
  }
});

//add book using post
app.post("/add", (req, res) => {
  const book = {
    id: products.length + 1,
    product: `book ${products.length + 1}`,
  };
  products.push(book);

  res.status(200).json({
    message: "book add succesfully",
    data: book,
  });
});

//now updating book
app.put("/edit/:id", (req, res) => {
  const bookNum = parseInt(req.params.id);
  const selectedBook = products.find((product) => product.id === bookNum);
  if (selectedBook) {
    selectedBook.product = req.body.product || selectedBook.product;
    console.log(req.body);
    res.status(200).json({
      message: `book with ID: ${req.params.id}  `,
      data: selectedBook,
    });
  } else {
    res.status(404).json({
      message: "book not found",
    });
  }
});

app.delete("/Delete/:id", (req, res) => {
  const findIndex = products.findIndex(
    (product) => product.id === parseInt(req.params.id)
  );

  if (findIndex !== -1) {
    const BookDelete = products.splice(findIndex, 1);
    res.status(202).json({
      message: `this book is deleted sussesfully`,
      data: BookDelete,
    });
  } else {
    res.status(404).json({
      message: "book not found",
    });
  }
});

app.listen(port, () => {
  console.log(`you are connected to the port ${port}`);
});
