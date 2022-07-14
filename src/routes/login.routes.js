const express = require('express');
const login = require('../controllers/login.controller');
const middleware = require('../middlewares');

const router = express.Router();

router.post('/', middleware.validateLogin, login.signIn);

module.exports = router;
