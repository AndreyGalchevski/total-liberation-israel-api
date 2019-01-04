const investigationController = require('../../investigationController');

module.exports = async (req, res) => {
  try {
    const investigation = await investigationController.remove({_id: req.params.id})
    res.send({ investigation });
  } catch (e) {
    res.status(500).send({ error: `Error while deleting an investigation: ${e}` });
  }
};