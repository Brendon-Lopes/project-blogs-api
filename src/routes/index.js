const login = require('./login.routes');
const user = require('./user.routes');
const categories = require('./categories.routes');
const post = require('./post.routes');

module.exports = {
  login,
  user,
  categories,
  post,
};
