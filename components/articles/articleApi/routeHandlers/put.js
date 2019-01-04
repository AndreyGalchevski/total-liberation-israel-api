const articleController = require('../../articleController');

module.exports = async (req, res) => {
  try {
    const { title, author, date, lead, content } = req.body;
    const updatedFields = { title, author, date, lead, content };
    const updatedArticle = await articleController.update(req.params.id, updatedFields);
    res.send({ updatedArticle });
  } catch (e) {
    res.status(500).send({ error: `Error while updating an article: ${e}` });
  }
};