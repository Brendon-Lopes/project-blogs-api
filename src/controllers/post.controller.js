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

const getAll = async (req, res) => {
  try {
    const posts = await post.getAll();

    return res.status(httpStatusCodes.OK).json(posts);
  } catch ({ status, message }) {
    return res
      .status(status || httpStatusCodes.INTERNAL_SERVER)
      .json({ message });
  }
};

const getById = async (req, res) => {
  const { id } = req.params;

  try {
    const requiredPost = await post.getById(id);

    return res.status(httpStatusCodes.OK).json(requiredPost);
  } catch ({ status, message }) {
    return res
      .status(status || httpStatusCodes.INTERNAL_SERVER)
      .json({ message });
  }
};

const updateById = async (req, res) => {
  const { userId: tokenId } = req.data;
  const { id: postId } = req.params;
  const { title, content } = req.body;

  try {
    const data = { postId, tokenId, title, content };
    const editPost = await post.updateById(data);

    return res.status(httpStatusCodes.OK).json(editPost);
  } catch ({ status, message }) {
    return res
      .status(status || httpStatusCodes.INTERNAL_SERVER)
      .json({ message });
  }
};

const destroy = async (req, res) => {
  const { id: postId } = req.params;
  const { userId: tokenId } = req.data;

  try {
    await post.destroy({ postId, tokenId });

    return res.status(httpStatusCodes.NO_CONTENT).send();
  } catch ({ status, message }) {
    return res
      .status(status || httpStatusCodes.INTERNAL_SERVER)
      .json({ message });
  }
};

module.exports = {
  create,
  getAll,
  getById,
  updateById,
  destroy,
};
