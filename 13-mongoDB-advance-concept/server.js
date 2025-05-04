require("dotenv").config();
const connectToDB = require("./databse/db");
const express = require("express");
const ProductRouter = require("./routes/productRoutes");
const authorRouter = require("./routes/author-route");
const app = express();
const port = process.env.PORT;

//middleware to read json files
app.use(express.json());

//connection to db
connectToDB();

//sending data route
app.use("/api/product", ProductRouter);

//addAuthor
app.use("/api/book", authorRouter);
//listen to port
app.listen(port, () => {
  console.log("connected to port 3000");
});
