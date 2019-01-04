const express = require('express');
const passport = require('passport');

const router = express.Router();

const routeHandlers = {
  delete: require('./routeHandlers/delete'),
  get: require('./routeHandlers/get'),
  getOne: require('./routeHandlers/getOne'),
  post: require('./routeHandlers/post'),
  put: require('./routeHandlers/put'),
};

router.get('/', routeHandlers.get);

router.get('/:id', routeHandlers.getOne);

router.post(
  '/',
  passport.authenticate('jwt', {session: false}),
  routeHandlers.post
);

router.put(
  '/:id', 
  passport.authenticate('jwt', {session: false}), 
  routeHandlers.put  
);

router.delete(
  '/:id', 
  passport.authenticate('jwt', {session: false}), 
  routeHandlers.delete
);

module.exports = router;