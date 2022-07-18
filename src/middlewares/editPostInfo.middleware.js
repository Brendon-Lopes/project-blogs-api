const httpStatusCodes = require('../helpers/httpStatusCodes');
const { editPostSchema } = require('../schemas');

const validateNewPost = (req, res, next) => {
  const editInfo = req.body;

  const { error } = editPostSchema.validate(editInfo);

  if (error) {
    return res.status(httpStatusCodes.BAD_REQUEST).json({ message: error.message });
  }

  next();
};

module.exports = validateNewPost;
