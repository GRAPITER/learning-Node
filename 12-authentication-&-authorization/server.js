require("dotenv").config();
const express = require("express");
const connectDB = require("./database/auth-db");
const authRouter = require("./auth-routes/routes");
const homeRouter = require("./auth-routes/home");
const adminRouter = require("./auth-routes/admin");
const app = express();
const PORT = process.env.PORT || 3000;

//middleware to parse json
app.use(express.json());
connectDB();
//router with default path
app.use("/api/auth", authRouter);

app.use("/api/home", homeRouter);
app.use("/api/admin", adminRouter);
//db connnection

app.listen(PORT, () => {
  console.log(`successfully connected to port ${PORT}`);
});
