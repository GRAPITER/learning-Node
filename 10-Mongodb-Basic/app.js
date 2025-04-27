const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://asjadali5968:asjadali2002@cluster0.nrqaapa.mongodb.net/"
  )
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
    // const Newuser = await user.create({
    //   name: "ajad ali",
    //   password: "hallo World",
    //   age: 30,
    //   isActive: true,
    //   tags: ["dev", "web&app", "Next.js"],
    // });
    // console.log(Newuser);

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
