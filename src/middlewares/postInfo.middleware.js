const httpStatusCodes = require('../helpers/httpStatusCodes');
const { newPostSchema } = require('../schemas');

const validateNewPost = (req, res, next) => {
  const postInfo = req.body;

  const { error } = newPostSchema.validate(postInfo);

  if (error) {
    return res.status(httpStatusCodes.BAD_REQUEST).json({ message: error.message });
  }

  next();
};

module.exports = validateNewPost;
