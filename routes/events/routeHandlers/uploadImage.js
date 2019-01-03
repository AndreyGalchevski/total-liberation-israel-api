const fs = require('fs');
const _ = require('lodash');

const cloudinaryUtils = require('../../../utils/cloudinary');
const eventController = require('../../../controllers/event.controller');

module.exports = async (req, res) => {
  try {
    const imagePath = _.get(req, 'files.eventImg[0].path');
    if (!imagePath) {
      res.status(400).send({ error: 'Image not attached' });
    }

    const result = await cloudinaryUtils.upload(imagePath, 'alf-israel/events');
    
    fs.unlink(req.files.eventImg[0].path)
    
    const updatedFields = {
      image: result.secure_url
    }
    
    const updatedEvent = await eventController.update(req.params.id, updatedFields);
    
    res.send({ updatedEvent });
  } catch (e) {
    res.status(500).send({ error: `Image upload failed: ${e}` });
  }
};