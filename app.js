require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const cloudinary = require("cloudinary");
const passport = require("passport");
const createError = require('http-errors');
const logger = require('morgan');

const dbConfig = require("./config/db");
const cloudinaryConfig = require("./config/cloudinary");
const routes = require('./routes/index');

require('./config/passport')(passport);

cloudinary.config(cloudinaryConfig);
dbConfig.connectToDB();

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());

app.use('/', routes);

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
});

module.exports = app;
