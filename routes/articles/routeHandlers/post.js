const articleController = require('../../../controllers/article.controller');

module.exports = async (req, res) => {
  const newArticle = {
    title: req.body.title,
    author: req.body.author,
    date: req.body.date,
    lead: req.body.lead,
    content: req.body.content
  };

  try {
    let article = await articleController.save(newArticle);
    res.send({
      success: true,
      article,
      message: 'Article saved successfully!'
    });
  } catch (e) {
    res.status(500).send({ error: `Error while saving article: ${e}` });
  }
};