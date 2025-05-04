const mongoose = require("mongoose");

async function conntionToDB() {
  try {
    await mongoose.connect(process.env.MONGOOSE_DB);
    console.log("connected to mongoDB");
  } catch (error) {
    console.log("connnection failed to mongoose db ");
  }
}

module.exports = conntionToDB;
