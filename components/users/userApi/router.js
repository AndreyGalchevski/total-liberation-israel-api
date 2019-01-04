const express = require('express');
const router = express.Router();

const routeHandlers = {
  post: require('./routeHandlers/post')
};

router.post('/authenticate', routeHandlers.post);

module.exports = router;