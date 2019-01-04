const articleController = require('../../articleController');

module.exports = async (req, res) => {
  try {
    let article = await articleController.getById(req.params.id);
    res.send(article);

  } catch (e) {
    res.status(500).send({ error: `Error while fetching an article: ${e}` });
  }
};