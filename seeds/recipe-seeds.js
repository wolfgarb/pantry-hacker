const { Recipe } = require('../models');

const recipedata = [
  {
    title: 'Chicken Parmesean',
    ing1: 'chicken',
    ing2: 'cheese',
    ing3: 'tomato',
    recipe_text:
      'Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Etiam non quam lacus suspendisse.'
  },
  {
    title: 'Beef Stroganoff',
    ing1: 'beef',
    ing2: 'bread crumbs',
    ing3: 'pasta',
    recipe_text:
      'Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Etiam non quam lacus suspendisse.'
  },
  {
    title: 'PBJ',
    ing1: 'bread',
    ing2: 'peanut butter',
    ing3: 'jelly',
    recipe_text:
      'Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Etiam non quam lacus suspendisse.'
  },
  {
    title: 'Yogurt Parfait',
    ing1: 'yogurt',
    ing2: 'bananas',
    ing3: 'strawberries',
    recipe_text:
      'Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Etiam non quam lacus suspendisse.'
  },
  {
    title: 'Green Smoothie',
    ing1: 'milk',
    ing2: 'kale',
    ing3: 'bananas',
    recipe_text:
      'Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Etiam non quam lacus suspendisse.'
  }
];

const seedRecipes = () => Recipe.bulkCreate(recipedata);

module.exports = seedRecipes;

