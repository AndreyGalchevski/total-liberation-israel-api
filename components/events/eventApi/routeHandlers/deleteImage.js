const cloudinaryUtils = require('../../../../utils/cloudinary');
const eventController = require('../../eventController');

module.exports = async (req, res) => {
  try {
    const event = await eventController.getById(req.params.id);
    try {
      const response = await cloudinaryUtils.remove(event.image, 'alf-israel/events');
      res.send(response);
    } catch (e) {
      res.status(500).send({ error: `Error while deleting an event image: ${e}` });     
    }
  } catch (e) {
    res.status(500).send({ error: `Error while fetching an event: ${e}` });     
  }
};