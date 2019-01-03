const express = require('express');

const userRoutes = require('./users');
const eventRoutes = require('./events');
const articleRoutes = require('./articles');

const router = express.Router();

router.use('/users', userRoutes);
router.use('/events', eventRoutes);
router.use('/articles', articleRoutes);

module.exports = router;