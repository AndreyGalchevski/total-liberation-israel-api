const express = require('express');

const userRouter = require('../components/users/userApi/router');
const eventRouter = require('../components/events/eventApi/router');
const articleRouter = require('../components/articles/articleApi/router');
const investigationRouter = require('../components/investigations/investigationApi/router');

const router = express.Router();

router.use('/users', userRouter);
router.use('/events', eventRouter);
router.use('/articles', articleRouter);
router.use('/investigations', investigationRouter);

module.exports = router;