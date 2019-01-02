const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  title: String,
  author: String,
  date: Date,
  lead: String,
  content: Object,
  image: String
});

const Article = mongoose.model("Article", ArticleSchema);
module.exports = Article;