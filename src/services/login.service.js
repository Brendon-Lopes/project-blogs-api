const { User } = require('../database/models');
const httpStatusCodes = require('../helpers/httpStatusCodes');
const jwt = require('../helpers/auth');

const signIn = async ({ email, password }) => {
  const user = await User.findOne({
    where: {
      email,
      password,
    },
  });

  if (user === null) {
    const error = new Error('Invalid fields');
    error.status = httpStatusCodes.BAD_REQUEST;
    throw error;
  }

  const token = jwt.createToken(email);

  return token;
};

module.exports = {
  signIn,
};
