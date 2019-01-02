const articleController = require('../../../controllers/article.controller');

module.exports = async (req, res) => {
  try {
    const articles = await articleController.getAll();
    res.send({ articles: articles });
  } catch (e) {
    res.status(500).send({ error: `Error fetching events: ${e}` });
  }
};