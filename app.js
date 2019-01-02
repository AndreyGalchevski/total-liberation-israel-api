require('dotenv').config();
const bodyParser = require("body-parser");
const cors = require("cors");
const cloudinary = require("cloudinary");
const passport = require("passport");
const express = require("express");

const dbConfig = require("./config/db");
const cloudinaryConfig = require("./config/cloudinary");
const routes = require('./routes/index');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

cloudinary.config(cloudinaryConfig);
dbConfig.connectToDB();

app.use('/api', routes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server started at port ${port}`);
});
