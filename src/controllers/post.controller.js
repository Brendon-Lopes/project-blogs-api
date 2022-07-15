const httpStatusCodes = require('../helpers/httpStatusCodes');
const post = require('../services/post.service');

const create = async (req, res) => {
  const { userId } = req.data;
  const postInfo = req.body;

  try {
    const newPost = await post.create({ userId, ...postInfo });

    return res.status(httpStatusCodes.CREATED).json(newPost);
  } catch ({ status, message }) {
    return res
      .status(status || httpStatusCodes.INTERNAL_SERVER)
      .json({ message });
  }
};

module.exports = {
  create,
};
