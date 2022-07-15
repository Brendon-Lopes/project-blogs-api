const jwt = require('../helpers/auth');
const httpStatusCodes = require('../helpers/httpStatusCodes');

const validateToken = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(httpStatusCodes.UNAUTHORIZED).json({ message: 'Token not found' });
  }

  try {
    const data = jwt.validateToken(authorization);

    req.data = data;

    next();
  } catch ({ status, message }) {
    return res.status(status).json({ message });
  }
};

module.exports = validateToken;
