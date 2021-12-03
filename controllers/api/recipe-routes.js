const router = require('express').Router();
const Recipe = require('../../models/index.js');
const sequelize = require('../../config/connection');


router.get('/recipes', (req, res) => {
  Recipe.findAll({
    attributes: ['id', 'title', 'ing_1', 'ing_2', 'ing_3']
  });
});

module.exports = router;
