const express = require("express");
const router = express.Router();
const AuthMiddleware = require("../auth-middleware/middleware");
router.get("/welcome", AuthMiddleware, (req, res) => {
  res.send({
    message: "welcome to home Page",
    data: req.userInfo,
    mess: `ohh i think you are ${req.userInfo.role}`,
  });
});

module.exports = router;
