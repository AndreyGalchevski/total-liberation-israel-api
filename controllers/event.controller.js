const moment = require('moment');

const Event = require('../models/Event');

const save = async newEvent => {
  try {
    const new_event = new Event({
      title: newEvent.title,
      date: newEvent.date,
      description: newEvent.description,
      fbPage: newEvent.fbPage
    });
    return new_event.save();
  } catch (error) {
    throw error;
  }
};

const getAll = async () => {
  try {
    return Event.find({}).sort({ date: 1} );
  } catch (error) {
    throw error;
  }
};

// const getAll = async () => {
//   let startOfToday = moment().startOf('day');
//   return Event.find({ date: { $gte: startOfToday.toDate() }}).sort({ date: 1} );
// };

const getById = async eventIdToGet => {
  try {
    return Event.findById(eventIdToGet);
  } catch (error) {
    throw error;
  }
};

const remove = async filter => {
  try {
    return Event.findOneAndRemove(filter);
  } catch (error) {
    throw error;
  }
};

const update = (eventId, updatedFields) => {
  try {
    return Event.findByIdAndUpdate(eventId, updatedFields, { new: true });    
  } catch (error) {
    throw error;
  }
}

module.exports = { save, getAll, getById, remove, update };