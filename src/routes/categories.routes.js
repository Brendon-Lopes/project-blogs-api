const express = require('express');
const categories = require('../controllers/categories.controller');
const middleware = require('../middlewares');

const router = express.Router();

// router.use(middleware.validateToken);
router.use(middleware.validateToken);
router.post('/', middleware.validateCategoryInfo, categories.create);

module.exports = router;
