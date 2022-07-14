const errorHandler = require('./error.middleware');
const validateLogin = require('./login.middleware');

module.exports = {
  errorHandler,
  validateLogin,
};
