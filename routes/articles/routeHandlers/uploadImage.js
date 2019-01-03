const fs = require('fs');
const _ = require('lodash');

const cloudinaryUtils = require('../../../utils/cloudinary');
const articleController = require('../../../controllers/article.controller');

module.exports = async (req, res) => {
  try {
    const imagePath = _.get(req, 'files.articleImg[0].path');
    if (!imagePath) {
      res.status(400).send({ error: 'Image not attached' });
    }

    const result = await cloudinaryUtils.upload(imagePath, 'alf-israel/articles');

    fs.unlink(imagePath, e => {
      if (e) throw new Error(`Failed to delete local image: ${e}`);
    });

    const updatedFields = {
      image: result.secure_url
    };

    try {
      const updatedArticle = await articleController.update(req.params.id, updatedFields);
      res.send({ updatedArticle });
    } catch (e) {
      res.status(500).send({ error: `Failed to update the article: ${e}` });      
    }

  } catch (e) {
    res.status(500).send({ error: `Image upload failed: ${e}` });
  }
};