const httpStatusCodes = require('../helpers/httpStatusCodes');
const { newCategorySchema } = require('../schemas');

const validateCategoryInfo = (req, res, next) => {
  const { name } = req.body;

  const { error } = newCategorySchema.validate({ name });

  if (error) {
    return res.status(httpStatusCodes.BAD_REQUEST).json({ message: error.message });
  }

  next();
};

module.exports = validateCategoryInfo;
