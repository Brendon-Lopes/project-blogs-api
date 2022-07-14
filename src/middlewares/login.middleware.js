const httpStatusCodes = require('../helpers/httpStatusCodes');
const loginDataSchema = require('../schemas/loginDataSchema');

const validateLogin = (req, res, next) => {
  const userData = req.body;

  const { error } = loginDataSchema.validate(userData);

  if (error) {
    return res.status(httpStatusCodes.BAD_REQUEST).json({ message: error.message });
  }

  next();
};

module.exports = validateLogin;
