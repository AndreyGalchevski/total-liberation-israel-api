const cloudinary = require('cloudinary');

const eventController = require('../../../controllers/event.controller');

module.exports = async (req, res) => {
  try {
    let event = await eventController.remove({ _id: req.params.id });
    let public_id = 'alf-israel/events/' + event.image.substr(-24, 20);
    try {
      let response = await cloudinary.v2.uploader.destroy(public_id);
      res.send(response);
    } catch (error) {
      res.status(500).send({ error: `Error while deleting an event image: ${e}` });     
    }
  } catch (e) {
    res.status(500).send({ error: `Error while deleting an event: ${e}` });     
  }
};