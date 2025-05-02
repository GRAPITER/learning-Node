const cloudinary = require("../config/cloudinary");

async function cloudinaryUpload(filePath) {
  try {
    const result = await cloudinary.uploader.upload(filePath);
    return {
      url: result.url,
      publicId: result.public_id,
    };
  } catch (error) {
    console.error("error while uploading to cloudinary", error);
    throw new Error("error while uploading to cloudinary");
  }
}

module.exports = { cloudinaryUpload };
