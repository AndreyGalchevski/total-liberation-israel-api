const cloudinary = require('cloudinary');

const articleController = require('../../../controllers/article.controller');

module.exports = async (req, res) => {
  try {
    let article = await articleController.remove({_id: req.params.id});
    let public_id = 'alf-israel/articles/' + article.image.substr(-24, 20);
    let result = await cloudinary.v2.uploader.destroy(public_id);
    res.send({ success: true });
  } catch (e) {
    res.status(500).send({ error: `Error while deleting an article: ${e}` });
  }
};