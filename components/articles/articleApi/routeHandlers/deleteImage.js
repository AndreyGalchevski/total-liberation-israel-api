const articleController = require('../../articleController');
const cloudinaryUtils = require('../../../../utils/cloudinary');

module.exports = async (req, res) => {
  try {
    const article = await articleController.getById(req.params.id);
    const response = await cloudinaryUtils.remove(article.image, 'alf-israel/articles');
    res.send(response);
  } catch (e) {
    res.status(500).send({ error: `Error while deleting an article image: ${e}` });
  }
};