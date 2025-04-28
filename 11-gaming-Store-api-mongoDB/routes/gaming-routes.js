const express = require("express");
const router = express.Router();
const {
  handleFetchAll,
  handleFetchSingle,
  handleAddGame,
  handleUpdateGame,
  handleDeleteGame,
} = require("../controller/game-control");

//fetch all games
router.get("/get", handleFetchAll);

//fetch single game
router.get("/get/:id", handleFetchSingle);
//create games
router.post("/add", handleAddGame);
//update game
router.put("/update/:id", handleUpdateGame);
//delete game
router.delete("/delete/:id", handleDeleteGame);

module.exports = router;
