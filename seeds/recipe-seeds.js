const { Recipe } = require('../models');

const recipedata = [
  {
    title: 'Chicken Parmesean',
    ingredients: 'chicken cheese tomato',
    recipe_text: 'filler'
  },
  {
    title: 'Beef Stroganoff',
    ingredients: 'beef bread crumbs pasta',
    recipe_text: 'filler'
  },
  {
    title: 'PBJ',
    ingredients: 'bread peanut butter jelly',
    recipe_text: 'filler'
  },
  {
    title: 'Yogurt Parfait',
    ingredients: 'yogurt bananas strawberries',
    recipe_text: 'filler'
  },
  {
    title: 'Green Smoothie',
    ingredients: 'milk kale bananas',
    recipe_text: 'filler'
  }
];

const seedRecipes = () => Recipe.bulkCreate(recipedata);

module.exports = seedRecipes;

// {
//   id: 1,
//   title: 'Chicken Parmesean',
//   ing_1: 'chicken',
//   ing_2: 'cheese',
//   ing_3: 'tomato',
//   recipe_text: 'filler'
// },
// {
//   id: 2,
//   title: 'Chicken Sandwich',
//   ing_1: 'chicken',
//   ing_2: 'bread',
//   ing_3: 'pickle',
//   recipe_text: 'filler'
// },
// {
//   id: 3,
//   title: 'PBJ',
//   ing_1: 'bread',
//   ing_2: 'peanut-butter',
//   ing_3: 'jelly',
//   recipe_text: 'filler'
// },
// {
//   id: 4,
//   title: 'Green Smoothie',
//   ing_1: 'kale',
//   ing_2: 'milk',
//   ing_3: 'banana',
//   recipe_text: 'filler'
// },
// {
//   id: 5,
//   title: 'Yogurt Parfait',
//   ing_1: 'banana',
//   ing_2: 'yogurt',
//   ing_3: 'strawberry',
//   recipe_text: 'filler'
// }
