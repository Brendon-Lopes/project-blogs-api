const { Category } = require('../database/models');

const create = async (name) => {
  const { id } = await Category.create({ name });

  return id;
};

module.exports = {
  create,
};
