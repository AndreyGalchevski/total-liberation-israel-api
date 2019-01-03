const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  title: String,
  date: Date,
  description: String,
  fbPage: String,
  image: String
});

const EventModel = mongoose.model("Event", EventSchema);
module.exports = EventModel;