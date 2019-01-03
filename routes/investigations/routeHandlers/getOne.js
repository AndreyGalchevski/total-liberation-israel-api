const investigationController = require('../../../controllers/investigation.controller');

module.exports = async (req, res) => {
  try {
    const investigation = await investigationController.getById(req.params.id);
    res.send(investigation);
  } catch (e) {
    res.status(500).send({ error: `Error while fetching an investigation: ${e}` });
  }
};