const Sequelize = require('sequelize');
const config = require('../database/config/config');
const { BlogPost, PostCategory, Category, User } = require('../database/models');
const httpStatusCodes = require('../helpers/httpStatusCodes');

const sequelize = new Sequelize(config.development);

const verifyIfCategoriesExist = async (categories) => {
  const { count } = await Category.findAndCountAll({
    where: {
      id: categories,
    },
  });

  if (categories.length === count) return;

  throw new Error();
};

const create = async ({ userId, title, content, categoryIds }) => {
  const t = await sequelize.transaction();

  try {
    await verifyIfCategoriesExist(categoryIds);

    const newPost = await BlogPost.create({
      title, content, userId,
    }, { transaction: t });

    const postCategoriesData = categoryIds
      .map((categoryId) => ({ postId: newPost.id, categoryId }));

    await PostCategory.bulkCreate(postCategoriesData, { transaction: t });

    await t.commit();
    return newPost;
  } catch ({ message }) {
    await t.rollback();

    const error = new Error('"categoryIds" not found');
    error.status = httpStatusCodes.BAD_REQUEST;
    throw error;
  }
};

const getAll = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { model: Category, as: 'categories' },
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
    ],
  });

  return posts;
};

module.exports = {
  create,
  getAll,
};
