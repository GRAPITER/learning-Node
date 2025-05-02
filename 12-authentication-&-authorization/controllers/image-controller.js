const imageModal = require("../modal/image-modal");
const { cloudinaryUpload } = require("../helper/cloudinary-helper");
const fs = require("fs");

async function uploadImageControoler(req, res) {
  try {
    //first check the image path come from frontend is avalible or not
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "there is no filepath found from user",
      });
    }

    const { publicId, url } = await cloudinaryUpload(req.file.path);

    const newImageUpload = await imageModal.create({
      url,
      publicId,
      uplodedBy: req.userInfo.id,
    });
    //del ffrom local storage

    fs.unlinkSync(req.file.path);

    res.status(201).json({
      success: true,
      message: "Imaged uploaded successfully",
      image: newImageUpload,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "file is required neg! Please try again",
    });
  }
}

module.exports = { uploadImageControoler };
