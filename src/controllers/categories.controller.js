const httpStatusCodes = require('../helpers/httpStatusCodes');
const categories = require('../services/categories.service');

const create = async (req, res) => {
  const { name } = req.body;

  try {
    const id = await categories.create(name);

    return res.status(httpStatusCodes.CREATED).json({ id, name });
  } catch ({ status, message }) {
    return res
      .status(status || httpStatusCodes.INTERNAL_SERVER)
      .json({ message });
  }
};

const getAll = async (req, res) => {
  try {
    const allCategories = await categories.getAll();

    return res.status(httpStatusCodes.OK).json(allCategories);
  } catch ({ status, message }) {
    return res
      .status(status || httpStatusCodes.INTERNAL_SERVER)
      .json({ message });
  }
};

module.exports = {
  create,
  getAll,
};
