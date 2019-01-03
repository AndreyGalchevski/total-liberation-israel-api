const eventController = require('../../../controllers/event.controller');

module.exports = async (req, res) => {
  try {
    const events = await eventController.getAll();
    res.send({ events });
  } catch (e) {
    res.status(500).send({ error: `Error while fetching events: ${e}` });
  }
};