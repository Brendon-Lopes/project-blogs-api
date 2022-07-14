const httpStatusCodes = require('../helpers/httpStatusCodes');
const { newUserSchema } = require('../schemas');

const userInfo = (req, res, next) => {
  const { image: _, ...userData } = req.body;

  const { error } = newUserSchema.validate(userData);

  if (error) {
    return res.status(httpStatusCodes.BAD_REQUEST).json({ message: error.message });
  }

  next();
};

module.exports = userInfo;
