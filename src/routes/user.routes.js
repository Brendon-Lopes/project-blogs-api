const express = require('express');
const user = require('../controllers/user.controller');
const middleware = require('../middlewares');

const router = express.Router();

router.post('/', middleware.validateUserInfo, user.create);

module.exports = router;
