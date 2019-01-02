var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var InvestigationSchema = new Schema({
  name: String,
  latitude: Number,
  longitude: Number,
  url: String
});

var InvestigationModel = mongoose.model("Investigation", InvestigationSchema);
module.exports = InvestigationModel;

module.exports.addInvestigation = function(newInvestigation) {
  var new_investigation = new InvestigationModel({
    name: newInvestigation.name,
    latitude: newInvestigation.latitude,
    longitude: newInvestigation.longitude,
    url: newInvestigation.url
  })
  return new_investigation.save();
}

module.exports.getAllInvestigations = function() {
  return InvestigationModel.find().sort({_id:-1});
}

module.exports.getInvestigationById = function(investigationIdToGet) {
  return InvestigationModel.findById(investigationIdToGet);
}

module.exports.deleteInvestigation = function(query) {
  return InvestigationModel.findOneAndRemove(query);
}