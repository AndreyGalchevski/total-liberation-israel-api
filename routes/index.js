const express = require('express');

const userRouter = require('./users/router');
const eventRouter = require('./events/router');
const articleRouter = require('./articles/router');
const investigationRouter = require('./investigations/router');

const router = express.Router();

router.use('/users', userRouter);
router.use('/events', eventRouter);
router.use('/articles', articleRouter);
router.use('/investigations', investigationRouter);

module.exports = router;