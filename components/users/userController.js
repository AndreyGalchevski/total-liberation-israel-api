const bcrypt = require('bcrypt');

const User = require('./User');

const getOne = async filter => {
  try {
    return User.findOne(filter);
  } catch (e) {
    throw e;
  }
}

const comparePassword = async (password, hash) => {
  try {
    return bcrypt.compare(password, hash);
  } catch (e) {
    throw e;
  }
}

module.exports = { getOne, comparePassword };