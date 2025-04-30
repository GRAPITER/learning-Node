const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, "this field is required"],
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: [true, "this field is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "this field is required"],
      unique: true,
    },
    role: {
      type: String,
      required: [true, "this field is required"],
      enum: ["user", "admin", "superAdmin"],
      default: "user",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
