const Article = require('./Article');

const getAll = async () => {
  try {
    return Article.find().sort({ _id: -1 });    
  } catch (e) {
    throw e;
  }
};

const getById = async articleId => {
  try {
    return Article.findById(articleId);
  } catch (e) {
    throw e;
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
  } catch (e) {
    throw e;
  }
};

const update = (articleId, updatedFields) => {
  try {
    const opts = { new: true, runValidators: true };
    return Article.findOneAndUpdate({ _id: articleId }, updatedFields, opts);    
  } catch (e) {
    throw e;
  }
};

const remove = async query => {
  try {
    return Article.findOneAndRemove(query);
  } catch (e) {
    throw e;
  }
};

module.exports = { getAll, getById, save, update, remove };