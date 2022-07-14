const bcrypt = require('bcrypt');
const httpStatusCodes = require('./httpStatusCodes');

const encrypt = (password) => {
  const salt = bcrypt.genSaltSync(10);
  const encryptedPassword = bcrypt.hashSync(password, salt);
  return encryptedPassword;
};

const check = (password, passwordDb) => {
  const match = bcrypt
    .compareSync(password, passwordDb) || password === passwordDb;

  if (!match) {
    const error = new Error('Invalid fields');
    error.status = httpStatusCodes.BAD_REQUEST;
    throw error;
  }
};

module.exports = {
  encrypt,
  check,
};
