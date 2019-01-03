const cloudinary = require('cloudinary');

const upload = async (image, folder) => {
  return cloudinary.v2.uploader.upload(image, { folder });
};

const remove = async (imageUrl, folder) => {
  let public_id = folder + imageUrl.substr(-24, 20);
  return cloudinary.v2.uploader.destroy(public_id);
};

module.exports = { upload, remove };