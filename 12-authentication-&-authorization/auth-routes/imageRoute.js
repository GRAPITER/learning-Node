const express = require("express");
const router = express.Router();
const AuthMiddleware = require("../auth-middleware/middleware");
const adminmiddleware = require("../auth-middleware//adminMiddleware");
const { uploadImageControoler } = require("../controllers/image-controller");

const uploadMiddleware = require("../auth-middleware/upload-Middleware");

//ok so this route will use to upload images to cloudinary so in this we want login user and only admin will send images so we add two middleware first will check if it login or not with jwt tocken and other chexk they have admin roel or not
router.post(
  "/upload",
  AuthMiddleware,
  adminmiddleware,
  uploadMiddleware.single("image"),
  uploadImageControoler
);

module.exports = router;
