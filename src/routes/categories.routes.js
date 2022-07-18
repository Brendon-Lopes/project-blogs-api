const express = require('express');
const categories = require('../controllers/categories.controller');
const middleware = require('../middlewares');

const router = express.Router();

router.use(middleware.validateToken);
router.post('/', middleware.validateCategoryInfo, categories.create);
router.get('/', categories.getAll);

module.exports = router;
