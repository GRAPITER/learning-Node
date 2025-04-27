require("dotenv").config();

const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGOOSE_KEY)
  .then(() => console.log("connected to database successfully"))
  .catch((e) => console.log(e));

const userSchema = new mongoose.Schema({
  name: String,
  password: String,
  age: Number,
  isActive: Boolean,
  tags: [String],
  createdAt: { type: Date, default: Date.now() },
});

const user = mongoose.model("user", userSchema);

async function CreateUser() {
  try {
    //add new user

    const Newuser = await user.create({
      name: "ahmad hassan",
      password: "new coded",
      age: 30,
      isActive: true,
      tags: ["dev", "web&app", "Next.js"],
    });
    console.log(Newuser);

    // query to find all user

    const allUser = await user.find({ isActive: false });
    console.log(allUser);
  } catch (e) {
    console.log("Error", e);
  } finally {
    await mongoose.connection.close();
  }
}

CreateUser();
