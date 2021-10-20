"use strict";
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    "Category",
    {
      name: DataTypes.STRING,
    },
    {
      // timestamps: true,
      // underscored: true,
      // freezeTableName: true,
    }
  );
  Category.associate = function (models) {
    // associations can be defined here
  };
  return Category;
};
