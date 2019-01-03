const eventController = require('../../../controllers/event.controller');

module.exports = async (req, res) => {
  try {
    const result = await cloudinary.v2.uploader.upload(req.files.eventImg[0].path, {
      folder: 'alf-israel/events'
    })
    
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