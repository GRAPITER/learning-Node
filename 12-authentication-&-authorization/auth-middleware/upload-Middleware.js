const multer = require("multer");
const path = require("path");

//set our multer storage
//what is multer disk storage
//1:when user send images through form and i want it to store in my folder so only me can see this for example You’re building an app where users upload a photo of summer, and that image gets saved on your PC

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const fileName =
      file.fieldname + "_" + Date.now() + path.extname(file.originalname);
    cb(null, fileName);
  },
});

//file filter function
// This is a file filter function used in Multer to only accept image files and reject anything else like PDFs, videos, etc.
//If the file starts with "image" (like "image/jpeg"), then accept it Otherwise, reject it and throw an error.

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new Error("not an miage plz upload image"));
  }
};

module.exports = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 215 * 1024 * 1024, // file size which are accepted
  },
});
