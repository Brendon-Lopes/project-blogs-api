require('dotenv/config');
const jwt = require('jsonwebtoken');

const httpStatusCodes = require('./httpStatusCodes');

const secret = process.env.JWT_SECRET;

const createToken = (email) => {
  const token = jwt.sign({ data: email }, secret, { algorithm: 'HS256' });
  return token;
};

const validateToken = (token) => {
  try {
    const { data } = jwt.verify(token, process.env.JWT_SECRET);

    return data;
  } catch (_) {
    const error = new Error('Expired or invalid token');
    error.status = httpStatusCodes.UNAUTHORIZED;
    throw error;
  }
};

module.exports = {
  createToken,
  validateToken,
};
