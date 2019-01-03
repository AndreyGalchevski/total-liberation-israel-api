const eventController = require('../../../controllers/event.controller');

module.exports = async (req, res) => {
  const { title, date, description, fbPage } = req.body;
  try {
    let event = await eventController.save({ title, date, description, fbPage });
    res.send({ event });
  } catch (e) {
    res.status(500).send({ error: `Error while saving event: ${e}` });
  }
};