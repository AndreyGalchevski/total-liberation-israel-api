const investigationController = require('../../../controllers/investigation.controller');

module.exports = async (req, res) => {
  const { name, latitude, longitude, url } = req.body;
  const newInvestigation = { name, latitude, longitude, url };
  try {
    const investigation = await investigationController.save(newInvestigation);
    res.send({ investigation });
  } catch (e) {
    res.status(500).send({ error: `Error while saving investigation: ${e}` });
  }
};