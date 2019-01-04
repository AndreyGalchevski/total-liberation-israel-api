const articleController = require('../../articleController');

module.exports = async (req, res) => {
  const { title, author, date, lead, content } = req.body;
  const newArticle = { title, author, date, lead, content };
  try {
    let article = await articleController.save(newArticle);
    res.send({ article });
  } catch (e) {
    res.status(500).send({ error: `Error while saving article: ${e}` });
  }
};