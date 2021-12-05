const router = require('express').Router();
const Recipe = require('../../models/index.js');
const sequelize = require('../../config/connection');

// GET all recipes
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

// GET single recipe
// localhost:3001/api/recipes/:id
router.get('/:id', (req, res) => {
  Recipe.findOne({
    where: {
      id: req.params.id
    },
    attributes: ['id', 'title', 'ing_1', 'ing_2', 'ing_3']
  })
    .then((recipeData) => {
      if (!recipeData) {
        res.status(404).json({ message: 'cannot find recipe with this ID ' });
        return;
      }
      res.json(recipeData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// DELETE recipes
router.delete('/:id', (req, res) => {
  Recipe.destroy({
    where: {
      id: req.params.id
    }
  })
    .then((recipeData) => {
      if (!recipeData) {
        res.status(404).json({ message: 'cannot find recipe with this ID' });
        return;
      }
      res.json(recipeData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
