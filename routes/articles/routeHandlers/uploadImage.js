const cloudinary = require('cloudinary');
const fs = require('fs');

const articleController = require('../../../controllers/article.controller');

module.exports = async (req, res) => {
  try {
    const result = await cloudinary.v2.uploader.upload(req.files.articleImg[0].path, {
      folder: 'alf-israel/articles'
    });

    fs.unlink(req.files.articleImg[0].path, err => {
      if (err) {
        throw new Error(`Failed to delete local image: ${err}`);
      }
    });

    const updatedFields = {
      image: result.secure_url
    };

    const updatedArticle = await articleController.update(req.params.id, updatedFields);

    res.send({ updatedArticle });
  } catch (e) {
    res.status(500).send({ error: `Image upload failed: ${e}` });
    return;
  }
};