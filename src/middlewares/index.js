const errorHandler = require('./error.middleware');
const validateLogin = require('./login.middleware');
const validateUserInfo = require('./userInfo.middleware');
const validateToken = require('./auth.middleware');

module.exports = {
  errorHandler,
  validateLogin,
  validateUserInfo,
  validateToken,
};
