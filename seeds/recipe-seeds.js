const { Recipe } = require('../models');

const recipedata = [
  {
    title: 'Chicken Parmesean',
    ingredients: 'chicken, parmesean, bread crumbs, oregano',
    recipe_text:
      'Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Etiam non quam lacus suspendisse.'
  },
  {
    title: 'Beef Stroganoff',
    ingredients: 'beef, pasta, tomatoes, garlic',
    recipe_text:
      'Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Etiam non quam lacus suspendisse.'
  },
  {
    title: 'PBJ',
    ingredients: 'bread, peanut butter, jelly',
    recipe_text:
      'Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Etiam non quam lacus suspendisse.'
  },
  {
    title: 'Yogurt Parfait',
    ingredients: 'yogurt, bananas, cream, cherries, oats',
    recipe_text:
      'Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Etiam non quam lacus suspendisse.'
  },
  {
    title: 'Green Smoothie',
    ingredients: 'almond milk, kale, bananas, strawberries',
    recipe_text:
      'Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Etiam non quam lacus suspendisse.'
  }
];

const seedRecipes = () => Recipe.bulkCreate(recipedata);

module.exports = seedRecipes;
