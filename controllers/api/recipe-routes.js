const router = require('express').Router();
const { Recipe, User, Comment } = require('../../models');
const sequelize = require('../../config/connection');
const { Op } = require('sequelize');
const withAuth = require('../../utils/auth');

// GET all recipes
// localhost:3001/api/recipes
router.get('/', (req, res) => {
  console.log(req.body);
  Recipe.findAll({
    include: [
      {
        model: Comment,
        attributes: [
          'id',
          'comment_text',
          'recipe_id',
          'user_id',
          'created_at'
        ],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then((dbRecipeData) => res.json(dbRecipeData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/', (req, res) => {
  console.log(req.body);
  Recipe.findAll({})
    .then((dbRecipeData) => {
      const recipes = dbRecipeData.map((recipe) => recipe.get({ plain: true }));
      console.log(recipes);
      for (let i = 0; i < recipes.length; i++) {
        console.log(recipes[i].ingredients);
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

// router.get('/:ingredient', (req, res) => {
//   Recipe.findAll({
//     where: {
//       ingredients: {
//         // change req.params to array
//         [Op.substring]: `%${req.params.ingredient}%`
//       }
//     }
//   })
//     .then((dbRecipeData) => {
//       if (!dbRecipeData) {
//         res.status(404).json({ message: 'cannot find recipe with this ID ' });
//         return;
//       }
//       const recipes = dbRecipeData.map((recipe) => recipe.get({ plain: true }));
//       console.log(recipes);
//       res.render('search-results', { recipes });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// GET single recipe
// localhost:3001/api/recipes/:id
router.get('/:id', (req, res) => {
  Recipe.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Comment,
        attributes: [
          'id',
          'comment_text',
          'recipe_id',
          'user_id',
          'created_at'
        ],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then((dbRecipeData) => {
      if (!dbRecipeData) {
        res.status(404).json({ message: 'cannot find recipe with this ID ' });
        return;
      }
      res.json(dbRecipeData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//post a recipe
router.post('/', withAuth, (req, res) => {
  Recipe.create({
    title: req.body.title,
    ingredients: req.body.ingredients,
    recipe_text: req.body.recipe_text,
    user_id: req.session.user_id
  })
    .then((dbRecipeData) => res.json(dbRecipeData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//update a recipe based on id
router.put('/:id', withAuth, (req, res) => {
  Recipe.update(
    {
      title: req.body.title,
      ingredients: req.body.ingredients,
      recipe_text: req.body.recipe_text
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then((dbRecipeData) => {
      if (!dbRecipeData) {
        res.status(404).json({ message: 'No recipe found with this id' });
        return;
      }
      res.json(dbRecipeData);
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
    .then((dbRecipeData) => {
      if (!dbRecipeData) {
        res.status(404).json({ message: 'cannot find recipe with this ID' });
        return;
      }
      res.json(dbRecipeData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
