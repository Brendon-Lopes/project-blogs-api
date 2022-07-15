module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('Category', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    }
  }, {
    timestamps: false,
  });

  return User;
};
