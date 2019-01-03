const eventController = require('../../../controllers/event.controller');

module.exports = async (req, res) => {
  try {
    const { title, date, description, fbPage } = req.body;
    const updatedFields = { title, date, description, fbPage };
    const updatedArticle = await articleController.update(req.params.id, updatedFields);
    res.send({ updatedArticle });
  } catch (e) {
    res.status(500).send({ error: 'Error while updating an event' });
  } 
};