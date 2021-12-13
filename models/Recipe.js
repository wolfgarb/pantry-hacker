const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// const validator = require('validator-js');

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
    ing1: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    ing2: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: null
    },
    ing3: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: null
    },
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
