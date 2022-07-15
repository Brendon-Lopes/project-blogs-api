const { Category } = require('../database/models');

const create = async (name) => {
  const { id } = await Category.create({ name });

  return id;
};

const getAll = async () => {
  const categories = await Category.findAll({ raw: true });

  return categories;
};

module.exports = {
  create,
  getAll,
};
