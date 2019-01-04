const eventController = require('../../eventController');

module.exports = async (req, res) => {
  try {
    const { title, date, description, fbPage } = req.body;
    const updatedFields = { title, date, description, fbPage };
    const updatedEvent = await eventController.update(req.params.id, updatedFields);
    res.send(updatedEvent);
  } catch (e) {
    res.status(500).send({ error: 'Error while updating an event' });
  } 
};