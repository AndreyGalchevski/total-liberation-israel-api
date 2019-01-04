const investigationController = require('../../investigationController');

module.exports = async (req, res) => {
  try {
    const investigations = await investigationController.getAll();
    res.send({ investigations });
  } catch (e) {
    res.status(500).send({ error: `Error while fetching investigations: ${e}` });
  }
};