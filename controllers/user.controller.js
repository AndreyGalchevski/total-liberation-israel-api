const bcrypt = require('bcrypt');

const User = require('../models/User');

const getOne = async filter => {
  try {
    return User.findOne(filter);
  } catch (error) {
    throw error;
  }
}

const comparePassword = async (password, hash) => {
  try {
    return bcrypt.compare(password, hash);
  } catch (error) {
    throw error;
  }
}

module.exports = { getOne, comparePassword };