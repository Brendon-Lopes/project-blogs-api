const express = require('express');
const post = require('../controllers/post.controller');
const middleware = require('../middlewares');

const router = express.Router();

router.use(middleware.validateToken);
router.post('/', middleware.validateNewPost, post.create);
router.get('/search', post.getByContent);
router.get('/', post.getAll);
router.get('/:id', post.getById);
router.put('/:id', middleware.editPostInfo, post.updateById);
router.delete('/:id', post.destroy);

module.exports = router;
