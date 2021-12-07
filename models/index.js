const Recipe = require('./Recipe');
const User = require('./User');
const Comment = require('./Comment');

//create associations
User.hasMany(Recipe, {
    foreignKey: 'user_id'
  });
  
  Recipe.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
  });
  
  Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
  });
  
  Comment.belongsTo(Recipe, {
    foreignKey: 'recipe_id',
    onDelete: 'SET NULL'
  });
  
  User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
  });
  
  Recipe.hasMany(Comment, {
    foreignKey: 'recipe_id'
  });
  

module.exports = { Recipe, User, Comment };
