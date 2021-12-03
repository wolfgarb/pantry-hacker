const Recipe = require('../models');

const recipedata = [
  {
    title: 'Chicken Parmesean',
    ing_1: 'chicken',
    ing_2: 'cheese',
    ing_3: 'tomato'
  },
  {
    title: 'Chicken Sandwich',
    ing_1: 'chicken',
    ing_2: 'bread',
    ing_3: 'pickle'
  },
  {
    title: 'PBJ',
    ing_1: 'bread',
    ing_2: 'peanut-butter',
    ing_3: 'jelly'
  },
  {
    title: 'Green Smoothie',
    ing_1: 'kale',
    ing_2: 'milk',
    ing_3: 'banana'
  },
  {
    title: 'Yogurt Parfait',
    ing_1: 'banana',
    ing_2: 'yogurt',
    ing_3: 'strawberry'
  }
];

const seedRecipes = () => Recipe.bulkCreate(recipedata);

module.exports = seedRecipes;
