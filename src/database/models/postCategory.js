module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    categoryId: DataTypes.INTEGER,
    postId: DataTypes.INTEGER,
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
