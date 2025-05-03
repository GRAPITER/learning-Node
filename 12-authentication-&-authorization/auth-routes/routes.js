const express = require("express");
const {
  handleRegister,
  handleLogin,
  changePassword,
} = require("../controllers/controller");
const authMiddleware = require("../auth-middleware/middleware");
const router = express.Router();

//login route
router.post("/register", handleRegister);
//register routes
router.post("/login", handleLogin);
//changepassword
router.post("/change", authMiddleware, changePassword);

module.exports = router;
