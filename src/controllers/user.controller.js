const user = require('../services/user.service');
const httpStatusCodes = require('../helpers/httpStatusCodes');

const create = async (req, res) => {
  const userInfo = req.body;

  try {
    const token = await user.create(userInfo);

    return res.status(httpStatusCodes.CREATED).json({ token });
  } catch ({ status, message }) {
    return res.status(status || httpStatusCodes.INTERNAL_SERVER).json({ message });
  }
};

const getAll = async (req, res) => {
  try {
    const users = await user.getAll();

    return res.status(httpStatusCodes.OK).json(users);
  } catch ({ status, message }) {
    return res
      .status(status || httpStatusCodes.INTERNAL_SERVER)
      .json({ message });
  }
};

const getById = async (req, res) => {
  const { id } = req.params;

  try {
    const userById = await user.getById(id);

    return res.status(httpStatusCodes.OK).json(userById);
  } catch ({ status, message }) {
    return res
      .status(status || httpStatusCodes.INTERNAL_SERVER)
      .json({ message });
  }
};

const destroy = async (req, res) => {
  const { userId } = req.data;

  try {
    await user.destroy(userId);

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
  destroy,
};
