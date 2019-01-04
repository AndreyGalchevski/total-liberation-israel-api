const Investigation = require('./Investigation');

const save = async data => {
  try {
    const { name, latitude, longitude, url } = data;
    const newInvestigation = new Investigation({ name, latitude, longitude, url });
    return newInvestigation.save();
  } catch (e) {
    throw e;
  }
};

const getAll = async () => {
  try {
    return Investigation.find({}).sort({ _id: -1} );
  } catch (e) {
    throw e;
  }
};

const getById = async investigationId => {
  try {
    return Investigation.findById(investigationId);
  } catch (e) {
    throw e;
  }
};

const remove = async filter => {
  try {
    return Investigation.findOneAndRemove(filter);
  } catch (e) {
    throw e;
  }
};

const update = (investigationId, updatedFields) => {
  try {
    const opts = { new: true, runValidators: true };
    return Investigation.findOneAndUpdate({ _id: investigationId }, updatedFields, opts);    
  } catch (e) {
    throw e;
  }
}

module.exports = { save, getAll, getById, remove, update };