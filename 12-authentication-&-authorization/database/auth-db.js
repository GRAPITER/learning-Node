require("dotenv").config();
const mongoose = require("mongoose");

async function handleConnection() {
  try {
    await mongoose.connect(process.env.MONGOOSE_DB);
    console.log("connected  to mongooseDB");
  } catch (error) {
    console.log("connection failed to mongooseDB");
  }
}

module.exports = handleConnection;
