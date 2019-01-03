const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  title: { type: String, required: true },
  date: { type: Date, required: true },
  description: { type: String, required: true },
  fbPage: { type: String, required: true },
  image: String
});

const EventModel = mongoose.model("Event", EventSchema);
module.exports = EventModel;