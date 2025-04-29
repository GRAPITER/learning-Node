const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("your are in home page");
});

//fetch produt in product route
app.get("/products", (req, res) => {
  const products = [
    {
      id: 1,
      label: "cake",
    },
    {
      id: 2,
      label: "pastre",
    },
    {
      id: 3,
      label: "candel",
    },
  ];

  res.json(products);
});

//fetch single produt like dynamic routing

app.get("/product/:id", (req, res) => {
  const params = parseInt(req.params.id);
  const products = [
    {
      id: 1,
      label: "cake",
    },
    {
      id: 2,
      label: "pastre",
    },
    {
      id: 3,
      label: "candel",
    },
  ];

  const singleProduct = products.find((product) => product.id === params);

  if (singleProduct) {
    res.json(singleProduct);
  } else {
    res.status(404).send("product not find plz add valid product number");
  }
});

app.listen(port, () => {
  console.log(`connecting to port ${port}`);
});
