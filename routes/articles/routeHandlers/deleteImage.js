const cloudinary = require('cloudinary');

const articleController = require('../../../controllers/article.controller');

module.exports = async (req, res) => {
  try {
    let article = await articleController.getById(req.params.id);
    let public_id = 'alf-israel/articles/' + article.image.substr(-24, 20);
    let response = await cloudinary.v2.uploader.destroy(public_id);
    res.send(response);
  } catch (e) {
    res.status(500).send({ error: `Image delete failed: ${e}` });
    return;
  }
};