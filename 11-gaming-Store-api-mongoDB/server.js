require("dotenv").config();
const express = require("express");
const connectToDB = require("./database/db");
const GameRoutes = require("./routes/gaming-routes");
const app = express();
const Port = process.env.PORT | 3000;

//Middleware whch parse into json
app.use(express.json());

//adding default path on every route
app.use("/api/games", GameRoutes);

//connecting mongoose DB
connectToDB();
//listening to Port
app.listen(Port, () => {
  console.log("connected to the Port 3000");
});
