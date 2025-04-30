const express = require("express");
const router = express.Router();
const homeMiddleware = require("../auth-middleware/middleware");
const checkAdmin = require("../auth-middleware/adminMiddleware");
router.get("/welcome", homeMiddleware, checkAdmin, (req, res) => {
  res.send({
    message: "welcome to admin Page",
  });
});

module.exports = router;
