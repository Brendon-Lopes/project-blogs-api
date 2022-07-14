const express = require('express');
const user = require('../controllers/user.controller');
const middleware = require('../middlewares');

const router = express.Router();

router.post('/', middleware.validateUserInfo, user.create);
router.use(middleware.validateToken);
router.get('/', user.getAll);

module.exports = router;
