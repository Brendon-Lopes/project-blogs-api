const { User } = require('../database/models');
const httpStatusCodes = require('../helpers/httpStatusCodes');
const passwordHelper = require('../helpers/password');
const jwt = require('../helpers/auth');

const signIn = async ({ email, password }) => {
  const user = await User.findOne({
    where: {
      email,
    },
  });

  if (user === null) {
    const error = new Error('Invalid fields');
    error.status = httpStatusCodes.BAD_REQUEST;
    throw error;
  }

  passwordHelper.check(password, user.password);

  const token = jwt.createToken(user.id);

  return token;
};

module.exports = {
  signIn,
};
