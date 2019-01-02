const express = require('express');
const passport = require("passport");
const multer = require('multer');
const upload = multer({ dest: 'tmp/' });
const router = express.Router();

const routeHandlers = {
  delete: require('./routeHandlers/delete'),
  deleteImage: require('./routeHandlers/deleteImage'),
  get: require('./routeHandlers/get'),
  getOne: require('./routeHandlers/getOne'),
  post: require('./routeHandlers/post'),
  put: require('./routeHandlers/put'),
  uploadImage: require('./routeHandlers/uploadImage')
};

router.get('/', routeHandlers.get);
router.get('/:id', routeHandlers.getOne);
router.post(
  '/', 
  passport.authenticate('jwt', { session: false }), 
  routeHandlers.post
);
router.put('/:id', routeHandlers.put);
router.delete(
  '/:id', 
  passport.authenticate('jwt', { session: false }), 
  routeHandlers.delete
);
router.patch(
  '/:id/image', 
  upload.fields([{ name: 'articleImg', maxCount: 1 }]), 
  passport.authenticate('jwt', { session: false }),
  routeHandlers.uploadImage
);
router.delete(
  '/:id/image', 
  passport.authenticate('jwt', { session: false }),
  routeHandlers.deleteImage
);

module.exports = router;