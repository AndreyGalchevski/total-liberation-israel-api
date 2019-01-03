const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  date: { type: Date, required: true },
  lead: { type: String, required: true },
  content: Object,
  image: String
});

const Article = mongoose.model("Article", ArticleSchema);
module.exports = Article;