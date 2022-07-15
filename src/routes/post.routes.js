const express = require('express');
const post = require('../controllers/post.controller');
const middleware = require('../middlewares');

const router = express.Router();

router.use(middleware.validateToken);
router.post('/', middleware.validateNewPost, post.create);

module.exports = router;
