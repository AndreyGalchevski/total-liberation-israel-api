const jwt = require('jsonwebtoken');

const userController = require('../../userController');

module.exports = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await userController.getOne({ username });
    if (!user) {
      res.status(404).send({msg: 'User not found'});
    } else {
      try {
        const isMatch = await userController.comparePassword(password, user.password);
        if (isMatch) {
          const plainUserObject = user.toObject();
          const token = jwt.sign(plainUserObject, process.env.PASSPORT_SECRET);
          res.send({ token: `Bearer ${token}`, user: { id: user._id, username }});
        }
        else {
          res.status(401).send({ error: 'Wrong password' })
        }
      } catch (e) {
        res.status(500).send({ error: `Error comparing passwords: ${e}` });
      }
    }
  } catch (e) {
    res.status(500).send({ error: `Error fetching user: ${e}` });
  }
};