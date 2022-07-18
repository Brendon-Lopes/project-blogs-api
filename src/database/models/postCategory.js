module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
  }, {
    timestamps: false,
  });

  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      foreignKey: 'categoryId',
      through: PostCategory,
      otherKey: 'categoryId',
    });

    models.Category.belongsToMany(models.BlogPost, {
      as: 'posts',
      foreignKey: 'postId',
      through: PostCategory,
      otherKey: 'postId',
    });
  };

  return PostCategory;
};
