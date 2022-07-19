const { Op } = require('sequelize');
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

const getById = async (id) => {
  const post = await BlogPost.findByPk(id, {
    include: [
      { association: 'categories' },
      { association: 'user', attributes: { exclude: ['password'] } },
    ],
  });

  if (post === null) {
    const error = new Error('Post does not exist');
    error.status = 404;
    throw error;
  }

  return post;
};

const isUserAuthorized = async ({ postId, tokenId }) => {
  const post = await BlogPost.findByPk(postId);

  if (tokenId !== post.userId) {
    const error = new Error('Unauthorized user');
    error.status = 401;
    throw error;
  }
};

const updateById = async ({ postId, tokenId, title, content }) => {
  await isUserAuthorized({ postId, tokenId });

  await BlogPost.update(
    { title, content },
    { where: { id: postId } },
  );

  const editedPost = await getById(postId);

  return editedPost;
};

const doesPostExist = async (id) => {
  const post = await BlogPost.findByPk(id);

  if (post === null) {
    const error = new Error('Post does not exist');
    error.status = 404;
    throw error;
  }
};

const destroy = async ({ postId, tokenId }) => {
  await doesPostExist(postId);

  await isUserAuthorized({ postId, tokenId });

  await BlogPost.destroy({
    where: {
      id: postId,
    },
  });
};

const getByContent = async (query) => {
  const posts = await BlogPost.findAll({
    where: {
      [Op.or]: [
        { title: { [Op.like]: `%${query}%` } },
        { content: { [Op.like]: `%${query}%` } },
      ],
    },
    include: [
      { association: 'categories' },
      { association: 'user', attributes: { exclude: ['password'] } },
    ],
  });

  if (posts === null) return [];

  return posts;
};

module.exports = {
  create,
  getAll,
  getById,
  updateById,
  destroy,
  getByContent,
};
