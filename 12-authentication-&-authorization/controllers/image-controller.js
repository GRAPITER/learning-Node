const imageModal = require("../modal/image-modal");
const { cloudinaryUpload } = require("../helper/cloudinary-helper");
const fs = require("fs");
const clodinary = require("../config/cloudinary");
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

async function fetchImage(req, res) {
  try {
    const fetch = await imageModal.find({});
    res.status(201).json({
      success: true,
      message: "Imaged uploaded successfully",
      image: fetch,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: "can not fetch all images! Please try again",
    });
  }
}

async function deleteImage(req, res) {
  try {
    //whcich image id is deleting and which user is deleting image
    const imageIdWichIsDeleted = req.params.id;
    const userId = req.userInfo.id;

    const image = await imageModal.findById(imageIdWichIsDeleted);
    console.log(" come from mongo db", image);

    if (!image) {
      return res.status(404).json({
        success: false,
        message: "Image not found",
      });
    }
    //check this image is deleted by the valid user
    if (image.uplodedBy.toString() !== userId) {
      return res.status(400).json({
        success: false,
        message:
          "You are not authorized to delete this image because you haven't uploaded it",
      });
    }

    //delete from cloudinary
    await clodinary.uploader.destroy(image.publicId);

    //delete from databse
    await imageModal.findByIdAndDelete(imageIdWichIsDeleted);

    res.status(200).json({
      success: true,
      message: "Image deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "there is an error on deleting images ",
    });
  }
}

module.exports = { uploadImageControoler, fetchImage, deleteImage };
