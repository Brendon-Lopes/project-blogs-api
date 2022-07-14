const { User } = require('../database/models');
const httpStatusCodes = require('../helpers/httpStatusCodes');
const passwordHelper = require('../helpers/password');
const jwt = require('../helpers/auth');

const create = async ({ displayName, email, password, image }) => {
  const user = await User.findOne({ where: { email } });

  const encryptedPassword = passwordHelper.encrypt(password);

  if (user !== null) {
    const error = new Error('User already registered');
    error.status = httpStatusCodes.BAD_REQUEST;
    throw error;
  }

  await User.create({ displayName, email, password: encryptedPassword, image });

  const token = jwt.createToken(email);

  return token;
};

module.exports = {
  create,
};
