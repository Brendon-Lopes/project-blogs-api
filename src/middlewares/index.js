const errorHandler = require('./error.middleware');
const validateLogin = require('./login.middleware');
const validateUserInfo = require('./userInfo.middleware');
const validateToken = require('./auth.middleware');
const validateCategoryInfo = require('./categoryInfo.middleware');
const validateNewPost = require('./postInfo.middleware');
const editPostInfo = require('./editPostInfo.middleware');

module.exports = {
  errorHandler,
  validateLogin,
  validateUserInfo,
  validateToken,
  validateCategoryInfo,
  validateNewPost,
  editPostInfo,
};
