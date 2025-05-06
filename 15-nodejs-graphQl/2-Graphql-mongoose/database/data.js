const mongoose = require("mongoose");

async function handleServer() {
  try {
    console.log(process.env.MONGOOSE_DB);
    await mongoose.connect(
      "mongodb+srv://asjadali5968:asjadali2002@cluster0.usmooqo.mongodb.net/"
    );
    console.log("connected to moongose");
  } catch (error) {
    console.log(`can not connected to the mongoose database server`);
  }
}

module.exports = handleServer;
