const router = require('express').Router();
const Recipe = require('../../models/index.js');
const sequelize = require('../../config/connection');

// localhost:3001/api/recipes
router.get('/', (req, res) => {
  Recipe.findAll({
    attributes: ['id', 'title', 'ing_1', 'ing_2', 'ing_3']
  })
    .then((recipeData) => res.json(recipeData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
