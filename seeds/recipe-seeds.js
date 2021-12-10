const { Recipe } = require('../models');

const recipedata = [
  {
    id: 1,
    title: 'Chicken Parmesean',
    ing_1: 'chicken',
    ing_2: 'cheese',
    ing_3: 'tomato',
    recipe_text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    id: 2,
    title: 'Chicken Sandwich',
    ing_1: 'chicken',
    ing_2: 'bread',
    ing_3: 'pickle',
    recipe_text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    id: 3,
    title: 'PBJ',
    ing_1: 'bread',
    ing_2: 'peanut-butter',
    ing_3: 'jelly',
    recipe_text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    id: 4,
    title: 'Green Smoothie',
    ing_1: 'kale',
    ing_2: 'milk',
    ing_3: 'banana',
    recipe_text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    id: 5,
    title: 'Yogurt Parfait',
    ing_1: 'banana',
    ing_2: 'yogurt',
    ing_3: 'strawberry',
    recipe_text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  }
];

const seedRecipes = () => Recipe.bulkCreate(recipedata);

module.exports = seedRecipes;
