const Article = require('../models/Article');

const getAll = async () => {
  try {
    return Article.find().sort({ _id: -1 });    
  } catch (error) {
    throw error;
  }
};

const getById = async articleId => {
  try {
    return Article.findById(articleId);
  } catch (error) {
    throw error;
  }
};

const save = async newArticle => {
  var new_article = new Article({
    title: newArticle.title,
    author: newArticle.author,
    date: newArticle.date,
    lead: newArticle.lead,
    content: newArticle.content
  })

  try {
    return new_article.save();
  } catch (error) {
    throw error;
  }
};

const update = (articleId, updatedFields) => {
  try {
    return Article.findByIdAndUpdate(articleId, updatedFields, { new: true });    
  } catch (error) {
    throw error;
  }
};

const remove = async query => {
  try {
    return Article.findOneAndRemove(query);
  } catch (error) {
    throw error;
  }
};

module.exports = { getAll, getById, save, update, remove };