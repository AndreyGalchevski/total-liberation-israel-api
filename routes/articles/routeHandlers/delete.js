const cloudinary = require('cloudinary');

const articleController = require('../../../controllers/article.controller');

module.exports = async (req, res) => {
  try {
    let article = await articleController.remove({_id: req.params.id});
    let public_id = 'alf-israel/articles/' + article.image.substr(-24, 20);
    try {
      let response = await cloudinary.v2.uploader.destroy(public_id);
      res.send(response);
    } catch (error) {
      res.status(500).send({ error: `Error while deleting an article image: ${e}` });      
    }
  } catch (e) {
    res.status(500).send({ error: `Error while deleting an article: ${e}` });
  }
};