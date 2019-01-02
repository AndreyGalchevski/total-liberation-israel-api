const articleController = require('../../../controllers/article.controller');

module.exports = async (req, res) => {
  try {
    const { title, author, date, lead, content } = req.body;
    const updatedFields = { title, author, date, lead, content };

    const updatedArticle = await articleController.update(req.params.id, updatedFields);
    res.send({ success: true, updatedArticle });
  } catch (e) {
    res.status(500).send({ error: `Error while updating an article: ${e}` });
  }
};