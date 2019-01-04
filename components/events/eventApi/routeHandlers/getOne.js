const eventController = require('../../eventController');

module.exports = async (req, res) => {
  try {
    const event = await eventController.getById(req.params.id);
    res.send(event);
  } catch (e) {
    res.status(500).send({ error: `Error while fetching an event: ${e}` });
  }
};