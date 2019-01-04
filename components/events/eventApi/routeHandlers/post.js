const eventController = require('../../eventController');

module.exports = async (req, res) => {
  const { title, date, description, fbPage } = req.body;
  const newEvent = { title, date, description, fbPage };
  try {
    let event = await eventController.save(newEvent);
    res.send({ event });
  } catch (e) {
    res.status(500).send({ error: `Error while saving event: ${e}` });
  }
};