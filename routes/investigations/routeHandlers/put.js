const investigationController = require('../../../controllers/investigation.controller');

module.exports = async (req, res) => {
  try {
    const { name, latitude, longitude, url } = req.body;
    const updatedFields = { name, latitude, longitude, url };

    const updatedInvestigation = await investigationController.update(req.params.id, updatedFields);
    res.send(updatedInvestigation);
  } catch (e) {
    res.status(500).send({ error: `Error while updating an investigation: ${e}` });
  } 
};