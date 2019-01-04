const cloudinaryUtils = require('../../../../utils/cloudinary');
const articleController = require('../../articleController');

module.exports = async (req, res) => {
  try {
    const article = await articleController.remove({_id: req.params.id});
    try {
      const response = await cloudinaryUtils.remove(article.image, 'alf-israel/articles');
      res.send(response);
    } catch (e) {
      res.status(500).send({ error: `Error while deleting an article image: ${e}` });      
    }
  } catch (e) {
    res.status(500).send({ error: `Error while deleting an article: ${e}` });
  }
};