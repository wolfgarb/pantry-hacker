const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Recipe extends Model {}

Recipe.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    // array?
    ingredients: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // ing_2: {
    //   type: DataTypes.STRING(50),
    //   allowNull: true
    // },
    // ing_3: {
    //   type: DataTypes.STRING(50),
    //   allowNull: true
    // },
    recipe_text: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'recipe'
  }
);

module.exports = Recipe;
