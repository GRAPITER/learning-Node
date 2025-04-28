const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
  gameName: {
    type: String,
    required: [true, "name of the game is required"],
    minLength: [3, "letter is to low must be greater tha 3"],
    maxLength: [100, "letter is to high must be lower tha 100"],
    trim: true,
  },
  developer: {
    type: String,
    required: [true, "name of the game is required"],
    minlength: [3, "letter is to low must be greater tha 3"],
    maxlength: [100, "letter is to high must be lower tha 100"],
    trim: true,
  },
  tags: {
    type: [String],
  },
  CreatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("gaming", gameSchema);
