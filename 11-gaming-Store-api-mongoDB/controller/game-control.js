const gameModal = require("../modal/game-modal");

//fetch all games
async function handleFetchAll(req, res) {
  try {
    const fetchAll = await gameModal.find({});
    if (!fetchAll) {
      res.status(404).json({
        message: "ther is an error for fetching all  game shit",
      });
    } else {
      res.status(202).json({
        Success: true,
        message: "every thing go great and games fetched",
        data: fetchAll,
      });
    }
  } catch (error) {
    console.log("there is an error", error);
    res.status(404).json({
      message: "ther is an error for fetching all shit",
    });
  }
}

//fetch single games
async function handleFetchSingle(req, res) {
  try {
    const gameId = req.params.id;
    const singleOne = await gameModal.findById(gameId);
    if (!singleOne) {
      res.status(404).json({
        message: "ther is an error for fetching single  game shit",
      });
    } else {
      res.status(202).json({
        Success: true,
        message: "every thing go great and game fetched",
        data: singleOne,
      });
    }
  } catch (error) {
    console.log("there is an error", error);
    res.status(404).json({
      message: "ther is an error for fetching all shit",
    });
  }
}
//crate games
async function handleAddGame(req, res) {
  try {
    const gameInfo = req.body;
    const createGame = await gameModal.create(gameInfo);
    if (!createGame) {
      res.status(404).json({
        message: "ther is an error for creating this game shit",
      });
    } else {
      res.status(202).json({
        Success: true,
        message: "every thing go great and game created",
        data: createGame,
      });
    }
  } catch (error) {
    console.log("there is an error", error);
    res.status(404).json({
      message: "ther is an error for fetching all shit",
    });
  }
}
//update game
async function handleUpdateGame(req, res) {
  try {
    const gameId = req.params.id;
    const gameInfo = req.body;
    const update = await gameModal.findByIdAndUpdate(gameId, gameInfo, {
      new: true,
    });
    if (!update) {
      res.status(404).json({
        message: "ther is an error for updating game shit",
      });
    } else {
      res.status(202).json({
        Success: true,
        message: "every thing go great and game updated",
        data: update,
      });
    }
  } catch (error) {
    console.log("there is an error", error);
    res.status(404).json({
      message: "ther is an error for fetching all shit",
    });
  }
}
//delete game
async function handleDeleteGame(req, res) {
  try {
    const gameId = req.params.id;
    const deleteGame = await gameModal.findByIdAndUpdate(gameId);
    if (!deleteGame) {
      res.status(404).json({
        message: "ther is an error for deleteing  game shit",
      });
    } else {
      res.status(202).json({
        Success: true,
        message: "every thing go great and game deleted",
        data: deleteGame,
      });
    }
  } catch (error) {
    console.log("there is an error", error);
    res.status(404).json({
      message: "ther is an error for fetching all shit",
    });
  }
}

module.exports = {
  handleFetchAll,
  handleFetchSingle,
  handleAddGame,
  handleUpdateGame,
  handleDeleteGame,
};
