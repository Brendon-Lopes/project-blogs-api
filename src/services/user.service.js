const { User } = require('../database/models');
const httpStatusCodes = require('../helpers/httpStatusCodes');
const passwordHelper = require('../helpers/password');
const jwt = require('../helpers/auth');

const create = async ({ displayName, email, password, image }) => {
  const user = await User.findOne({ where: { email } });

  const encryptedPassword = passwordHelper.encrypt(password);

  if (user !== null) {
    const error = new Error('User already registered');
    error.status = httpStatusCodes.CONFLICT;
    throw error;
  }

  const newUser = await User.create({ displayName, email, password: encryptedPassword, image });

  const token = jwt.createToken(newUser.id);

  return token;
};

const getAll = async () => {
  const users = await User.findAll({ raw: true, attributes: { exclude: ['password'] } });

  return users;
};

const getById = async (id) => {
  const user = await User.findByPk(id, { raw: true, attributes: { exclude: ['password'] } });

  if (user === null) {
    const error = new Error('User does not exist');
    error.status = 404;
    throw error;
  }

  return user;
};

module.exports = {
  create,
  getAll,
  getById,
};
