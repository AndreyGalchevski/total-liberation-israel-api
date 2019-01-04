const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  title: { type: String, required: true },
  date: { type: Date, required: true },
  description: { type: String, required: true },
  fbPage: { type: String, required: true },
  image: String
});

const Event = mongoose.model("Event", EventSchema);
module.exports = Event;