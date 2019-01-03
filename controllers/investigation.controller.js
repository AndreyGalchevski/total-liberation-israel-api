const Investigation = require('../models/Investigation');

const save = async data => {
  try {
    const { name, latitude, longitude, url } = data;
    const newInvestigation = new Investigation({ name, latitude, longitude, url });
    return newInvestigation.save();
  } catch (error) {
    throw error;
  }
};

const getAll = async () => {
  try {
    return Investigation.find({}).sort({ _id: -1} );
  } catch (error) {
    throw error;
  }
};

const getById = async investigationId => {
  try {
    return Investigation.findById(investigationId);
  } catch (error) {
    throw error;
  }
};

const remove = async filter => {
  try {
    return Investigation.findOneAndRemove(filter);
  } catch (error) {
    throw error;
  }
};

const update = (investigationId, updatedFields) => {
  try {
    const opts = { new: true, runValidators: true };
    return Investigation.findOneAndUpdate({ _id: investigationId }, updatedFields, opts);    
  } catch (error) {
    throw error;
  }
}

module.exports = { save, getAll, getById, remove, update };