require("dotenv").config();
const mongoose = require("mongoose");

async function handleConnection() {
  try {
    await mongoose.connect(process.env.MONGOOSE_DB);
    console.log("connected to mongoose DB ");
  } catch (error) {
    console.error("conntion to db is failed", error);
  }
}

module.exports = handleConnection;
