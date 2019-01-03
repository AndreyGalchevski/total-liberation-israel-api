const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InvestigationSchema = new Schema({
  name: { type: String, required: true },
  latitude: { type: Number, required: true} ,
  longitude: { type: Number, required: true },
  url: { type: String, required: true }
});

const Investigation = mongoose.model("Investigation", InvestigationSchema);
module.exports = Investigation;