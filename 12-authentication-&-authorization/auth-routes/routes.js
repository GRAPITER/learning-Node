const express = require("express");
const { handleRegister, handleLogin } = require("../controllers/controller");
const router = express.Router();

//login route
router.post("/register", handleRegister);
//register routes
router.post("/login", handleLogin);

module.exports = router;
