const moment = require('moment');

const Event = require('./Event');

const save = async newEvent => {
  try {
    const new_event = new Event({
      title: newEvent.title,
      date: newEvent.date,
      description: newEvent.description,
      fbPage: newEvent.fbPage
    });
    return new_event.save();
  } catch (e) {
    throw e;
  }
};

// const getAll = async () => {
//   try {
//     return Event.find({}).sort({ date: 1} );
//   } catch (e) {
//     throw e;
//   }
// };

const getAll = async () => {
  let startOfToday = moment().startOf('day');
  return Event.find({ date: { $gte: startOfToday.toDate() }}).sort({ date: 1} );
};

const getById = async eventIdToGet => {
  try {
    return Event.findById(eventIdToGet);
  } catch (e) {
    throw e;
  }
};

const remove = async filter => {
  try {
    return Event.findOneAndRemove(filter);
  } catch (e) {
    throw e;
  }
};

const update = (eventId, updatedFields) => {
  try {
    const opts = { new: true, runValidators: true };
    return Event.findOneAndUpdate({ _id: eventId }, updatedFields, opts);    
  } catch (e) {
    throw e;
  }
}

module.exports = { save, getAll, getById, remove, update };